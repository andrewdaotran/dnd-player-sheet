import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../api/playerSheetApi'

export const getAllSheetsThunk = createAsyncThunk(
	'Get all sheets/getAllSheetsThunk',
	async ({}, { getState }) => {
		const state = getState()
		try {
			const { data } = await api.getAllCharacterSheetsByUser(
				state.user.standardId
			)

			return data.data
		} catch (error) {
			console.log(error)
		}
	}
)

const allSheetsSlice = createSlice({
	initialState: {
		characterSheets: [],
		isLoading: false,
	},
	name: 'Sidebar State',
	reducers: {
		removeCharacterSheet: (state, action) => {
			// state.characterSheets = [...action.payload]
			state.characterSheets = state.characterSheets.filter(
				(character) =>
					character.characterSheetId !== /*characterSheetId*/ action.payload
			)
			// console.log(action.payload)
		},
	},
	extraReducers: {
		[getAllSheetsThunk.pending]: (state) => {
			state.isLoading = true
		},
		[getAllSheetsThunk.fulfilled]: (state, action) => {
			state.characterSheets = [...action.payload]
			state.isLoading = false
		},
	},
})

export const { removeCharacterSheet } = allSheetsSlice.actions

export default allSheetsSlice.reducer
