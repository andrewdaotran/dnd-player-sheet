import { createSlice } from '@reduxjs/toolkit'

import { getAbilityScores } from './characterSheetExtraReducers'
import { addDataReducer, tempReducer } from './characterSheetReducers'

const initialState = {
	inventory: [],
	hitPoints: 0,

	characterName: '',
	// class: '',
	// level: 0,
	// race: '',
	// alignment: '',
	// background: '',
	// experiencePoints: 0,
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
		smallTitle: 'AC',
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
	abilityScores: [],
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
