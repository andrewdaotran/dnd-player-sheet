import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
	personalityTraits: {
		name: 'personalityTraits',
		title: 'Personality Traits',
		value: [
			{ text: 'Nice', id: uuidv4(), isEditing: false },
			{ text: 'Corageous', id: uuidv4(), isEditing: false },
		],
	},
	ideals: {
		name: 'ideals',
		title: 'Ideals',
		value: [],
	},
	bonds: {
		name: 'bonds',
		title: 'Bonds',
		value: [],
	},
	flaws: {
		name: 'flaws',
		title: 'Flaws',
		value: [],
	},
	proficienciesAndLanguages: {
		name: 'proficienciesAndLanguages',
		title: 'Proficiencies and Languages',
		value: {
			armor: {
				name: 'armor',
				title: 'Armor',
				value: [
					{ text: 'Shield', id: uuidv4(), isEditing: false },
					{ text: 'Heavy Armor', id: uuidv4(), isEditing: false },
				],
			},
			weapons: { name: 'weapons', title: 'Weapons', value: [] },
			tools: { name: 'tools', title: 'Tools', value: [] },
			languages: { name: 'languages', title: 'Languages', value: [] },
		},
	},
	senses: {
		name: 'senses',
		title: 'Senses',
		value: [],
	},
	notes: {
		name: 'notes',
		title: 'Notes',
		value: [],
	},
}

const characterDetailsSlice = createSlice({
	name: 'Character Details',
	initialState,
	reducers: {
		addData: (state, action) => {
			return (state = { ...state, ...action.payload })
		},
		createNewDetail: (state, action) => {
			state.push({ id: uuidv4(), ...action.payload })
		},
		editDetail: (state, action) => {
			// pass name, index, and data
			return (state = {
				...state,
				[action.payload.name]: {
					...state[action.payload.name],
					value: [
						...state[action.payload.name].value,
						(state[action.payload.name].value[action.payload.index] =
							action.payload.data),
					],
				},
			})
		},
		removeDetail: (state, action) => {
			state.splice(action.payload, 1)
			state[action.payload.index] = action.payload.data
		},
	},
})

export const { createNewDetail, removeDetail, editDetail } =
	characterDetailsSlice.actions

export default characterDetailsSlice.reducer
