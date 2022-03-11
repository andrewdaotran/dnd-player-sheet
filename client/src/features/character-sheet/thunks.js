import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../../api/playerSheetApi'
import { toggleIsLoading } from '../loading/isLoadingSlice'
import { addCharacterSheetToUser } from '../user/thunks'
import { deleteCharacterDetail } from './characterSheetSlice'

export const createCharacterSheet = createAsyncThunk(
	'Create Character/createCharacterSheet',
	async ({ characterSheet, navigate }, { getState, dispatch }) => {
		const state = getState()

		try {
			const { data } = await api.createCharacterSheet(
				characterSheet,
				state.user
			)

			await dispatch(
				addCharacterSheetToUser({
					standardId: state.user.standardId,
					characterSheetId: data.data._id,
					characterName: characterSheet.characterName.value,
				})
			)

			// console.log(data.data._id, 'hey')
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

export const updateHitPointsThunk = createAsyncThunk(
	'Update Main Hit Points/updateMainHitPointsThunk',
	async (id, { getState }) => {
		const state = getState()

		try {
			const { data } = await api.updateHitPoints(id, {
				hitPoints: state.characterSheet.hitPoints.hitPoints,
			})
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
		try {
			const { data } = await api.updateAttacksAndSpellcasting(id, {
				attacksAndSpellcasting: state.characterSheet.attacksAndSpellcasting,
			})
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)

export const updateInventory = createAsyncThunk(
	'Update Inventory/updateInventory',
	async (id, { getState }) => {
		const state = getState()
		console.log(state.characterSheet.inventory)
		try {
			const { data } = await api.updateInventory(id, {
				inventory: state.characterSheet.inventory,
			})
			console.log(data)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)

export const updateCharacterDetails = createAsyncThunk(
	'Update Character Details/updateCharacterDetails',
	async (id, { getState }) => {
		const state = getState()
		console.log(state.characterSheet.characterDetails)

		try {
			const { data } = await api.updateCharacterDetails(id, {
				characterDetails: state.characterSheet.characterDetails,
			})
			console.log(data)
			return data.data
		} catch (err) {
			console.log(err)
		}
	}
)
