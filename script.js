// DDO Gear Properties Checklist Application
// Properties data is loaded from gearProperties.js

// Application state
let appState = {
    checkedProperties: new Set(),
    customPriorities: {},
    collapsedGroups: new Set(),
    disabledProperties: new Set()
};

// DOM elements
let propertyGroupsContainer;
let priority1ProgressBar;
let priority2ProgressBar;
let priority3ProgressBar;
let priority1Text;
let priority2Text;
let priority3Text;
let resetBtn;
let exportBtn;
let enableAllBtn;
let disableAllBtn;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    propertyGroupsContainer = document.getElementById('property-groups');
    priority1ProgressBar = document.getElementById('priority-1-progress');
    priority2ProgressBar = document.getElementById('priority-2-progress');
    priority3ProgressBar = document.getElementById('priority-3-progress');
    priority1Text = document.getElementById('priority-1-text');
    priority2Text = document.getElementById('priority-2-text');
    priority3Text = document.getElementById('priority-3-text');
    resetBtn = document.getElementById('reset-btn');
    exportBtn = document.getElementById('export-btn');
    enableAllBtn = document.getElementById('enable-all-btn');
    disableAllBtn = document.getElementById('disable-all-btn');

    // Load saved state from localStorage
    loadStateFromStorage();

    // Render the property groups
    renderPropertyGroups();

    // Update progress
    updateProgress();

    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    resetBtn.addEventListener('click', resetAllProperties);
    exportBtn.addEventListener('click', exportProgress);
    enableAllBtn.addEventListener('click', () => toggleAllProperties(true));
    disableAllBtn.addEventListener('click', () => toggleAllProperties(false));
}

function renderPropertyGroups() {
    propertyGroupsContainer.innerHTML = '';
    
    Object.entries(gearProperties).forEach(([groupName, groupData]) => {
        const groupElement = createPropertyGroup(groupName, groupData);
        propertyGroupsContainer.appendChild(groupElement);
    });
}

function createPropertyGroup(groupName, groupData) {
    const group = document.createElement('div');
    group.className = 'property-group';
    
    const isCollapsed = appState.collapsedGroups.has(groupName);
    if (isCollapsed) {
        group.classList.add('collapsed');
    }

    // Header
    const header = document.createElement('div');
    header.className = 'group-header';
    header.innerHTML = `
        <span class="group-title">${groupName}</span>
        <div class="group-controls">
            <button class="group-toggle-btn" data-group="${groupName}" data-action="enable-all" title="Enable all properties in this group">
                👁️
            </button>
            <button class="group-toggle-btn" data-group="${groupName}" data-action="disable-all" title="Disable all properties in this group">
                👁️‍🗨️
            </button>
        </div>
        <span class="collapse-arrow">${isCollapsed ? '▶' : '▼'}</span>
    `;
    
    // Add click handler for collapse functionality (only on title area)
    const titleArea = header.querySelector('.group-title');
    const collapseArrow = header.querySelector('.collapse-arrow');
    [titleArea, collapseArrow].forEach(element => {
        element.addEventListener('click', () => toggleGroup(groupName));
        element.style.cursor = 'pointer';
    });

    // Add handlers for group toggle buttons
    const groupControls = header.querySelectorAll('.group-toggle-btn');
    groupControls.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent group collapse
            const action = e.target.dataset.action;
            const groupName = e.target.dataset.group;
            toggleGroupProperties(groupName, action === 'enable-all');
        });
    });
    
    group.appendChild(header);

    // Properties container
    const propertiesContainer = document.createElement('div');
    propertiesContainer.className = 'properties-container';
    
    // Sort properties by priority (1, 2, 3) then alphabetically
    const sortedProperties = Object.entries(groupData.properties).sort((a, b) => {
        const [nameA, dataA] = a;
        const [nameB, dataB] = b;
        const propertyIdA = `${groupName}:${nameA}`;
        const propertyIdB = `${groupName}:${nameB}`;
        
        // Get current priority (custom or default)
        const priorityA = appState.customPriorities[propertyIdA] || dataA.priority;
        const priorityB = appState.customPriorities[propertyIdB] || dataB.priority;
        
        // First sort by priority
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        
        // Then sort alphabetically
        return nameA.localeCompare(nameB);
    });
    
    // Group properties by priority for rendering
    const propertyGroups = { 1: [], 2: [], 3: [] };
    sortedProperties.forEach(([propertyName, propertyData]) => {
        const propertyId = `${groupName}:${propertyName}`;
        const currentPriority = appState.customPriorities[propertyId] || propertyData.priority;
        propertyGroups[currentPriority].push([propertyName, propertyData]);
    });
    
    // Render each priority group with separator
    [1, 2, 3].forEach(priority => {
        if (propertyGroups[priority].length > 0) {
            // Add properties for this priority
            propertyGroups[priority].forEach(([propertyName, propertyData]) => {
                const propertyElement = createPropertyElement(propertyName, propertyData, groupName);
                propertiesContainer.appendChild(propertyElement);
            });
        }
    });
    
    group.appendChild(propertiesContainer);
    return group;
}

