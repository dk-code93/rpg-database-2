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

const classes = classList.sort()

export {
    classes,
    statAttributes
};