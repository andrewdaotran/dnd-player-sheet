import express from 'express'
import {
	createCharacterSheet,
	deleteCharacterSheet,
	getAllCharacterSheets,
	getSingleCharacterSheet,
	updateCharacterSheet,
	updateDeathSaves,
	updateAttacksAndSpellcasting,
} from '../controllers/characterSheets.js'

const router = express.Router()

router.get('/', getAllCharacterSheets)
router.post('/', createCharacterSheet)
router.get('/:id', getSingleCharacterSheet)
router.patch('/:id', updateCharacterSheet)
router.patch('/:id/deathSave', updateDeathSaves)
router.patch('/:id/attacksAndSpellcasting', updateAttacksAndSpellcasting)
router.delete('/:id', deleteCharacterSheet)

export default router
