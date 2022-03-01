export const initialState = {
	// isLoading: false,
	characterName: { name: 'characterName', title: 'Character Name', value: '' },
	hitPoints: {
		hitPoints: {
			name: 'hitPoints',
			title: 'Hit Points',
			value: { default: 0, value: 0 },
		},
		totalHitPoints: {
			name: 'totalHitPoints',
			title: 'Total Hit Points',
			value: { default: 0, value: 0 },
		},
		temporaryHitPoints: {
			name: 'temporaryHitPoints',
			title: 'Temporary HP',
			value: { default: 0, value: 20 },
		},
	},
	playerInformation: {
		class: { name: 'class', title: 'Class', value: '' },
		race: { name: 'race', title: 'Race', value: '' },
		background: { name: 'background', title: 'Background', value: '' },
		alignment: { name: 'alignment', title: 'Alignment', value: '' },
		level: { name: 'level', title: 'Level', value: '' },
		experiencePoints: {
			name: 'experiencePoints',
			title: 'Experience Points',
			value: '',
		},
	},
	characterInformation: {
		armorClass: {
			name: 'armorClass',
			title: 'Armor Class',
			value: '',
			abbrev: 'AC',
		},
		initiative: { name: 'initiative', title: 'Initiative', value: '' },
		speed: { name: 'speed', title: 'Speed', value: '' },
		hitDiceTotal: { name: 'hitDiceTotal', title: 'Hit Dice Total', value: '' },
		hitDiceType: { name: 'hitDiceType', title: 'Hit Dice Type', value: '' },
		deathSaveSuccess: {
			name: 'deathSaveSuccess',
			title: 'Death Save Success',
			value: '',
		},
		deathSaveFail: {
			name: 'deathSaveFail',
			title: 'Death Save Fail',
			value: '',
		},
	},
	abilityScores: {
		strength: {
			name: 'strength',
			title: 'Strength',
			value: '',
			abbrev: 'STR',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/str',
		},
		dexterity: {
			name: 'dexterity',
			title: 'Dexterity',
			value: '',
			abbrev: 'DEX',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/dex',
		},
		constitution: {
			name: 'constitution',
			title: 'Constitution',
			value: '',
			abbrev: 'CON',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/con',
		},
		intelligence: {
			name: 'intelligence',
			title: 'Intelligence',
			value: '',
			abbrev: 'INT',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/int',
		},
		wisdom: {
			name: 'wisdom',
			title: 'Wisdom',
			value: '',
			abbrev: 'WIS',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/wis',
		},
		charisma: {
			name: 'charisma',
			title: 'Charisma',
			value: '',
			abbrev: 'CHA',
			modifier: '-',
			url: 'https://www.dnd5eapi.co/api/ability-scores/cha',
		},
	},
	skills: {
		fourMaxChecked: 0,
		skills: {
			acrobatics: {
				name: 'acrobatics',
				title: 'Acrobatics',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'dexterity', abbrev: 'DEX' },
				url: 'https://www.dnd5eapi.co/api/skills/acrobatics',
			},
			animalHandling: {
				name: 'animalHandling',
				title: 'Animal Handling',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'wisdom', abbrev: 'WIS' },
				url: 'https://www.dnd5eapi.co/api/skills/animal-handling',
			},
			arcana: {
				name: 'arcana',
				title: 'Arcana',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'intelligence', abbrev: 'INT' },
				url: 'https://www.dnd5eapi.co/api/skills/arcana',
			},
			athletics: {
				name: 'athletics',
				title: 'Athletics',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'strength', abbrev: 'STR' },
				url: 'https://www.dnd5eapi.co/api/skills/athletics',
			},
			deception: {
				name: 'deception',
				title: 'Deception',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'charisma', abbrev: 'CHA' },
				url: 'https://www.dnd5eapi.co/api/skills/deception',
			},
			history: {
				name: 'history',
				title: 'History',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'intelligence', abbrev: 'INT' },
				url: 'https://www.dnd5eapi.co/api/skills/history',
			},
			insight: {
				name: 'insight',
				title: 'Insight',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'wisdom', abbrev: 'WIS' },
				url: 'https://www.dnd5eapi.co/api/skills/insight',
			},
			intimidation: {
				name: 'intimidation',
				title: 'Intimidation',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'charisma', abbrev: 'CHA' },
				url: 'https://www.dnd5eapi.co/api/skills/intimidation',
			},
			investigation: {
				name: 'investigation',
				title: 'Investigation',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'intelligence', abbrev: 'INT' },
				url: 'https://www.dnd5eapi.co/api/skills/investigation',
			},
			medicine: {
				name: 'medicine',
				title: 'Medicine',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'wisdom', abbrev: 'WIS' },
				url: 'https://www.dnd5eapi.co/api/skills/medicine',
			},
			nature: {
				name: 'nature',
				title: 'Nature',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'intelligence', abbrev: 'INT' },
				url: 'https://www.dnd5eapi.co/api/skills/nature',
			},
			perception: {
				name: 'perception',
				title: 'Perception',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'wisdom', abbrev: 'WIS' },
				url: 'https://www.dnd5eapi.co/api/skills/perception',
			},
			performance: {
				name: 'performance',
				title: 'Performance',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'charisma', abbrev: 'CHA' },
				url: 'https://www.dnd5eapi.co/api/skills/performance',
			},
			persuasion: {
				name: 'persuasion',
				title: 'Persuasion',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'charisma', abbrev: 'CHA' },
				url: 'https://www.dnd5eapi.co/api/skills/persuasion',
			},
			religion: {
				name: 'religion',
				title: 'Religion',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'intelligence', abbrev: 'INT' },
				url: 'https://www.dnd5eapi.co/api/skills/religion',
			},
			sleightOfHand: {
				name: 'sleightOfHand',
				title: 'Sleight of Hand',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'dexterity', abbrev: 'DEX' },
				url: 'https://www.dnd5eapi.co/api/skills/sleight-of-hand',
			},
			stealth: {
				name: 'stealth',
				title: 'Stealth',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'dexterity', abbrev: 'DEX' },
				url: 'https://www.dnd5eapi.co/api/skills/stealth',
			},
			survival: {
				name: 'survival',
				title: 'Survival',
				checked: false,
				modifier: '2',
				description: '',
				abilityScore: { name: 'wisdom', abbrev: 'WIS' },
				url: 'https://www.dnd5eapi.co/api/skills/survival',
			},
		},
	},
	attacksAndSpellcasting: [],
	inventory: {
		weapons: {
			name: 'weapons',
			title: 'Weapons',
			value: [
				// { id: uuidv4(), text: 'nothing for now', isEditing: false }
			],
			custom: false,
		},
		armor: { name: 'armor', title: 'Armor', value: [], custom: false },
		potions: { name: 'potions', title: 'Potions', value: [], custom: false },
		treasure: { name: 'treasure', title: 'Treasure', value: [], custom: false },
		misc: { name: 'misc', title: 'Misc', value: [], custom: false },
	},
	characterDetails: {
		personalityTraits: {
			name: 'personalityTraits',
			title: 'Personality Traits',
			value: [
				// { text: 'Nice', id: uuidv4(), isEditing: false },
				// { text: 'Corageous', id: uuidv4(), isEditing: false },
			],
		},
		ideals: {
			name: 'ideals',
			title: 'Ideals',
			value: [],
		},
		bonds: {
			name: 'bonds',
			title: 'Bonds',
			value: [],
		},
		flaws: {
			name: 'flaws',
			title: 'Flaws',
			value: [],
		},
		proficienciesAndLanguages: {
			name: 'proficienciesAndLanguages',
			title: 'Proficiencies and Languages',
			value: {
				armor: {
					name: 'armor',
					title: 'Armor',
					value: [
						// {
						// 	text: 'Shield', id: uuidv4(), isEditing: false
						// },
						// {
						// 	text: 'Heavy Armor', id: uuidv4(), isEditing: false
						// },
					],
				},
				weapons: {
					name: 'weapons',
					title: 'Weapons',
					value: [
						// { text: 'Sword of Justice', id: uuidv4(), isEditing: false }
					],
				},
				tools: { name: 'tools', title: 'Tools', value: [] },
				languages: { name: 'languages', title: 'Languages', value: [] },
			},
		},
		senses: {
			name: 'senses',
			title: 'Senses',
			value: [],
		},
		notes: {
			name: 'notes',
			title: 'Notes',
			value: [],
		},
	},
	id: '',
	// user: {name: '', id: ''},
}

export const statModifiers = {
	1: '-5',
	2: '-4',
	3: '-4',
	4: '-3',
	5: '-3',
	6: '-2',
	7: '-2',
	8: '-1',
	9: '-1',
	10: '+0',
	11: '+0',
	12: '+1',
	13: '+1',
	14: '+2',
	15: '+2',
	16: '+3',
	17: '+3',
	18: '+4',
	19: '+4',
	20: '+5',
	21: '+5',
	22: '+6',
	23: '+6',
	24: '+7',
	25: '+7',
	26: '+8',
	27: '+8',
	28: '+9',
	29: '+9',
	30: '+10',
}

export const limiter = (input) => {
	if (input < 0) {
		return 0
	} else if (input > 30) {
		return 30
	} else {
		return input
	}
}
