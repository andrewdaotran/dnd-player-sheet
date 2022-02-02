import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
}

const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		addCheck: (state, action) => {
			// dispatch name
			if (state.fourMaxChecked < 4) {
				state.fourMaxChecked += 1
				state.skills[action.payload].checked = true
			}
		},
		// dispatch name
		removeCheck: (state, action) => {
			state.fourMaxChecked -= 1
			state.skills[action.payload].checked = false
		},
		// dispatch {name, desc}
		injectDescription: (state, action) => {
			state.skills[action.payload.name].description = action.payload.desc
		},
	},
})

export const { addCheck, removeCheck, injectDescription } = skillsSlice.actions

export default skillsSlice.reducer
