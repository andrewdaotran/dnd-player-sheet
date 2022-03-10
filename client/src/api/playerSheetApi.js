import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/characterSheets' })

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`
	}
	return req
})

export const createCharacterSheet = (character, user) =>
	API.post('/', { character, user })
// export const createCharacterSheet = (character) => API.post('/', character)

export const getSingleCharacterSheet = (id) => API.get(`/${id}`)

export const getAllCharacterSheets = () => API.get()

export const updateCharacterSheet = (id, characterSheet) =>
	API.patch(`/${id}`, characterSheet)

export const updateHitPoints = (id, hitPoints) =>
	API.patch(`/${id}/hitPoints`, hitPoints)

export const updateDeathSaves = (id, deathSaves) =>
	API.patch(`/${id}/deathSave`, deathSaves)

export const updateAttacksAndSpellcasting = (id, attacksAndSpellcasting) =>
	API.patch(`/${id}/attacksAndSpellcasting`, attacksAndSpellcasting)

export const updateInventory = (id, inventory) =>
	API.patch(`/${id}/inventory`, inventory)

export const updateCharacterDetails = (id, characterDetails) =>
	API.patch(`/${id}/characterDetails`, characterDetails)
