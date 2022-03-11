import { createSlice } from '@reduxjs/toolkit'

const profileLinesIsEditingSlice = createSlice({
	initialState: { fullName: false, email: false, username: false },
	name: 'Sidebar State',
	reducers: {
		toggleIsEditingProfile: (state, action) => {
			Object.keys(state).forEach((item) => {
				if (action.payload === item) return

				state[item] = false
			})

			state[action.payload] = !state[action.payload]
		},
	},
})

export const { toggleIsEditingProfile } = profileLinesIsEditingSlice.actions

export default profileLinesIsEditingSlice.reducer
