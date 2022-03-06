import { standardLogin, signup, googleLoginThunk } from './thunks'

const updateRedux = (state, action) => {
	const data = action.payload.result
	const token = action.payload.token || action.payload.result.token

	state.token = token
	state.username = data.username
	state.fullName = data.fullName
	state.firstName = data.firstName
	state.lastName = data.lastName
	state.email = data.email
	state.standardId = data._id
	state.googleId = data.googleId
	state.characterSheets = data.characterSheets

	localStorage.setItem(
		'profile',
		JSON.stringify({
			username: data.username,
			fullName: data.fullName,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			googleId: data.googleId,
			standardId: data._id,
		})
	)
	localStorage.setItem('token', JSON.stringify(token))
}

const extraReducers = {
	[standardLogin.fulfilled]: (state, action) => {
		updateRedux(state, action)
	},
	[signup.fulfilled]: (state, action) => {
		updateRedux(state, action)
	},
	[googleLoginThunk.fulfilled]: (state, action) => {
		updateRedux(state, action)
	},
}

export default extraReducers
