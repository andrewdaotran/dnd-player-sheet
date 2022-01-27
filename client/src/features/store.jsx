import { configureStore } from '@reduxjs/toolkit'
import attacksAndSpellcastingSlice from './character-sheet/attacksAndSpellcastingSlice'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import disableInputsSlice from './disable-inputs/disableInputsSlice'
import inventorySlice from './inventory/inventorySlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'
import skillsSlice from './skills/skillsSlice'

const store = configureStore({
	reducer: {
		characterSheet: characterSheetSlice,
		sidebar: sidebarOpenSlice,
		disableInputs: disableInputsSlice,
		skills: skillsSlice,
		inventory: inventorySlice,
		attacksAndSpellcasting: attacksAndSpellcastingSlice,
	},
})

export default store
