// DDO Gear Properties Checklist Application
// Properties data is loaded from gearProperties.js

// Application state
let appState = {
    checkedProperties: new Set(),
    customPriorities: {},
    collapsedGroups: new Set(),
    disabledProperties: new Set(),
    currentRole: 'dps' // Default role: dps, tank, or spellcaster
};

// Helper function to get priority for current role
function getPriorityForRole(propertyData) {
    // If priority is a number (old format), return it
    if (typeof propertyData.priority === 'number') {
        return propertyData.priority;
    }
    // If priority is an object (new format), return priority for current role
    if (typeof propertyData.priority === 'object') {
        return propertyData.priority[appState.currentRole] ?? 1;
    }
    // Fallback
    return 1;
}

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
    
    const setDpsBtn = document.getElementById('set-dps-btn');
    const setTankBtn = document.getElementById('set-tank-btn');
    const setSpellcasterBtn = document.getElementById('set-spellcaster-btn');

    // Load saved state from localStorage
    const saved = localStorage.getItem('ddo-gear-checklist-state');
    if (saved) {
        loadStateFromStorage();
    } else {
        // No saved state: set all properties to priority 2 by default
        Object.entries(gearProperties).forEach(([groupName, groupData]) => {
            Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
                const propertyId = `${groupName}:${propertyName}`;
                appState.customPriorities[propertyId] = 2;
            });
        });
    }

    // Render the property groups
    renderPropertyGroups();

    // Update progress
    updateProgress();

    // Setup event listeners
    setupEventListeners();

    // Setup preset button listeners
    setDpsBtn.addEventListener('click', () => setRolePreset('dps'));
    setTankBtn.addEventListener('click', () => setRolePreset('tank'));
    setSpellcasterBtn.addEventListener('click', () => setRolePreset('spellcaster'));
}

function setupEventListeners() {
    resetBtn.addEventListener('click', resetAllProperties);
    exportBtn.addEventListener('click', exportProgress);
    enableAllBtn.addEventListener('click', () => toggleAllProperties(true));
    disableAllBtn.addEventListener('click', () => toggleAllProperties(false));
}

function setRolePreset(role) {
    if (confirm(`Set all properties to ${role.toUpperCase()} defaults? This will override your current custom priorities.`)) {
        // Set the current role
        appState.currentRole = role;
        
        // Clear custom priorities and apply role defaults
        appState.customPriorities = {};
        appState.disabledProperties.clear();
        
        // Apply role-based priorities
        Object.entries(gearProperties).forEach(([groupName, groupData]) => {
            Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
                const propertyId = `${groupName}:${propertyName}`;
                const rolePriority = getPriorityForRole(propertyData);
                
                // Set custom priority to the role's default
                appState.customPriorities[propertyId] = rolePriority;
                
                // If priority is 0, add to disabled properties
                if (rolePriority === 0) {
                    appState.disabledProperties.add(propertyId);
                }
            });
        });
        
        // Re-render and save
        renderPropertyGroups();
        updateProgress();
        saveStateToStorage();
    }
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
    
    // Render properties in the order they're defined in the file
    Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
        const propertyElement = createPropertyElement(propertyName, propertyData, groupName);
        propertiesContainer.appendChild(propertyElement);
    });
    
    group.appendChild(propertiesContainer);
    return group;
}

