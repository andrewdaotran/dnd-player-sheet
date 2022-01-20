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
	skills: [],
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
