import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000/' })

const characterSheets = 'characterSheets'
// const character = 'character'

export const createCharacterSheet = (character) =>
	API.post(characterSheets, character)

export const getSingleCharacterSheet = (id) =>
	API.get(`${characterSheets}/${id}`)

export const getAllCharacterSheets = () => API.get(characterSheets)

export const updateCharacterSheet = (id, characterSheet) =>
	API.patch(`${characterSheets}/${id}`, characterSheet)

export const updateDeathSaves = (id, deathSaves) =>
	API.patch(`${characterSheets}/${id}/deathSave`, deathSaves)

export const updateAttacksAndSpellcasting = (id, attacksAndSpellcasting) =>
	API.patch(
		`${characterSheets}/${id}/attacksAndSpellcasting`,
		attacksAndSpellcasting
	)
