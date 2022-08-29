const classList = [
    'Fighter',
    'Wizard',
    'Sorcerer',
    'Warlock',
    'Bard',
    'Barbarian',
    'Paladin',
    'Ranger',
    'Druid',
    'Cleric',
    'Monk',
    'Rogue',
];

const raceList = [
    'Dragonborn',
    'Dwarf',
    'Elf',
    'Gnome',
    'Half-Elf',
    'Halfling',
    'Half-Orc',
    'Human',
    'Tiefling',
    'Aarakocra',
    'Aasimar',
    'Genasi',
    'Bugbear',
    'Centaur',
    'Changeling',
    'Firbolg',
    'Goliath',
    'Goblin',
    'Hobgoblin',
    'Kobold',
    'Kenku',
    'Orc',
    'Lizardfolk',
    'Tabaxi',
    'Tortle',
    'Triton'
]

const statAttributes = [
    {
        name: 'Strength',
        short: 'str'
    },
    {
        name: 'Dexterity',
        short: 'dex'
    },
    {
        name: 'Intelligence',
        short: 'int'
    },
    {
        name: 'Wisdom',
        short: 'wis'
    },
    {
        name: 'Charisma',
        short: 'cha'
    },
    {
        name: 'Constitution',
        short: 'con'
    },
]

const classes = classList.sort();
const races = raceList.sort();

export {
    classes,
    statAttributes,
    races
};