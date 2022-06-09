import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './utils'
import reducers from './reducers'
import extraReducers from './extraReducers'

const characterSheetSlice = createSlice({
	initialState,
	name: 'Character Sheet',
	reducers,
	extraReducers,
})

export const {
	attachUser,
	addUserName,
	updateAbilityScores,
	createNewAandS,
	editAandS,
	removeAandS,
	createCharacterDetail,
	updateCharacterDetail,
	updateIsEditingCharacterDetail,
	deleteCharacterDetail,
	updateCharacterInformation,
	updateCharacterName,
	updateHitPoints,
	createInventoryCategory,
	updateInventoryCategory,
	updateInventoryCategoryIsEditing,
	deleteInventoryCategory,
	createInventoryItem,
	updateInventoryItem,
	deleteInventoryItem,
	updateIsEditingInventoryItem,
	updatePlayerInformation,
	updateCheck,
	injectDescription,
	clearCharacterSheet,
	updateSkillModifiers,
	// updateCharacterSheet
} = characterSheetSlice.actions

export default characterSheetSlice.reducer
