import { configureStore } from '@reduxjs/toolkit'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import disableInputsSlice from './disable-inputs/disableInputsSlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'

const store = configureStore({
	reducer: {
		characterSheet: characterSheetSlice,
		sidebar: sidebarOpenSlice,
		disableInputs: disableInputsSlice,
	},
})

export default store
