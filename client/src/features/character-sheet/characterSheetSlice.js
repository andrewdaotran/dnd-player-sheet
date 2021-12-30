import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	inventory: [],
	hitPoints: 0,
	armorClass: 0,
	initiative: 0,
	speed: 0,
	characterName: '',
	class: '',
	level: 0,
	race: '',
	alignment: '',
	background: '',
	experiencePoints: 0,
	skills: [],
	weapons: [],
	spells: [],
	hitDice: [],
	ideals: [],
	personalityTraits: [],
	bonds: [],
	flaws: [],
	backgroundStory: [],
}

const characterSheetSlice = createSlice({
	initialState,
	name: 'Character Sheet',
	reducers: {},
	extraReducers: {},
})

export default characterSheetSlice
