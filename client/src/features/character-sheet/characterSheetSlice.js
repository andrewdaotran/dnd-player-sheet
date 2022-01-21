import { createSlice } from '@reduxjs/toolkit'

import { getAbilityScores } from './characterSheetExtraReducers'
import { addDataReducer, tempReducer } from './characterSheetReducers'

const initialState = {
	inventory: [],
	hitPoints: 0,

	characterName: '',

	class: { name: 'class', title: 'Class', value: 'Bard' },
	race: { name: 'race', title: 'Race', value: 'Human' },
	background: { name: 'background', title: 'Background', value: 'Carpenter' },
	alignment: { name: 'alignment', title: 'Alignment', value: 'Lawful ' },
	level: { name: 'level', title: 'Level', value: '3' },
	experiencePoints: {
		name: 'experiencePoints',
		title: 'Experience Points',
		value: '2',
	},
	//
	armorClass: {
		name: 'armorClass',
		title: 'Armor Class',
		value: '15',
		abbrev: 'AC',
	},
	initiative: { name: 'initiative', title: 'Initiative', value: '16' },
	speed: { name: 'speed', title: 'Speed', value: '6' },
	hitDiceTotal: { name: 'hitDiceTotal', title: 'Hit Dice Total', value: '3' },
	hitDiceType: { name: 'hitDiceType', title: 'Hit Dice Type', value: '4' },
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

	//
	skills: {
		acrobatics: {
			name: 'acrobatics',
			title: 'Acrobatics',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'dexterity',
		},
		animalHandling: {
			name: 'animalHandling',
			title: 'Animal Handling',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'wisdom',
		},
		arcana: {
			name: 'arcana',
			title: 'Arcana',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'intelligence',
		},
		athletics: {
			name: 'athletics',
			title: 'Athletics',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'strength',
		},
		deception: {
			name: 'deception',
			title: 'Deception',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'charisma',
		},
		history: {
			name: 'history',
			title: 'History',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'intelligence',
		},
		insight: {
			name: 'insight',
			title: 'Insight',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'wisdom',
		},
		intimidation: {
			name: 'intimidation',
			title: 'Intimidation',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'charisma',
		},
		investigation: {
			name: 'investigation',
			title: 'Investigation',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'intelligence',
		},
		medicine: {
			name: 'medicine',
			title: 'Medicine',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'wisdom',
		},
		nature: {
			name: 'nature',
			title: 'Nature',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'intelligence',
		},
		perception: {
			name: 'perception',
			title: 'Perception',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'wisdom',
		},
		performance: {
			name: 'performance',
			title: 'Performance',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'charisma',
		},
		persuasion: {
			name: 'persuasion',
			title: 'Persuasion',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'charisma',
		},
		religion: {
			name: 'religion',
			title: 'Religion',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'intelligence',
		},
		sleightOfHand: {
			name: 'sleightOfHand',
			title: 'Sleight of Hand',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'dexterity',
		},
		stealth: {
			name: 'stealth',
			title: 'Stealth',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'dexterity',
		},
		survival: {
			name: 'survival',
			title: 'Survival',
			checked: false,
			modifier: '2',
			description: '',
			abilityScore: 'wisdom',
		},
	},
	weapons: [],
	spells: [],
	ideals: [],
	personalityTraits: [],
	bonds: [],
	flaws: [],
	backgroundStory: [],
	abilityScores: {
		strength: {
			name: 'strength',
			title: 'Strength',
			value: '11',
			abbrev: 'STR',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/str',
		},
		dexterity: {
			name: 'dexterity',
			title: 'Dexterity',
			value: '12',
			abbrev: 'DEX',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/dex',
		},
		constitution: {
			name: 'constitution',
			title: 'Constitution',
			value: '13',
			abbrev: 'CON',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/con',
		},
		intelligence: {
			name: 'intelligence',
			title: 'Intelligence',
			value: '14',
			abbrev: 'INT',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/int',
		},
		wisdom: {
			name: 'wisdom',
			title: 'Wisdom',
			value: '15',
			abbrev: 'WIS',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/wis',
		},
		charisma: {
			name: 'charisma',
			title: 'Charisma',
			value: '16',
			abbrev: 'CHA',
			modifier: '3',
			url: 'https://www.dnd5eapi.co/api/ability-scores/cha',
		},
	},
}

const characterSheetSlice = createSlice({
	initialState,
	name: 'Character Sheet',
	reducers: {
		temp: tempReducer,
		addData: addDataReducer,
	},
	extraReducers: {
		[getAbilityScores.fulfilled]: (state, action) => {
			state.abilityScores = action.payload
		},
	},
})

export const { temp, addData } = characterSheetSlice.actions

export default characterSheetSlice.reducer
