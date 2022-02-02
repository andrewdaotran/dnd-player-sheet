import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
}

const characterInformationSlice = createSlice({
	name: 'Character Information',
	initialState,
	reducers: {
		// dispatch with {name, input}
		updateCharacterInformation: (state, action) => {
			state[action.payload.name].value = action.payload.input
		},
	},
})

export const { updateCharacterInformation } = characterInformationSlice.actions
export default characterInformationSlice.reducer
