import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/user' })

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`
	}
	return req
})

export const getUser = (id) => API.get(`/${id}`)

export const createUser = (user) => API.post(`/`, user)

export const signup = (formData) => API.post('/signup', formData)

export const signin = (formData) => API.post('/signin', formData)

export const googleLogin = (userData) => API.post('/googleSignin', userData)

export const addCharacterSheetToUser = (
	standardId,
	characterSheetId,
	characterName
) =>
	API.patch('/addCharacterSheet', {
		standardId,
		characterSheetId,
		characterName,
	})

export const updateUser = (user) => API.patch(`/${user.standardId}`, user)
