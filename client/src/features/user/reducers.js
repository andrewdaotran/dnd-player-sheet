const reducers = {
	getUserFromLocalStorage: (state, action) => {
		const profile = JSON.parse(localStorage.getItem('profile'))
		const token = JSON.parse(localStorage.getItem('token'))

		state.token = token
		state.username = profile.username
		state.fullName = profile.name || profile.fullName
		state.firstName = profile.givenName || profile.firstName
		state.lastName = profile.familyName || profile.lastName
		state.email = profile.email
		state.googleId = profile.googleId
		state.standardId = profile.standardId
		state.characterSheets = profile.characterSheets
	},

	// replaced with googleLoginThunk
	googleLogin: (state, action) => {
		const profile = action.payload.profile
		const token = action.payload.token

		state.token = token
		state.fullName = profile.name
		state.firstName = profile.givenName
		state.lastName = profile.familyName
		state.email = profile.email
		state.googleId = profile.googleId
		// state.standardId = profile._id

		localStorage.setItem('profile', JSON.stringify({ ...profile }))
		localStorage.setItem('token', JSON.stringify(token))
	},

	userLogout: (state, action) => {
		state.token = ''
		state.fullName = ''
		state.firstName = ''
		state.lastName = ''
		state.email = ''
		state.googleId = ''
		state.standardId = ''
		state.username = ''

		localStorage.removeItem('profile')
		localStorage.removeItem('token')
	},
	updateUserReducer: (state, action) => {
		// console.log(state[action.payload.firstName])
		if (action.payload.secondInput) {
			state[action.payload.firstName] = action.payload.firstInput
			state[action.payload.lastName] = action.payload.secondInput
			state.fullName = `${action.payload.firstInput} ${action.payload.secondInput}`
		} else {
			state[action.payload.name] = action.payload.firstInput
		}
	},
}

export default reducers
