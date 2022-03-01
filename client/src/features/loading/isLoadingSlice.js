import { createSlice } from '@reduxjs/toolkit'

const isLoadingSlice = createSlice({
	initialState: { isLoading: false },
	name: 'Sidebar State',
	reducers: {
		toggleIsLoading: (state) => {
			state.isLoading = !state.isLoading
		},
	},
})

export const { toggleIsLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer
