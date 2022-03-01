import express from 'express'
import {
	createCharacterSheet,
	deleteCharacterSheet,
	getAllCharacterSheets,
	getSingleCharacterSheet,
	updateCharacterSheet,
} from '../controllers/characterSheets.js'

const router = express.Router()

router.get('/', getAllCharacterSheets)
router.post('/', createCharacterSheet)
router.get('/:id', getSingleCharacterSheet)
router.patch('/:id', updateCharacterSheet)
router.delete('/:id', deleteCharacterSheet)

export default router
