// DDO Gear Properties Data
// Comprehensive properties organized by category and priority
// Priority levels: 0 = Disabled, 1 = Critical, 2 = Important, 3 = Nice-to-have
// Each property has priorities for: dps, tank, spellcaster

const gearProperties = {
    "Primary Ability": {
        properties: {
            "Primary Ability Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Primary Ability Insightful": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Primary Ability Quality": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Primary Ability Artifact": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Primary Ability Profane": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Primary Ability Festive": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Primary Ability Exceptional": { priority: { dps: 3, tank: 3, spellcaster: 3 } }
        }
    },
    "Constitution": {
        properties: {
            "Constitution Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Constitution Insightful": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Constitution Quality": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Constitution Artifact": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Constitution Profane": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Constitution Festive": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Constitution Exceptional": { priority: { dps: 3, tank: 3, spellcaster: 3 } }
        }
    },
    "Deadly": {
        properties: {
            "Deadly Enhancement": { priority: { dps: 1, tank: 3, spellcaster: 0 } },
            "Deadly Insightful": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Deadly Quality": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Deadly Artifact": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Deadly Profane": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Relentless Fury": { priority: { dps: 3, tank: 3, spellcaster: 0 } }
        }
    },
    "Seeker": {
        properties: {
            "Seeker Enhancement": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Seeker Insightful": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Seeker Quality": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Seeker Exceptional": { priority: { dps: 3, tank: 0, spellcaster: 0 } }
        }
    },
    "Accuracy": {
        properties: {
            "Accuracy Enhancement": { priority: { dps: 1, tank: 2, spellcaster: 0 } },
            "Accuracy Insightful": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Accuracy Quality": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Accuracy Artifact": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Accuracy Profane": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Accuracy Legendary": { priority: { dps: 3, tank: 0, spellcaster: 0 } }
        }
    },
    "Doublestrike/Doubleshot": {
        properties: {
            "Doublestrike/Doubleshot Enhancement": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Doublestrike/Doubleshot Insightful": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Doublestrike/Doubleshot Quality": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Doublestrike/Doubleshot Artifact": { priority: { dps: 2, tank: 0, spellcaster: 0 } }
        }
    },
    "Fortification & Dodge Bypass": {
        properties: {
            "Fortification Bypass Enhancement": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Fortification Bypass Insightful": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Fortification Bypass Artifact": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Fortification Bypass Legendary": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Dodge Bypass": { priority: { dps: 3, tank: 0, spellcaster: 0 } }
        }
    },
    "Speed": {
        properties: {
            "Attack Speed": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Movement Speed": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
        }
    },
    "Miscellaneous": {
        properties: {
            "True Seeing": { priority: { dps: 1, tank: 3, spellcaster: 0 } },
            "Feather Fall": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Master's Gift": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Good Luck": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Keen": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Ghost Touch": { priority: { dps: 1, tank: 3, spellcaster: 0 } },
            "Deathblock": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Lifesealed": { priority: { dps: 2, tank: 1, spellcaster: 3 } },
            "Tendon Slice": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Freedom of Movement": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Action Boost Enhancement": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Proof Against Poison": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Proof Against Disease": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Enhanced Bloodrage": { priority: { dps: 2, tank: 3, spellcaster: 0 } },
            "Guardbreaking": { priority: { dps: 0, tank: 0, spellcaster: 0 } },
            "Immunity to Fear": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Feat: Wind through the Trees": { priority: { dps: 0, tank: 0, spellcaster: 0 } },
            "Greater Marksmanship": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Feat: Elusive Target": { priority: { dps: 0, tank: 0, spellcaster: 0 } }
        }
    },
    "Avoidance": {
        properties: {
            "Dodge": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Dodge Insightful": { priority: { dps: 2, tank: 2, spellcaster: 2 } },
            "Dodge Quality": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Dodge Artifact": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Dodge Cap": { priority: { dps: 3, tank: 0, spellcaster: 0 } },
            "Ghostly/Enhanced Ghostly": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Blurry/Concealment": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Missile Deflection": { priority: { dps: 2, tank: 1, spellcaster: 3 } }
        }
    },
    "Hit Points": {
        properties: {
            "False Life Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "False Life Insightful": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "False Life Quality": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Vitality": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Profane Life-Force": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "% Legendary Bonus to Max HP": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Undying": { priority: { dps: 2, tank: 1, spellcaster: 2 } }
        }
    },
    "Healing Amplification": {
        properties: {
            "Healing Amplification Competence": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Healing Amplification Artifact": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Healing Amplification Profane": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Healing Amplification Exceptional": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Healing Amplification Equipped": { priority: { dps: 3, tank: 2, spellcaster: 3 } }
        }
    },
    "PRR (Physical Resistance Rating)": {
        properties: {
            "PRR Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "PRR Insightful": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "PRR Quality": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "PRR Artifact": { priority: { dps: 2, tank: 1, spellcaster: 3 } },
            "PRR Profane": { priority: { dps: 2, tank: 1, spellcaster: 3 } }
        }
    },
    "MRR (Magical Resistance Rating)": {
        properties: {
            "MRR Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "MRR Insightful": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "MRR Quality": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "MRR Artifact": { priority: { dps: 2, tank: 1, spellcaster: 3 } },
            "MRR Profane": { priority: { dps: 2, tank: 1, spellcaster: 3 } }
        }
    },
    "Melee/Ranged Power": {
        properties: {
            "Enhancement": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Artifact": { priority: { dps: 2, tank: 2, spellcaster: 0 } },
            "Profane": { priority: { dps: 2, tank: 2, spellcaster: 0 } }
        }
    },
    "Helplessness Damage": {
        properties: {
            "Helplessness Damage Artifact": { priority: { dps: 2, tank: 0, spellcaster: 0 } }
        }
    },
    "Fortification": {
        properties: {
            "Fortification Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Fortification Insightful": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Fortification Quality": { priority: { dps: 3, tank: 2, spellcaster: 3 } }
        }
    },
    "Sneak Attack": {
        properties: {
            "Sneak Attack Enhancement (Deception)": { priority: { dps: 1, tank: 0, spellcaster: 0 } },
            "Improved Deception": { priority: { dps: 2, tank: 0, spellcaster: 0 } },
            "Deception Artifact": { priority: { dps: 2, tank: 0, spellcaster: 0 } }
        }
    },
    "Armor Class": {
        properties: {
            "Natural Armor": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Shield Bonus": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Deflection (Protection)": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Parrying": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "% Artifact AC": { priority: { dps: 3, tank: 2, spellcaster: 3 } }
        }
    },
    "Elemental Resistance": {
        properties: {
            "Fire Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Fire Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Fire Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Fire Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Cold Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Cold Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Cold Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Cold Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Lightning Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Lightning Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Lightning Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Lightning Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Acid Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Acid Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Acid Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Acid Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Poison Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Poison Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Poison Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Poison Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Force Resistance": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Force Resistance Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Force Resistance Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Force Resistance Competence": { priority: { dps: 0, tank: 3, spellcaster: 0 } }
        }
    },
    "Elemental Absorption": {
        properties: {
            "Fire Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Fire Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Fire Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Cold Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Cold Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Cold Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Lightning Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Lightning Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Lightning Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Acid Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Acid Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Acid Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Poison Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Poison Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Poison Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Force Absorption": { priority: { dps: 2, tank: 1, spellcaster: 2 } },
            "Force Absorption Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Force Absorption Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } }
        }
    },
    "Saving Throws": {
        properties: {
            "Will Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Will Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Will Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Fortitude Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Fortitude Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Fortitude Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } },
            "Reflex Enhancement": { priority: { dps: 1, tank: 1, spellcaster: 1 } },
            "Reflex Insightful": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Reflex Quality": { priority: { dps: 0, tank: 3, spellcaster: 0 } }
        }
    },
    "Spell Defense": {
        properties: {
            "Spell Resistance": { priority: { dps: 3, tank: 2, spellcaster: 3 } },
            "Spell Resistance Insightful": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Spell Save": { priority: { dps: 3, tank: 3, spellcaster: 3 } },
            "Spell Save Insightful": { priority: { dps: 3, tank: 3, spellcaster: 3 } }
        }
    },
    "Threat Decrease": {
        properties: {
            "Diversion": { priority: { dps: 1, tank: 0, spellcaster: 1 } },
            "Diversion Insightful": { priority: { dps: 2, tank: 0, spellcaster: 2 } },
            "Diversion Quality": { priority: { dps: 3, tank: 0, spellcaster: 3 } },
            "Diversion Artifact": { priority: { dps: 3, tank: 0, spellcaster: 3 } }
        }
    },
    "Threat Increase": {
        properties: {
            "Enhancement": { priority: { dps: 0, tank: 1, spellcaster: 0 } },
            "Insightful": { priority: { dps: 0, tank: 2, spellcaster: 0 } },
            "Quality": { priority: { dps: 0, tank: 2, spellcaster: 0 } },
            "Artifact": { priority: { dps: 0, tank: 2, spellcaster: 0 } }
        }
    },
    "Special Abilities": {
        properties: {
            "Combat Mastery Enhancement": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Combat Mastery Insightful": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Combat Mastery Quality": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Combat Mastery Artifact": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Combat Mastery Profane": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Strikethrough Artifact": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Assassinate Enhancement": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Assassinate Insightful": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Assassinate Quality": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Imbue Dice Enhancement": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Imbue Dice Artifact": { priority: { dps: 3, tank: 3, spellcaster: 0 } },
            "Enhanced Ki": { priority: { dps: 0, tank: 0, spellcaster: 0 } },
            "Superior Reinforced Fists": { priority: { dps: 0, tank: 0, spellcaster: 0 } }
        }
    },
    "General Spellcasting": {
        properties: {
            "Universal Spell Power / Implement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Exceptional Universal Spell Power": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Profane Universal Spell Power": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Universal Spell Lore / Implement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Universal Spell Lore": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Universal Spell Lore": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Universal Spell Lore": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Spell Failure Reduction": { priority: { dps: 0, tank: 0, spellcaster: 0 } },
            "Wizardry": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Insightful Wizardry": { priority: { dps: 0, tank: 0, spellcaster: 0 } }
        }
    },
    "Spell Penetration": {
        properties: {
            "Equipment Spell Penetration": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Spell Penetration": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Spell Penetration": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Legendary Spell Penetration": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Positive Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 1, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 2, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 3, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Positive Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 1, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 2, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 3, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Negative Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Negative Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Poison Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Poison Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Light Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Light Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Fire Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Fire Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Cold Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Cold Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Acid Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Acid Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Electric Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Electric Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Sonic Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Sonic Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Alignment Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Alignment Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Force Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Force Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Repair/Rust Spell Power": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Repair/Rust Spell Critical Chance": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } }
        }
    },
    "Abjuration Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Evocation Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Necromancy Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Conjuration Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Transmutation Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Enchantment Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    },
    "Illusion Spell DC": {
        properties: {
            "Enhancement Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Insightful Bonus": { priority: { dps: 0, tank: 0, spellcaster: 1 } },
            "Quality Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Exceptional Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } },
            "Artifact Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Profane Bonus": { priority: { dps: 0, tank: 0, spellcaster: 2 } },
            "Sacred Bonus": { priority: { dps: 0, tank: 0, spellcaster: 3 } }
        }
    }
};
