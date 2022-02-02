import { createSlice } from '@reduxjs/toolkit'

import { getAbilityScores } from './characterSheetExtraReducers'

const initialState = {
	inventory: [],
	characterName: '',
	weapons: [],
	spells: [],
	ideals: [],
	personalityTraits: [],
	bonds: [],
	flaws: [],
	backgroundStory: [],
}

const characterSheetSlice = createSlice({
	initialState,
	name: 'Character Sheet',
	reducers: {},
	extraReducers: {
		[getAbilityScores.fulfilled]: (state, action) => {
			state.abilityScores = action.payload
		},
	},
})

// export const { } = characterSheetSlice.actions

export default characterSheetSlice.reducer
