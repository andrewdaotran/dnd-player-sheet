import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './utils'
import reducers from './reducers'
import extraReducers from './extraReducers'

const userSlice = createSlice({
	initialState,
	name: 'User',
	reducers,
	extraReducers,
})

export const { googleLogin, userLogout, getUserFromLocalStorage } =
	userSlice.actions

export default userSlice.reducer
