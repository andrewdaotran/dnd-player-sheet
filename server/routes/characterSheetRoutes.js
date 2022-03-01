import express from 'express'
import {
	createCharacterSheet,
	deleteCharacterSheet,
	getAllCharacterSheets,
	getSingleCharacterSheet,
} from '../controllers/characterSheets.js'

const router = express.Router()

router.get('/', getAllCharacterSheets)
router.post('/', createCharacterSheet)
router.get('/:id', getSingleCharacterSheet)
router.delete('/:id', deleteCharacterSheet)

export default router
