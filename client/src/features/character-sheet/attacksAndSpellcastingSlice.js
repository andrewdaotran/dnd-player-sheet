import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

const attacksAndSpellcastingSlice = createSlice({
	name: 'Attacks and Spellcasting',
	initialState: [
		{ id: uuidv4(), name: 'axe', attack: '4', damageType: '1d6slashing' },
	],
	reducers: {
		createNewAandS: (state, action) => {
			state.push({ id: uuidv4(), ...action.payload })
		},
		editAandS: (state, action) => {
			state[action.payload.index] = action.payload.data
		},
		removeAandS: (state, action) => {
			state.splice(action.payload, 1)
		},
	},
})

export const { createNewAandS, editAandS, removeAandS } =
	attacksAndSpellcastingSlice.actions

export default attacksAndSpellcastingSlice.reducer
