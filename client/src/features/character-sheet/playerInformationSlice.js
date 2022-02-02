import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
}

const playerInformationSlice = createSlice({
	name: 'Player Details',
	initialState,
	reducers: {
		// dispatch with {name, input}
		updatePlayerInformation: (state, action) => {
			state[action.payload.name].value = action.payload.input
		},
	},
})

export const { updatePlayerInformation } = playerInformationSlice.actions

export default playerInformationSlice.reducer
