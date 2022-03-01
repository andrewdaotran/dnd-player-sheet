import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import * as api from '../../api/playerSheetApi'
import { toggleIsLoading } from '../loading/isLoadingSlice'

export const createCharacterSheet = createAsyncThunk(
	'Create Character/createCharacterSheet',
	async ({ characterSheet, navigate }) => {
		try {
			const { data } = await api.createCharacterSheet(characterSheet)

			console.log(data.data._id, 'hey')
			navigate(`/characterSheets/${data.data._id}`)

			return data.data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getSingleCharacterSheet = createAsyncThunk(
	'Get One Character/getSingleCharacterSheet',
	async ({ id, navigate }, { dispatch }) => {
		dispatch(toggleIsLoading())

		const { data } = await api.getSingleCharacterSheet(id)

		dispatch(toggleIsLoading())

		return data.data
	}
)

export const updateCharacterSheet = createAsyncThunk(
	'Update Character Sheet/updateCharacterSheet',
	async ({ id, characterSheet }) => {
		const { data } = await api.updateCharacterSheet(id, characterSheet)

		console.log(data)

		return data.data
	}
)
