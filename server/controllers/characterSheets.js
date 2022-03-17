import CharacterSheetModel from '../models/characterSheet/characterSheetModel.js'
import mongoose from 'mongoose'

export const getAllCharacterSheetsByUser = async (req, res) => {
	const { id } = req.params
	try {
		const characterSheets = await CharacterSheetModel.find({
			'user.standardId': id,
			// user: { standardId: id },
		})

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
	const { character, user } = req.body

	try {
		const characterSheet = await CharacterSheetModel.create({
			...character,
			user,
		})
		// await characterSheet.save()
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

export const deleteAllCharacterSheetsByUser = async (req, res) => {
	const { id } = req.params
	try {
		// await CharacterSheetModel.deleteMany({ 'user.standardId': id }, (err) => {
		// 	if (err) {
		// 		return console.log(err)
		// 	}
		// })
		await CharacterSheetModel.deleteMany({ 'user.standardId': id }),
			res.status(202).json({
				message: 'Character Sheets have been successfully deleted.',
			})
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
		const existingCharacterSheet = await CharacterSheetModel.findById(id)
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{ ...existingCharacterSheet, ...characterSheet },
			{ new: true }
		)
		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (error) {
		console.log(error)
	}
}

export const updateHitPoints = async (req, res) => {
	const { id } = req.params
	const { hitPoints } = req.body

	console.log(hitPoints)

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const oldCharacterSheet = await CharacterSheetModel.findById(id)
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				hitPoints: {
					...oldCharacterSheet.hitPoints,
					hitPoints,
				},
			},
			{ new: true }
		)
		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (error) {
		console.log(error)
	}
}

export const updateDeathSaves = async (req, res) => {
	const { id } = req.params
	const { deathSaveFail, deathSaveSuccess } = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const oldCharacterSheet = await CharacterSheetModel.findById(id)
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				characterInformation: {
					...oldCharacterSheet.characterInformation,
					deathSaveSuccess,
					deathSaveFail,
				},
			},
			{ new: true }
		)

		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (err) {
		console.log(err)
	}
}

export const updateAttacksAndSpellcasting = async (req, res) => {
	const { id } = req.params
	const { attacksAndSpellcasting } = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')

	try {
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				attacksAndSpellcasting,
			},
			{ new: true }
		)

		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (err) {
		console.log(err)
	}
}

export const updateInventory = async (req, res) => {
	const { id } = req.params
	const { inventory } = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')

	try {
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				inventory,
			},
			{ new: true }
		)

		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (err) {
		console.log(err)
	}
}

export const updateCharacterDetails = async (req, res) => {
	const { id } = req.params
	const { characterDetails } = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')

	try {
		const updatedCharacterSheet = await CharacterSheetModel.findByIdAndUpdate(
			id,
			{
				characterDetails,
			},
			{ new: true }
		)

		res.status(201).json({ success: true, data: updatedCharacterSheet })
	} catch (err) {
		console.log(err)
	}
}
