import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'

import characterSheetsRoutes from './routes/characterSheetRoutes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use(cors())

app.use('/characterSheets', characterSheetsRoutes)

const CONNECTION_URL =
	'mongodb+srv://ndru:humanrogue@cluster0.cbokp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 6000

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))
	)
	.catch((error) => console.log(error))
