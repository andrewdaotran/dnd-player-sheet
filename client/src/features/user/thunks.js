import { createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../../api/userApi'

export const standardLogin = createAsyncThunk(
	'Standard Login through Backend/standardLogin',
	async ({ formData, navigate }, { dispatch, getState }) => {
		try {
			const { data } = await api.signin(formData)

			// console.log(data)
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
			const { data } = await api.signup(formData)

			// console.log(data)

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
			return data
		} catch (err) {
			console.log(err)
		}
	}
)
