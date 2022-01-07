import { createSlice } from '@reduxjs/toolkit'

const disableInputsSlice = createSlice({
	name: 'Disable Inputs',
	initialState: { toggle: true },
	reducers: {
		toggleInputs: (state) => {
			state.toggle = !state.toggle
		},
	},
})

export const { toggleInputs } = disableInputsSlice.actions
export default disableInputsSlice.reducer
