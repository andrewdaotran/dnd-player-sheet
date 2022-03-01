import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './loading/isLoadingSlice'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import disableInputsSlice from './disable-inputs/disableInputsSlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'

const store = configureStore({
	reducer: {
		isLoading: isLoadingSlice,
		characterSheet: characterSheetSlice,
		disableInputs: disableInputsSlice,
		sidebar: sidebarOpenSlice,
	},
})

export default store