function createPropertyElement(propertyName, propertyData, groupName) {
    const propertyId = `${groupName}:${propertyName}`;
    const currentPriority = appState.customPriorities[propertyId] || propertyData.priority;
    const isChecked = appState.checkedProperties.has(propertyId);
    const isDisabled = appState.disabledProperties.has(propertyId);

    const property = document.createElement('div');
    property.className = `property priority-${currentPriority}${isChecked ? ' checked' : ''}${isDisabled ? ' disabled' : ''}`;
    
    property.innerHTML = `
        <div class="property-controls">
            <button class="toggle-btn ${isDisabled ? 'disabled' : 'enabled'}" 
                    data-property-id="${propertyId}" 
                    title="${isDisabled ? 'Enable this property' : 'Disable this property'}">
                ${isDisabled ? '👁️‍🗨️' : '👁️'}
            </button>
        </div>
        <label class="property-label">
            <input type="checkbox" ${isChecked ? 'checked' : ''} 
                   data-property-id="${propertyId}" ${isDisabled ? 'disabled' : ''}>
            <span class="property-name">${propertyName}</span>
        </label>
        <div class="priority-selector">
            <button class="priority-btn ${currentPriority === 1 ? 'active' : ''}" 
                    data-priority="1" data-property-id="${propertyId}" ${isDisabled ? 'disabled' : ''} 
                    title="Priority 1 - Critical">1</button>
            <button class="priority-btn ${currentPriority === 2 ? 'active' : ''}" 
                    data-priority="2" data-property-id="${propertyId}" ${isDisabled ? 'disabled' : ''} 
                    title="Priority 2 - Important">2</button>
            <button class="priority-btn ${currentPriority === 3 ? 'active' : ''}" 
                    data-priority="3" data-property-id="${propertyId}" ${isDisabled ? 'disabled' : ''} 
                    title="Priority 3 - Nice-to-have">3</button>
        </div>
    `;

    // Add event listeners
    const toggleBtn = property.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', (e) => {
        const propertyId = e.target.dataset.propertyId;
        
        if (appState.disabledProperties.has(propertyId)) {
            // Enable the property
            appState.disabledProperties.delete(propertyId);
            property.classList.remove('disabled');
            toggleBtn.classList.remove('disabled');
            toggleBtn.classList.add('enabled');
            toggleBtn.innerHTML = '👁️';
            toggleBtn.title = 'Disable this property';
            
            // Re-enable controls
            const checkbox = property.querySelector('input[type="checkbox"]');
            const priorityButtons = property.querySelectorAll('.priority-btn');
            checkbox.disabled = false;
            priorityButtons.forEach(btn => btn.disabled = false);
            
        } else {
            // Disable the property
            appState.disabledProperties.add(propertyId);
            property.classList.add('disabled');
            toggleBtn.classList.remove('enabled');
            toggleBtn.classList.add('disabled');
            toggleBtn.innerHTML = '👁️‍🗨️';
            toggleBtn.title = 'Enable this property';
            
            // Disable controls
            const checkbox = property.querySelector('input[type="checkbox"]');
            const priorityButtons = property.querySelectorAll('.priority-btn');
            checkbox.disabled = true;
            priorityButtons.forEach(btn => btn.disabled = true);
        }
        
        updateProgress();
        saveStateToStorage();
    });

    const checkbox = property.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            appState.checkedProperties.add(propertyId);
            property.classList.add('checked');
        } else {
            appState.checkedProperties.delete(propertyId);
            property.classList.remove('checked');
        }
        updateProgress();
        saveStateToStorage();
    });

    const priorityButtons = property.querySelectorAll('.priority-btn');
    priorityButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newPriority = parseInt(e.target.dataset.priority);
            const propertyId = e.target.dataset.propertyId;
            
            // Update custom priorities
            appState.customPriorities[propertyId] = newPriority;
            
            // Update button states
            priorityButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update property class (preserve disabled state)
            const isDisabled = appState.disabledProperties.has(propertyId);
            property.className = `property priority-${newPriority}${isChecked ? ' checked' : ''}${isDisabled ? ' disabled' : ''}`;
            
            // Re-render to update sorting
            renderPropertyGroups();
            updateProgress();
            saveStateToStorage();
        });
    });

    return property;
}

