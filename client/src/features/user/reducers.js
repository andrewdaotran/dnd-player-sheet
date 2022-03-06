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
		state.standardId = profile._id
	},
	googleLogin: (state, action) => {
		const profile = action.payload.profile
		const token = action.payload.token

		// console.log(profile, token)

		state.token = token
		state.fullName = profile.name
		state.firstName = profile.givenName
		state.lastName = profile.familyName
		state.email = profile.email
		state.googleId = profile.googleId

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

		localStorage.removeItem('profile')
		localStorage.removeItem('token')
	},
}

export default reducers
