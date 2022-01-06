import { createSlice } from '@reduxjs/toolkit'

const sidebarOpenSlice = createSlice({
	initialState: {
		isSidebarOpen: false,
		drawerWidth: '240',
	},
	name: 'Sidebar State',
	reducers: {
		open: (state) => {
			state.isSidebarOpen = true
		},
		close: (state) => {
			state.isSidebarOpen = false
		},
	},
})

export const { open, close } = sidebarOpenSlice.actions

export default sidebarOpenSlice.reducer
