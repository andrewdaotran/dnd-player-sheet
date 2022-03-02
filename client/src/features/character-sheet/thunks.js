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
		try {
			const { data } = await api.getSingleCharacterSheet(id)
			dispatch(toggleIsLoading())
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)

export const updateCharacterSheet = createAsyncThunk(
	'Update Character Sheet/updateCharacterSheet',
	async ({ id, characterSheet }) => {
		try {
			const { data } = await api.updateCharacterSheet(id, characterSheet)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)

export const updateDeathSaves = createAsyncThunk(
	'Update Death Saves/updateDeathSaves',
	async (id, { getState }) => {
		const state = getState()

		try {
			const { data } = await api.updateDeathSaves(id, {
				deathSaveSuccess:
					state.characterSheet.characterInformation.deathSaveSuccess,
				deathSaveFail: state.characterSheet.characterInformation.deathSaveFail,
			})
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)

export const updateAttacksAndSpellcasting = createAsyncThunk(
	'Update Attacks and Spellcasting/updateAttacksAndSpellcasting',
	async (id, { getState }) => {
		const state = getState()
		console.log(state.characterSheet.attacksAndSpellcasting)
		try {
			const { data } = await api.updateAttacksAndSpellcasting(id, {
				attacksAndSpellcasting: state.characterSheet.attacksAndSpellcasting,
			})
			console.log(data)
			console.log('hi')
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)
