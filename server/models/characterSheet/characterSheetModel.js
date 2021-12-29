import mongoose from 'mongoose'

import characterSheetOptions from './characterSheetSchema.js'

const characterSheetSchema = mongoose.Schema(characterSheetOptions)

const CharacterSheetModel = mongoose.model(
	'Character Sheet',
	characterSheetSchema
)

export default CharacterSheetModel
