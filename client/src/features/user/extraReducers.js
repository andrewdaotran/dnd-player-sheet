import {
	standardLogin,
	signup,
	googleLoginThunk,
	addCharacterSheetToUser,
} from './thunks'

const updateRedux = (state, action) => {
	const data = action.payload.result
	const token = action.payload?.token || action.payload.result?.token

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
			characterSheets: data.characterSheets,
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
	[addCharacterSheetToUser.fulfilled]: (state, action) => {
		// updateRedux(state, action)
		const user = action.payload.user
		state.characterSheets = user.characterSheets
		localStorage.setItem(
			'profile',
			JSON.stringify({
				username: user.username,
				fullName: user.fullName,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				googleId: user.googleId,
				standardId: user._id,
				characterSheets: user.characterSheets,
			})
		)
	},
}

export default extraReducers
