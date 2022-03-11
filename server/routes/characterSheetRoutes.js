import express from 'express'
import {
	createCharacterSheet,
	deleteCharacterSheet,
	getAllCharacterSheetsByUser,
	getSingleCharacterSheet,
	updateCharacterSheet,
	updateDeathSaves,
	updateAttacksAndSpellcasting,
	updateInventory,
	updateCharacterDetails,
	updateHitPoints,
} from '../controllers/characterSheets.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/', auth, createCharacterSheet)
router.get('/user/:id', getAllCharacterSheetsByUser)
router.get('/:id', auth, getSingleCharacterSheet)
router.patch('/:id', auth, updateCharacterSheet)
router.patch('/:id/hitPoints', auth, updateHitPoints)
router.patch('/:id/deathSave', auth, updateDeathSaves)
router.patch('/:id/attacksAndSpellcasting', auth, updateAttacksAndSpellcasting)
router.patch('/:id/inventory', auth, updateInventory)
router.patch('/:id/characterDetails', auth, updateCharacterDetails)
router.delete('/:id', auth, deleteCharacterSheet)

export default router
