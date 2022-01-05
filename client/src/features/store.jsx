import { configureStore } from '@reduxjs/toolkit'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'

const store = configureStore({
	reducer: {
		characterSheet: characterSheetSlice,
		sidebar: sidebarOpenSlice,
	},
})

export default store
