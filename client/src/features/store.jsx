import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import isLoadingSlice from './loading/isLoadingSlice'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import disableInputsSlice from './disable-inputs/disableInputsSlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'
import profileLinesIsEditingSlice from './profile-lines-isEditing/profileLinesIsEditingSlice'
import allSheetsSlice from './all-sheets/allSheetsSlice'

const store = configureStore({
	reducer: {
		user: userSlice,
		isLoading: isLoadingSlice,
		characterSheet: characterSheetSlice,
		disableInputs: disableInputsSlice,
		sidebar: sidebarOpenSlice,
		profileLinesIsEditing: profileLinesIsEditingSlice,
		allSheets: allSheetsSlice,
	},
})

export default store
