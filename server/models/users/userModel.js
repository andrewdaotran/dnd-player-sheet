import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	id: String,
	username: String,
	password: String,
	fullName: String,
	firstName: String,
	lastName: String,
	email: String,
	token: String,
	googleId: String,
	standardId: String,
	characterSheets: [String],
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
