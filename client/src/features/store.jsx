import { configureStore } from '@reduxjs/toolkit'
import characterSheetSlice from './character-sheet/characterSheetSlice'

const store = configureStore({
	reducer: {
		characterSheet: characterSheetSlice,
	},
})

export default store
