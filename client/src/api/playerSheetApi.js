import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/' })

const characterSheets = 'characterSheets'

export const createCharacterSheet = (character) =>
	API.post(characterSheets, character)

export const getSingleCharacterSheet = (id) =>
	API.get(`${characterSheets}/${id}`)

export const getAllCharacterSheets = () => API.get(characterSheets)

export const updateCharacterSheet = (id, characterSheet) =>
	API.patch(`${characterSheets}/${id}`, characterSheet)

export const updateHitPoints = (id, hitPoints) =>
	API.patch(`${characterSheets}/${id}/hitPoints`, hitPoints)

export const updateDeathSaves = (id, deathSaves) =>
	API.patch(`${characterSheets}/${id}/deathSave`, deathSaves)

export const updateAttacksAndSpellcasting = (id, attacksAndSpellcasting) =>
	API.patch(
		`${characterSheets}/${id}/attacksAndSpellcasting`,
		attacksAndSpellcasting
	)

export const updateInventory = (id, inventory) =>
	API.patch(`${characterSheets}/${id}/inventory`, inventory)

export const updateCharacterDetails = (id, characterDetails) =>
	API.patch(`${characterSheets}/${id}/characterDetails`, characterDetails)
