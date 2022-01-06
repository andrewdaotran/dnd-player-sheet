import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.dnd5eapi.co/api/' })

const abilityScores = 'ability-scores'

// get ability scores

export const getAbilityScores = () => API.get(abilityScores)

export const getIndividualAbilityScores = (url) =>
	API.get(`https://www.dnd5eapi.co${url}`)
