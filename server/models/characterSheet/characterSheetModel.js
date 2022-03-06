import mongoose from 'mongoose'

// import characterSheetOptions from './characterSheetSchema.js'

// const characterSheetSchema = mongoose.Schema(characterSheetOptions)

const characterSheetSchema = mongoose.Schema({
	user: Object,
	characterName: Object,
	hitPoints: Object,
	playerInformation: Object,
	abilityScores: Object,
	skills: Object,
	attacksAndSpellcasting: [Object],
	inventory: Object,
	characterDetails: Object,
	characterInformation: Object,
})

const CharacterSheetModel = mongoose.model(
	'Character Sheet',
	characterSheetSchema
)

export default CharacterSheetModel
