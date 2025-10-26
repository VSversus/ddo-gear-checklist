// DDO Gear Properties Data
// Comprehensive melee-focused properties organized by category and priority
// Priority levels: 1 = Critical, 2 = Important, 3 = Nice-to-have

const gearProperties = {
    "Primary Ability": {
        properties: {
            "Primary Ability Enhancement": { priority: 1 },
            "Primary Ability Insightful": { priority: 1 },
            "Primary Ability Quality": { priority: 3 },
            "Primary Ability Artifact": { priority: 2 },
            "Primary Ability Profane": { priority: 2 },
            "Primary Ability Festive": { priority: 3 },
            "Primary Ability Exceptional": { priority: 3 }
        }
    },
    "Constitution": {
        properties: {
            "Constitution Enhancement": { priority: 1 },
            "Constitution Insightful": { priority: 1 },
            "Constitution Quality": { priority: 3 },
            "Constitution Artifact": { priority: 2 },
            "Constitution Profane": { priority: 2 },
            "Constitution Festive": { priority: 3 },
            "Constitution Exceptional": { priority: 3 }
        }
    },
    "Deadly": {
        properties: {
            "Deadly Enhancement": { priority: 1 },
            "Deadly Insightful": { priority: 2 },
            "Deadly Quality": { priority: 2 },
            "Deadly Artifact": { priority: 2 },
            "Deadly Profane": { priority: 2 },
            "Relentless Fury": { priority: 3 }
        }
    },
    "Seeker": {
        properties: {
            "Seeker Enhancement": { priority: 1 },
            "Seeker Insightful": { priority: 2 },
            "Seeker Quality": { priority: 2 },
            "Seeker Exceptional": { priority: 3 }
        }
    },
    "Accuracy": {
        properties: {
            "Accuracy Enhancement": { priority: 1 },
            "Accuracy Insightful": { priority: 2 },
            "Accuracy Quality": { priority: 2 },
            "Accuracy Artifact": { priority: 2 },
            "Accuracy Profane": { priority: 2 }
        }
    },
    "Doublestrike/Doubleshot": {
        properties: {
            "Doublestrike/Doubleshot Enhancement": { priority: 1 },
            "Doublestrike/Doubleshot Insightful": { priority: 2 },
            "Doublestrike/Doubleshot Quality": { priority: 2 },
            "Doublestrike/Doubleshot Artifact": { priority: 2 }
        }
    },
    "Fortification & Dodge Bypass": {
        properties: {
            "Fortification Bypass Enhancement": { priority: 1 },
            "Fortification Bypass Insightful": { priority: 2 },
            "Fortification Bypass Artifact": { priority: 2 },
            "Fortification Bypass Legendary": { priority: 2 },
            "Dodge Bypass": { priority: 3 }
        }
    },
    "Speed": {
        properties: {
            "Attack Speed": { priority: 1 },
            "Movement Speed": { priority: 1 },
        }
    },
    "Miscellaneous": {
        properties: {
            "True Seeing": { priority: 1 },
            "Feather Fall": { priority: 1 },
            "Master's Gift": { priority: 2 },
            "Good Luck": { priority: 2 },
            "Keen": { priority: 1 },
            "Ghost Touch": { priority: 1 },
            "Deathblock": { priority: 1 },
            "Tendon Slice": { priority: 3 },
            "Freedom of Movement": { priority: 2 },
        }
    },
    "Avoidance": {
        properties: {
            "Dodge": { priority: 1 },
            "Dodge Insightful": { priority: 2 },
            "Dodge Quality": { priority: 3 },
            "Dodge Artifact": { priority: 2 },
            "Dodge Cap": { priority: 2 },
            "Ghostly/Enhanced Ghostly": { priority: 2 },
            "Blurry/Concealment": { priority: 2 },
            "Missile Deflection": { priority: 2 }
        }
    },
    "Hit Points": {
        properties: {
            "False Life Enhancement": { priority: 1 },
            "False Life Insightful": { priority: 2 },
            "False Life Quality": { priority: 3 },
            "Vitality": { priority: 2 },
            "Profane Life-Force": { priority: 3 },
            "% Legendary Bonus to Max HP": { priority: 1 },
            "Undying": { priority: 2 }
        }
    },
    "Healing Amplification": {
        properties: {
            "Healing Amplification Competence": { priority: 1 },
            "Healing Amplification Artifact": { priority: 2 },
            "Healing Amplification Profane": { priority: 2 },
            "Healing Amplification Exceptional": { priority: 3 },
            "Healing Amplification Equipped": { priority: 3 }
        }
    },
    "PRR (Physical Resistance Rating)": {
        properties: {
            "PRR Enhancement": { priority: 1 },
            "PRR Insightful": { priority: 2 },
            "PRR Quality": { priority: 3 },
            "PRR Artifact": { priority: 2 },
            "PRR Profane": { priority: 2 }
        }
    },
    "MRR (Magical Resistance Rating)": {
        properties: {
            "MRR Enhancement": { priority: 1 },
            "MRR Insightful": { priority: 2 },
            "MRR Quality": { priority: 3 },
            "MRR Artifact": { priority: 2 },
            "MRR Profane": { priority: 2 }
        }
    },
    "Melee Power": {
        properties: {
            "Melee Power Enhancement": { priority: 3 },
            "Melee Power Artifact": { priority: 2 },
            "Melee Power Profane": { priority: 2 }
        }
    },
    "Helplessness Damage": {
        properties: {
            "Helplessness Damage Artifact": { priority: 2 }
        }
    },
    "Fortification": {
        properties: {
            "Fortification Enhancement": { priority: 1 },
            "Fortification Insightful": { priority: 2 },
            "Fortification Quality": { priority: 3 }
        }
    },
    "Sneak Attack": {
        properties: {
            "Sneak Attack Enhancement (Deception)": { priority: 1 },
            "Improved Deception": { priority: 2 },
            "Deception Artifact": { priority: 2 }
        }
    },
    "Armor Class": {
        properties: {
            "Natural Armor": { priority: 2 },
            "Shield Bonus": { priority: 2 },
            "Deflection (Protection)": { priority: 2 },
            "Parrying": { priority: 3 },
            "% Artifact AC": { priority: 3 }
        }
    },
    "Elemental Defense": {
        properties: {
            "Fire Resistance": { priority: 2 },
            "Cold Resistance": { priority: 2 },
            "Lightning Resistance": { priority: 2 },
            "Acid Resistance": { priority: 2 },
            "Poison Resistance": { priority: 2 },
            "Fire Absorption": { priority: 2 },
            "Cold Absorption": { priority: 2 },
            "Lightning Absorption": { priority: 2 },
            "Acid Absorption": { priority: 2 },
            "Poison Absorption": { priority: 2 }
        }
    },
    "Saving Throws": {
        properties: {
            "Will Enhancement": { priority: 1 },
            "Fortitude Enhancement": { priority: 1 },
            "Reflex Enhancement": { priority: 1 },
            "Will Insightful": { priority: 3 },
            "Fortitude Insightful": { priority: 3 },
            "Reflex Insightful": { priority: 3 },
            "Will Quality": { priority: 3 },
            "Fortitude Quality": { priority: 3 },
            "Reflex Quality": { priority: 3 }
        }
    },
    "Spell Defense": {
        properties: {
            "Spell Resistance": { priority: 2 },
            "Spell Resistance Insightful": { priority: 3 },
            "Spell Save": { priority: 3 }
        }
    },
    "Threat Decrease": {
        properties: {
            "Diversion": { priority: 1 },
            "Diversion Insightful": { priority: 2 },
            "Diversion Quality": { priority: 3 },
            "Diversion Artifact": { priority: 3 }
        }
    },
    "Special Abilities": {
        properties: {
            "Combat Mastery Enhancement": { priority: 3 },
            "Combat Mastery Insightful": { priority: 3 },
            "Combat Mastery Quality": { priority: 3 },
            "Combat Mastery Artifact": { priority: 3 },
            "Combat Mastery Profane": { priority: 3 },
            "Strikethrough Artifact": { priority: 3 },
            "Assassinate Enhancement": { priority: 3 },
            "Assassinate Insightful": { priority: 3 },
            "Assassinate Quality": { priority: 3 },
            "Imbue Dice Enhancement": { priority: 3 },
            "Imbue Dice Artifact": { priority: 3 }
        }
    }
};
