import axios from 'axios'

const API2 = axios.create({ baseURL: 'https://www.dnd5eapi.co/api/' })
const API = axios.create({ baseURL: 'https://www.dnd5eapi.co' })

const abilityScores = 'ability-scores'
const skills = 'skills'

// get ability scores

export const getAbilityScores = () => API2.get(abilityScores)

export const getIndividualAbilityScores = (url) =>
	API2.get(`https://www.dnd5eapi.co${url}`)

export const getSkills = () => API.get(`/api/${skills}`)
