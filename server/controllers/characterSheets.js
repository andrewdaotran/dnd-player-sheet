import CharacterSheetModel from '../models/characterSheet/characterSheetModel.js'

export const getAllCharacterSheets = async (req, res) => {
	try {
		const characterSheets = await CharacterSheetModel.find()
		res.status(200).json(characterSheets)
	} catch (error) {
		console.log(error)
	}
}

export const getSingleCharacterSheet = async (req, res) => {
	const { id } = req.params
	try {
		const characterSheet = await CharacterSheetModel.findById(id)
		res.status(200).json(characterSheet)
	} catch (error) {
		console.log(error)
	}
}

export const createCharacterSheet = async (req, res) => {
	const character = req.body
	const characterSheet = new CharacterSheetModel(character)

	try {
		await characterSheet.save()
		res.json(201).json(characterSheet)
	} catch (error) {
		console.log(error)
	}
}

export const deleteCharacterSheet = async (req, res) => {
	const { id } = req.params

	try {
		await CharacterSheetModel.findByIdAndRemove(id)

		res.json('Character Sheet has been deleted')
	} catch (error) {
		console.log(error)
	}
}
