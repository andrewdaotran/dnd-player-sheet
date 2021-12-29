import express from 'express'
import {
	createCharacterSheet,
	deleteCharacterSheet,
	getAllCharacterSheets,
} from '../controllers/characterSheets.js'

const router = express.Router()

router.get('/', getAllCharacterSheets)
router.post('/', createCharacterSheet)
router.delete('/:id', deleteCharacterSheet)

export default router
