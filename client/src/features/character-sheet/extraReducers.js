import {
	createCharacterSheet,
	getSingleCharacterSheet,
	updateCharacterSheet,
} from './thunks'

const updateRedux = (state, action) => {
	const data = action.payload
	state.characterName = data.characterName
	state.hitPoints = data.hitPoints
	state.playerInformation = data.playerInformation
	state.characterInformation = data.characterInformation
	state.abilityScores = data.abilityScores
	state.skills = data.skills
	state.attacksAndSpellcasting = data.attacksAndSpellcasting
	state.inventory = data.inventory
	state.characterDetails = data.characterDetails
}

const extraReducers = {
	[createCharacterSheet.fulfilled]: (state, action) => {
		updateRedux(state, action)
		state.id = action.payload._id
	},
	[createCharacterSheet.rejected]: () => {
		console.log('hey there was an error boiiii')
	},
	[getSingleCharacterSheet.fulfilled]: (state, action) => {
		updateRedux(state, action)
		state.id = action.payload._id
	},
	[getSingleCharacterSheet.pending]: (state) => {},
	[updateCharacterSheet.fulfilled]: (state, action) => {
		updateRedux(state, action)
	},
}

export default extraReducers