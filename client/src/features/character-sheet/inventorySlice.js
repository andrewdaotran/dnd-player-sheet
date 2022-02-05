import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
	weapons: {
		name: 'weapons',
		title: 'Weapons',
		value: [{ id: uuidv4(), text: 'nothing for now', isEditing: false }],
		custom: false,
	},
	armor: { name: 'armor', title: 'Armor', value: [], custom: false },
	potions: { name: 'potions', title: 'Potions', value: [], custom: false },
	treasure: { name: 'treasure', title: 'Treasure', value: [], custom: false },
	misc: { name: 'misc', title: 'Misc', value: [], custom: false },
}

const inventorySlice = createSlice({
	name: 'Inventory',
	initialState,
	reducers: {
		// dispatch with name
		createInventoryCategory: (state, action) => {
			const name = action.payload.name.toLowerCase()
			const title = action.payload.name
				.toLowerCase()
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' ')

			if (state[name] || !name) return

			state[name] = { name, title, value: [], custom: true, isEditing: false }
		},
		// dispatch with {newName, name}
		updateInventoryCategory: (state, action) => {
			const newName = action.payload.newName.toLowerCase()
			const title = action.payload.newName
				.toLowerCase()
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' ')
			state[action.payload.newName] = {
				...state[action.payload.name],
				name: newName,
				title,
			}

			delete state[action.payload.name]
		},
		// dispatch with {name,}
		updateInventoryCategoryIsEditing: (state, action) => {
			Object.keys(state).forEach((item) => {
				if (action.payload.name === item) return

				state[item].isEditing = false
			})

			state[action.payload.name].isEditing =
				!state[action.payload.name].isEditing
		},
		// dispatch with {name}
		deleteInventoryCategory: (state, action) => {
			delete state[action.payload.name]
		},
		//dispatch with {name, text}
		createInventoryItem: (state, action) => {
			if (!action.payload.text) return
			state[action.payload.name].value.push({
				id: uuidv4(),
				text: action.payload.text,
				isEditing: false,
			})
		},
		// dispatch with {name, index, text}
		updateInventoryItem: (state, action) => {
			state[action.payload.name].value[action.payload.index].text =
				action.payload.text
		},
		// dispatch with {name, index}
		deleteInventoryItem: (state, action) => {
			state[action.payload.name].value.splice(action.payload.index, 1)
		},
		// dispatch with {name, index}
		updateIsEditingInventoryItem: (state, action) => {
			state[action.payload.name].value.forEach((item, index) => {
				if (index === action.payload.index) return
				item.isEditing = false
			})
			state[action.payload.name].value[action.payload.index].isEditing =
				!state[action.payload.name].value[action.payload.index].isEditing
		},
	},
})

export const {
	createInventoryCategory,
	updateInventoryCategory,
	updateInventoryCategoryIsEditing,
	deleteInventoryCategory,
	createInventoryItem,
	updateInventoryItem,
	deleteInventoryItem,
	updateIsEditingInventoryItem,
} = inventorySlice.actions

export default inventorySlice.reducer
