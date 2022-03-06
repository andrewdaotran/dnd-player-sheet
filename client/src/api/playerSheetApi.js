import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/characterSheets' })

const characterSheets = 'characterSheets'

export const createCharacterSheet = (character) =>
	API.post(characterSheets, character)

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
