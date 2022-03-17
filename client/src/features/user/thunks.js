import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../../api/userApi'
import {
	getAllSheetsThunk,
	removeCharacterSheet,
} from '../all-sheets/allSheetsSlice'
// import { updateUserReducer } from './userSlice'

export const standardLogin = createAsyncThunk(
	'Standard Login through Backend/standardLogin',
	async ({ formData, navigate }, { dispatch, getState }) => {
		console.log(formData)
		try {
			const { data } = await api.signin(formData)

			// console.log(data)
			// navigate(`/home/${data._id}`)
			navigate(`/home/`)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const signup = createAsyncThunk(
	'Sign Up through Backend/signUp',
	async ({ formData, navigate }, { dispatch, getState }) => {
		try {
			console.log('reaching?')
			const { data } = await api.signup(formData)

			// navigate(`/home/${data._id}`)
			navigate(`/home/`)

			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const googleLoginThunk = createAsyncThunk(
	'Google login with backend/googleLoginThunk',
	async ({ profile, token, navigate }, { dispatch, getState }) => {
		try {
			const { data } = await api.googleLogin({ ...profile, token })
			// console.log(data)
			// navigate(`/home/${data.result._id}`)
			navigate(`/home/`)
			return data
		} catch (err) {
			console.log(err)
		}
	}
)

export const addCharacterSheetToUser = createAsyncThunk(
	'Push Character Sheet to User/addCharacterSheetToUser',
	async (
		{ standardId, characterSheetId, characterName, navigate },
		{ getState, dispatch }
	) => {
		try {
			const { data } = await api.addCharacterSheetToUser(
				standardId,
				characterSheetId,
				characterName
			)

			// console.log('addCharacterSheetToUser', data)

			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const updateUserThunk = createAsyncThunk(
	'Update User/udateUserThunk',
	async ({}, { getState, dispatch }) => {
		const state = getState()

		try {
			const { data } = await api.updateUser(state.user)

			return { ...data, token: state.user.token }
		} catch (error) {
			console.log(error)
		}
	}
)

export const removeCharacterSheetThunk = createAsyncThunk(
	'Remove Character Sheet/removeCharacterSheet',
	async (characterSheetId, { getState, dispatch }) => {
		const state = getState()

		const characterSheets = state.user.characterSheets.filter(
			(character) => character.characterSheetId !== characterSheetId
		)

		// dispatch(getAllSheetsThunk({}))

		try {
			const { data } = await api.removeCharacterSheet(
				state.user.standardId,
				characterSheets
			)

			return { user: data.user, token: state.user.token }
		} catch (error) {
			console.log(error)
		}
	}
)
