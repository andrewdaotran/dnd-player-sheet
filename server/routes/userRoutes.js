import express from 'express'
import {
	createUser,
	getUser,
	signup,
	signin,
	googleLoginBackend,
	addCharacterSheetToUser,
} from '../controllers/users.js'

const router = express.Router()

router.post('/', createUser)
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/googleSignin', googleLoginBackend)
router.patch('/addCharacterSheet', addCharacterSheetToUser)
router.get('/:id', getUser)

export default router
