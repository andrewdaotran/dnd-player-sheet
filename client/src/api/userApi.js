import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/user' })

export const getUser = (id) => API.get(`/${id}`)

export const createUser = (user) => API.post(`/`, user)

export const signup = (formData) => API.post('/signup', formData)

export const signin = (formData) => API.post('/signin', formData)

export const googleLogin = (userData) => API.post('/googleSignin', userData)
