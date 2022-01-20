import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	fourMaxChecked: 0,
}

const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		addCheck: (state) => {
			if (state.fourMaxChecked < 4) {
				state.fourMaxChecked += 1
			}
		},
		removeCheck: (state) => {
			state.fourMaxChecked -= 1
		},
	},
})

export const { addCheck, removeCheck } = skillsSlice.actions

export default skillsSlice.reducer
