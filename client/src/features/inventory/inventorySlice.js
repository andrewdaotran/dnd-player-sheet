import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		title: 'Armor',
		items: [
			{
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quidem qui repudiandae blanditiis impeditdelectus? Odio saepe a, obcaecati sed quam soluta quos, fuga nihil pariatur molestiae, reiciendis exercitationem.',
				isEditing: false,
			},
		],
	},
]

const inventorySlice = createSlice({
	name: 'Inventory',
	initialState,
	reducers: {},
})

export const {} = inventorySlice.actions

export default inventorySlice.reducer
