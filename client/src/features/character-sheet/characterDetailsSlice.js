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
			weapons: {
				name: 'weapons',
				title: 'Weapons',
				value: [{ text: 'Sword of Justice', id: uuidv4(), isEditing: false }],
			},
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
		// dispatch with {name, main: boolean, text}
		createCharacterDetail: (state, action) => {
			if (action.payload.main) {
				state[action.payload.name].value.push({
					id: uuidv4(),
					isEditing: false,
					text: action.payload.text,
				})
			} else {
				state.proficienciesAndLanguages.value[action.payload.name].value.push({
					id: uuidv4(),
					isEditing: false,
					text: action.payload.text,
				})
			}
		},
		updateCharacterDetail: (state, action) => {
			// dispatch with {name, index, main: boolean, text}
			if (action.payload.main) {
				state[action.payload.name].value[action.payload.index].text =
					action.payload.text
			} else {
				state.proficienciesAndLanguages.value[action.payload.name].value[
					action.payload.index
				].text = action.payload.text
			}
		},
		// dispatch with {name, index, main: boolean}
		updateIsEditingCharacterDetail: (state, action) => {
			if (action.payload.main) {
				// map through to change isEditing to false except the one stated
				state[action.payload.name].value.forEach((item, index) => {
					if (action.payload.index === index) return

					item.isEditing = false
				})

				state[action.payload.name].value[action.payload.index].isEditing =
					!state[action.payload.name].value[action.payload.index].isEditing
			} else {
				state.proficienciesAndLanguages.value[
					action.payload.name
				].value.forEach((item, index) => {
					if (action.payload.index === index) return

					item.isEditing = false
				})
				state.proficienciesAndLanguages.value[action.payload.name].value[
					action.payload.index
				].isEditing =
					!state.proficienciesAndLanguages.value[action.payload.name].value[
						action.payload.index
					].isEditing
			}
		},
		// dispatch with {name, index, main: boolean}
		deleteCharacterDetail: (state, action) => {
			if (action.payload.main) {
				state[action.payload.name].value.splice(action.payload.index, 1)
			} else {
				state.proficienciesAndLanguages.value[action.payload.name].value.splice(
					action.payload.index,
					1
				)
			}
		},
	},
})

export const {
	createCharacterDetail,
	updateCharacterDetail,
	updateIsEditingCharacterDetail,
	deleteCharacterDetail,
} = characterDetailsSlice.actions

export default characterDetailsSlice.reducer
