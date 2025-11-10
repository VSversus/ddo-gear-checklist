# DDO Gear Properties Checklist

A simple, mobile-friendly web application to help Dungeons & Dragons Online (DDO) players track their endgame gear properties and identify missing bonuses.

## Features

- 📱 **Mobile-First Design**: Fully responsive interface that works great on phones, tablets, and desktop
- ✅ **Property Tracking**: Comprehensive checklist of DDO gear properties organized by categories
- 🎯 **Priority System**: Customizable priority levels (0-3) for each property type
- 📊 **Progress Visualization**: Real-time progress tracking with visual indicators
- 💾 **Local Storage**: Your progress is automatically saved in your browser
- 📤 **Export & Import Function**: Export your progress as JSON for backup or sharing
- 🔄 **Collapsible Groups**: Organize your view by collapsing/expanding property categories

## How to Use

### Managing Properties
- **Check Properties**: Click the checkbox next to any property you have covered on your gear
- **Set Priorities**: Use the number input (0-3) to set custom priority levels for each property
- **Group Management**: Click on group headers to collapse/expand categories
- **Progress Tracking**: Monitor your overall progress in the stats summary at the top

### Priority System
The priority system helps you focus on the most important properties first:

- **Priority 1** (Red): Critical/Essential bonuses
- **Priority 2** (Orange): Important bonuses  
- **Priority 3** (Green): Nice to have bonuses

Properties are automatically sorted by priority within each group, with lower numbers appearing first.

### Data Management
- **Auto-Save**: Your selections and custom priorities are automatically saved to browser storage
- **Reset**: Use the "Reset All" button to clear all progress and custom priorities
- **Export**: Use the "Export Progress" button to download a JSON file with your current state

## Technical Details

This is a simple client-side web application built with:
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Mobile-first responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks or dependencies
- **localStorage API**: Client-side data persistence

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
- Fixing bugs or improving performance
---

**Happy adventuring in DDO!** 🏰⚔️