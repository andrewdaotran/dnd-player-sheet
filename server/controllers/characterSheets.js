import CharacterSheetModel from '../models/characterSheet/characterSheetModel.js'
import mongoose from 'mongoose'

export const getAllCharacterSheets = async (req, res) => {
	try {
		const characterSheets = await CharacterSheetModel.find()
		res.status(200).json({ success: true, data: characterSheets })
	} catch (error) {
		console.log(error)
	}
}

export const getSingleCharacterSheet = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const characterSheet = await CharacterSheetModel.findById(id)
		res.status(200).json({ success: true, data: characterSheet })
	} catch (error) {
		console.log(error)
	}
}

export const createCharacterSheet = async (req, res) => {
	const character = req.body
	// console.log(character)
	const characterSheet = new CharacterSheetModel(character)

	try {
		// const characterSheet = CharacterSheetModel.create(req.body)
		await characterSheet.save()
		res.status(201).json({
			success: true,
			data: characterSheet,
		})
	} catch (error) {
		console.log(error)
	}
}

export const deleteCharacterSheet = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')

	try {
		await CharacterSheetModel.findByIdAndRemove(id)

		res.json('Character Sheet has been deleted')
	} catch (error) {
		console.log(error)
	}
}

export const updateCharacterSheet = async (req, res) => {
	const { id } = req.params
	const characterSheet = req.body
	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{ ...characterSheet },
			{ new: true }
		)
		// const characterSheet = await CharacterSheetModel.findById(id)
		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (error) {
		console.log(error)
	}
}

export const updateDeathSaves = async (req, res) => {
	const { id } = req.params
	const { deathSaves } = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const oldCharacterSheet = await CharacterSheetModel.findById(id)
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				// ...oldCharacterSheet,
				// characterInformation: {
				// 	...oldCharacterSheet.characterInformation,
				// 	deathSaveSuccess: deathSaves.deathSaveSuccess,
				// 	deathSaveFail: deathSaves.deathSaveFail,
				// },
				characterInformation: {
					...oldCharacterSheet.characterInformation,
					deathSaveSuccess: deathSaves.deathSaveSuccess,
					deathSaveFail: deathSaves.deathSaveFail,
				},
			},
			{ new: true }
		)

		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (err) {
		console.log(err)
	}
}
