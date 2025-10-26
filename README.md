# DDO Gear Properties Checklist

A simple, mobile-friendly web application to help Dungeons & Dragons Online (DDO) players track their endgame gear properties and identify missing bonuses.

## Features

- 📱 **Mobile-First Design**: Fully responsive interface that works great on phones, tablets, and desktop
- ✅ **Property Tracking**: Comprehensive checklist of DDO gear properties organized by categories
- 🎯 **Priority System**: Customizable priority levels (1-5) for each property type
- 📊 **Progress Visualization**: Real-time progress tracking with visual indicators
- 💾 **Local Storage**: Your progress is automatically saved in your browser
- 📤 **Export Function**: Export your progress as JSON for backup or sharing
- 🔄 **Collapsible Groups**: Organize your view by collapsing/expanding property categories

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. The application will load with all property groups expanded
3. Your progress is automatically saved as you make changes

### Managing Properties
- **Check Properties**: Click the checkbox next to any property you have covered on your gear
- **Set Priorities**: Use the number input (1-5) to set custom priority levels for each property
- **Group Management**: Click on group headers to collapse/expand categories
- **Progress Tracking**: Monitor your overall progress in the stats summary at the top

### Priority System
The priority system helps you focus on the most important properties first:

- **Priority 1** (Red): Critical/Essential bonuses
- **Priority 2** (Orange): Very Important bonuses  
- **Priority 3** (Yellow): Important bonuses
- **Priority 4** (Green): Nice to have bonuses
- **Priority 5** (Blue): Optional bonuses

Properties are automatically sorted by priority within each group, with lower numbers appearing first.

### Data Management
- **Auto-Save**: Your selections and custom priorities are automatically saved to browser storage
- **Reset**: Use the "Reset All" button to clear all progress and custom priorities
- **Export**: Use the "Export Progress" button to download a JSON file with your current state

## Property Categories

The application includes the following property groups:

### 💪 Ability Scores
Constitution, Strength, Dexterity, Intelligence, Wisdom, and Charisma bonuses (Enhancement, Insightful, Quality, Profane)

### ❤️ Hit Points & Fortification
False Life bonuses, Vitality, and Fortification levels

### 🛡️ Saves
Resistance bonuses (all saves) and individual save bonuses

### 🎯 Skills
Universal skill bonuses and individual skill enhancements

### 🔮 Spell Points & Spell Power
Spell point bonuses and spell power bonuses (universal and elemental)

### 🔰 Resistances
Elemental resistances and spell resistance

### ⚔️ Combat Bonuses
Attack, damage, critical hit bonuses (Seeker, Deadly, Combat Mastery)

### 🛡️ Armor Class
Natural armor, deflection, dodge, and sheltering bonuses

## Technical Details

This is a simple client-side web application built with:
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Mobile-first responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks or dependencies
- **localStorage API**: Client-side data persistence

### File Structure
```
ddo-gear-checklist/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Application logic and data
└── README.md       # This documentation
```

## Customization

### Adding New Properties
To add new gear properties, edit the `gearProperties` object in `script.js`:

```javascript
"New Category": {
    icon: "🆕",
    properties: {
        "Property Name": { 
            priority: 2, 
            description: "Description of the property" 
        }
    }
}
```

### Modifying Existing Properties
You can modify existing properties by:
1. Changing the default priority values in the data structure
2. Adding new bonus types to existing categories
3. Updating descriptions or property names

### Styling Changes
The CSS uses CSS custom properties (variables) for easy theming. Key variables are defined at the top of `styles.css`.

## Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **Mobile**: iOS Safari 11+, Chrome Mobile 60+
- **Features Used**: CSS Grid, Flexbox, localStorage, ES6 features

## Accessibility Features

- Semantic HTML structure
- ARIA labels and proper form controls
- Keyboard navigation support  
- High contrast mode support
- Reduced motion support for users with vestibular disorders
- Touch-friendly interface with 44px minimum touch targets

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to contribute by:
- Adding more DDO properties to the database
- Improving the user interface
- Adding new features like gear set tracking
- Fixing bugs or improving performance

## Development Notes

### Learning Objectives
This project was designed as a learning exercise for frontend development, demonstrating:
- Mobile-first responsive design principles
- CSS Grid and Flexbox layouts
- Vanilla JavaScript application architecture
- Client-side data persistence
- Accessibility best practices
- Progressive enhancement

### Future Enhancements
Potential improvements could include:
- Gear set tracking and bonuses
- Import functionality for saved progress
- Multiple character profiles
- Export to different formats (CSV, PDF)
- Dark mode toggle
- Offline functionality with Service Workers

---

**Happy adventuring in DDO!** 🏰⚔️