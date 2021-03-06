import express from 'express'
import {
	createUser,
	getUser,
	signup,
	signin,
	googleLoginBackend,
	addCharacterSheetToUser,
	updateUser,
	removeCharacterSheet,
	deleteUser,
} from '../controllers/users.js'

const router = express.Router()

router.post('/', createUser)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/googleSignin', googleLoginBackend)
router.patch('/addCharacterSheet', addCharacterSheetToUser)
router.patch('/removeCharacterSheet', removeCharacterSheet)
router.patch('/:id', updateUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)

export default router
