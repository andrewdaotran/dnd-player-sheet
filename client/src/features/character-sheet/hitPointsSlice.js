import { createSlice } from '@reduxjs/toolkit'

const hitPointsSlice = createSlice({
	name: 'Hit Points',
	initialState: {
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
	reducers: {
		// dispatch with {name, input}
		updateHitPoints: (state, action) => {
			state[action.payload.name].value.value = parseInt(action.payload.input)
		},
	},
})

export const { updateHitPoints } = hitPointsSlice.actions

export default hitPointsSlice.reducer