function createPropertyElement(propertyName, propertyData, groupName) {
    const propertyId = `${groupName}:${propertyName}`;
    const defaultPriority = getPriorityForRole(propertyData);
    const currentPriority = appState.customPriorities[propertyId] ?? defaultPriority;
    const isChecked = appState.checkedProperties.has(propertyId);
    // A property is disabled if it's in disabledProperties OR has priority 0
    const isDisabled = appState.disabledProperties.has(propertyId) || currentPriority === 0;

    const property = document.createElement('div');
    property.className = `property priority-${currentPriority}${isChecked ? ' checked' : ''}${isDisabled ? ' disabled' : ''}`;
    
    property.innerHTML = `
        <label class="property-label">
            <input type="checkbox" ${isChecked ? 'checked' : ''} 
                   data-property-id="${propertyId}" ${isDisabled ? 'disabled' : ''}>
            <span class="property-name">${propertyName}</span>
        </label>
        <div class="priority-selector">
            <button class="priority-btn ${currentPriority === 0 ? 'active' : ''}" 
                    data-priority="0" data-property-id="${propertyId}" 
                    title="Priority 0 - Disabled">0</button>
            <button class="priority-btn ${currentPriority === 1 ? 'active' : ''}" 
                    data-priority="1" data-property-id="${propertyId}" 
                    title="Priority 1 - Critical">1</button>
            <button class="priority-btn ${currentPriority === 2 ? 'active' : ''}" 
                    data-priority="2" data-property-id="${propertyId}" 
                    title="Priority 2 - Important">2</button>
            <button class="priority-btn ${currentPriority === 3 ? 'active' : ''}" 
                    data-priority="3" data-property-id="${propertyId}" 
                    title="Priority 3 - Nice-to-have">3</button>
        </div>
    `;

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
            
            // Handle priority 0 (disabled state)
            if (newPriority === 0) {
                appState.disabledProperties.add(propertyId);
                appState.customPriorities[propertyId] = 0;
            } else {
                appState.disabledProperties.delete(propertyId);
                appState.customPriorities[propertyId] = newPriority;
            }
            
            // Re-render to update the UI
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
    
    Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
        const propertyId = `${groupName}:${propertyName}`;
        
        if (enable) {
            // Restore to default priority or keep custom priority if not 0
            const currentPriority = appState.customPriorities[propertyId];
            if (currentPriority === 0) {
                const defaultPriority = getPriorityForRole(propertyData);
                appState.customPriorities[propertyId] = defaultPriority;
            }
            appState.disabledProperties.delete(propertyId);
        } else {
            // Set to priority 0 (disabled)
            appState.customPriorities[propertyId] = 0;
            appState.disabledProperties.add(propertyId);
        }
    });
    
    renderPropertyGroups();
    updateProgress();
    saveStateToStorage();
}

function toggleAllProperties(enable) {
    Object.entries(gearProperties).forEach(([groupName, groupData]) => {
        Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
            const propertyId = `${groupName}:${propertyName}`;
            
            if (enable) {
                // Restore to default priority or keep custom priority if not 0
                const currentPriority = appState.customPriorities[propertyId];
                if (currentPriority === 0) {
                    const defaultPriority = getPriorityForRole(propertyData);
                    appState.customPriorities[propertyId] = defaultPriority;
                }
                appState.disabledProperties.delete(propertyId);
            } else {
                // Set to priority 0 (disabled)
                appState.customPriorities[propertyId] = 0;
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
            const defaultPriority = getPriorityForRole(propertyData);
            const currentPriority = appState.customPriorities[propertyId] ?? defaultPriority;
            
            // Skip disabled properties and priority 0 in progress calculation
            if (isDisabled || currentPriority === 0) {
                return;
            }
            
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
    if (confirm('Are you sure you want to reset all properties? This will clear all checkmarks, custom priorities, and disabled states, and set all priorities to 2.')) {
        appState.checkedProperties.clear();
        appState.customPriorities = {};
        appState.collapsedGroups.clear();
        appState.disabledProperties.clear();

        // Set all properties to priority 2
        Object.entries(gearProperties).forEach(([groupName, groupData]) => {
            Object.entries(groupData.properties).forEach(([propertyName, propertyData]) => {
                const propertyId = `${groupName}:${propertyName}`;
                appState.customPriorities[propertyId] = 2;
            });
        });

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
        currentRole: appState.currentRole,
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
        disabledProperties: Array.from(appState.disabledProperties),
        currentRole: appState.currentRole
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
            appState.currentRole = state.currentRole || 'dps';
        } catch (e) {
            console.warn('Failed to load saved state:', e);
        }
    }
}