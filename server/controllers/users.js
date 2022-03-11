import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserModel from '../models/users/userModel.js'
import { toTitleCase } from '../utils.js'

export const getUser = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id))
		res.status(400).send('no post with that id')
	try {
		const user = await UserModel.findById(id)
		res.status(200).json({ success: true, data: user })
	} catch (error) {
		console.log(error)
	}
}

export const createUser = async (req, res) => {
	const user = req.body
	// console.log(character)
	const newUser = new UserModel(user)

	try {
		// const newUser = UserModel.create(req.body)
		await newUser.save()
		res.status(201).json({
			success: true,
			data: newUser,
		})
	} catch (error) {
		console.log(error)
	}
}

export const googleLoginBackend = async (req, res) => {
	const { email, familyName, givenName, googleId, name, token } = req.body

	try {
		const user = await UserModel.findOne({ email })

		if (user) {
			res.status(200).json({ result: user })
		}

		if (!user) {
			const result = await UserModel.create({
				email,
				fullName: name,
				firstName: givenName,
				lastName: familyName,
				googleId,
				token,
				characterSheets: [],
				username: '',
			})

			res.status(200).json({ result })
		}
	} catch (error) {
		console.log(error)
	}
}

export const signin = async (req, res) => {
	const { usernameOrEmail, password, token } = req.body

	try {
		const existingUser = await UserModel.findOne({
			$or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
		})

		if (!existingUser)
			return res.status(404).json({ message: 'User does not exist.' })

		const isPasswordCorect = await bcrypt.compare(
			password,
			existingUser.password
		)

		if (!isPasswordCorect)
			return res.status(400).json({ message: 'Invalid credentials' })

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			'secret message',
			{ expiresIn: '1h' }
		)

		res.status(200).json({ result: existingUser, token })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Something went wrong.' })
	}
}

export const signup = async (req, res) => {
	const {
		email,
		password,
		confirmPassword,
		firstName,
		lastName,
		username,
		token,
	} = req.body

	try {
		const existingUser = await UserModel.findOne({
			$or: [{ email }, { username }],
		})

		if (existingUser)
			return res.status(400).json({ message: 'User already exists.' })

		if (password !== confirmPassword)
			return res.status(400).json({ message: 'Passwords do not match.' })

		const hashedPassword = await bcrypt.hash(password, 12)

		const result = await UserModel.create({
			username,
			email,
			password: hashedPassword,
			fullName: toTitleCase(`${firstName} ${lastName}`),
			firstName: toTitleCase(firstName),
			lastName: toTitleCase(lastName),
			characterSheets: [],
		})

		const token = jwt.sign(
			{ email: result.email, id: result._id },
			'secret message',
			{ expiresIn: '1h' }
		)

		res.status(200).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' })
	}
}

export const addCharacterSheetToUser = async (req, res) => {
	const { standardId, characterSheetId, characterName } = req.body

	if (!mongoose.Types.ObjectId.isValid(standardId))
		res.status(400).send('no account with that id')

	try {
		const exisitingUser = await UserModel.findById(standardId)
		// console.log(exisitingUser)
		const user = await UserModel.findByIdAndUpdate(
			standardId,
			{
				characterSheets: [
					...exisitingUser.characterSheets,
					{ characterSheetId, characterName },
				],
			},
			{ new: true }
		)

		res.status(201).json({ user })
	} catch (error) {
		console.log(error)
	}
}

export const updateUser = async (req, res) => {
	const userData = req.body

	// console.log(userData)

	try {
		const exisitingUser = await UserModel.findById(userData.standardId)

		const user = await UserModel.findByIdAndUpdate(
			exisitingUser._id,
			{
				fullName: userData.fullName,
				firstName: userData.firstName,
				lastName: userData.lastName,
				email: userData.email,
				username: userData.username,
			},
			{ new: true }
		)
		// console.log(user)

		res.status(201).json({ user })
	} catch (err) {
		console.log(err)
	}
}
