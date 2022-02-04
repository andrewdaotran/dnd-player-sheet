import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
	weapons: {
		name: 'weapons',
		title: 'Weapons',
		value: [{ id: uuidv4(), text: 'nothing for now', isEditing: false }],
	},
	armor: { name: 'armor', title: 'Armor', value: [] },
	potions: { name: 'potions', title: 'Potions', value: [] },
	treasure: { name: 'treasure', title: 'Treasure', value: [] },
	misc: { name: 'misc', title: 'Misc', value: [] },
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

			if (state[name]) return

			state[name] = { name, title, value: [] }
		},

		updateInventoryCategory: (state, action) => {},
		// dispatch with name
		deleteInventoryCategory: (state, action) => {
			delete state[action.payload.name]
		},
		createInventoryItem: (state, action) => {},
		updateInventoryItem: (state, action) => {},
		deleteInventoryItem: (state, action) => {},
		updateIsEditingInventoryItem: (state, action) => {},
	},
})

export const {
	createInventoryCategory,
	updateInventoryCategory,
	deleteInventoryCategory,
	createInventoryItem,
	updateInventoryItem,
	deleteInventoryItem,
	updateIsEditingInventoryItem,
} = inventorySlice.actions

export default inventorySlice.reducer
