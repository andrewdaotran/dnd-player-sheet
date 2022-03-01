import { createCharacterSheet, getSingleCharacterSheet } from './thunks'

const extraReducers = {
	[createCharacterSheet.fulfilled]: (state, action) => {
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
		state.id = data._id

		console.log('success')
	},
	[createCharacterSheet.rejected]: () => {
		console.log('hey there was an error boiiii')
	},
	[getSingleCharacterSheet.fulfilled]: (state, action) => {
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
		state.id = data._id
	},
	[getSingleCharacterSheet.pending]: (state) => {},
}

export default extraReducers