function toggleGroup(groupName) {
    if (appState.collapsedGroups.has(groupName)) {
        appState.collapsedGroups.delete(groupName);
    } else {
        appState.collapsedGroups.add(groupName);
    }
    
    renderPropertyGroups();
    saveStateToStorage();
}

function toggleGroupProperties(groupName, enable) {
    const groupData = gearProperties[groupName];
    if (!groupData) return;
    
    Object.keys(groupData.properties).forEach(propertyName => {
        const propertyId = `${groupName}:${propertyName}`;
        
        if (enable) {
            appState.disabledProperties.delete(propertyId);
        } else {
            appState.disabledProperties.add(propertyId);
        }
    });
    
    renderPropertyGroups();
    updateProgress();
    saveStateToStorage();
}

function toggleAllProperties(enable) {
    Object.entries(gearProperties).forEach(([groupName, groupData]) => {
        Object.keys(groupData.properties).forEach(propertyName => {
            const propertyId = `${groupName}:${propertyName}`;
            
            if (enable) {
                appState.disabledProperties.delete(propertyId);
            } else {
                appState.disabledProperties.add(propertyId);
            }
        });
    });
    
    renderPropertyGroups();
    updateProgress();
    saveStateToStorage();
}

function updateProgress() {
    const stats = calculateProgress();
    
    // Update progress bars
    updateProgressBar(priority1ProgressBar, stats.priority1.checked, stats.priority1.total);
    updateProgressBar(priority2ProgressBar, stats.priority2.checked, stats.priority2.total);
    updateProgressBar(priority3ProgressBar, stats.priority3.checked, stats.priority3.total);
    
    // Update text
    priority1Text.textContent = `Critical: ${stats.priority1.checked}/${stats.priority1.total}`;
    priority2Text.textContent = `Important: ${stats.priority2.checked}/${stats.priority2.total}`;
    priority3Text.textContent = `Nice-to-have: ${stats.priority3.checked}/${stats.priority3.total}`;
}

function updateProgressBar(progressBar, checked, total) {
    const percentage = total > 0 ? (checked / total) * 100 : 0;
    progressBar.style.width = `${percentage}%`;
}

function calculateProgress() {
    const stats = {
        priority1: { checked: 0, total: 0 },
        priority2: { checked: 0, total: 0 },
        priority3: { checked: 0, total: 0 }
    };

    Object.entries(gearProperties).forEach(([groupName, groupData]) => {
        Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
            const propertyId = `${groupName}:${propertyName}`;
            const isDisabled = appState.disabledProperties.has(propertyId);
            
            // Skip disabled properties in progress calculation
            if (isDisabled) {
                return;
            }
            
            const currentPriority = appState.customPriorities[propertyId] || propertyData.priority;
            const isChecked = appState.checkedProperties.has(propertyId);

            stats[`priority${currentPriority}`].total++;
            if (isChecked) {
                stats[`priority${currentPriority}`].checked++;
            }
        });
    });

    return stats;
}

function resetAllProperties() {
    if (confirm('Are you sure you want to reset all properties? This will clear all checkmarks, custom priorities, and disabled states.')) {
        appState.checkedProperties.clear();
        appState.customPriorities = {};
        appState.collapsedGroups.clear();
        appState.disabledProperties.clear();
        
        renderPropertyGroups();
        updateProgress();
        saveStateToStorage();
    }
}

function exportProgress() {
    const stats = calculateProgress();
    const checkedProperties = Array.from(appState.checkedProperties);
    
    const exportData = {
        timestamp: new Date().toISOString(),
        statistics: stats,
        checkedProperties: checkedProperties,
        customPriorities: appState.customPriorities,
        disabledProperties: Array.from(appState.disabledProperties)
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `ddo-gear-checklist-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function saveStateToStorage() {
    const state = {
        checkedProperties: Array.from(appState.checkedProperties),
        customPriorities: appState.customPriorities,
        collapsedGroups: Array.from(appState.collapsedGroups),
        disabledProperties: Array.from(appState.disabledProperties)
    };
    localStorage.setItem('ddo-gear-checklist-state', JSON.stringify(state));
}

function loadStateFromStorage() {
    const saved = localStorage.getItem('ddo-gear-checklist-state');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            appState.checkedProperties = new Set(state.checkedProperties || []);
            appState.customPriorities = state.customPriorities || {};
            appState.collapsedGroups = new Set(state.collapsedGroups || []);
            appState.disabledProperties = new Set(state.disabledProperties || []);
        } catch (e) {
            console.warn('Failed to load saved state:', e);
        }
    }
}