import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
	Typography,
	TextField,
	Container,
	Button,
	Card,
	CardContent,
	CardActionArea,
	Grid,
	Paper,
} from '@mui/material'

import {
	modalButton,
	modalCardActions,
	modalGrid,
	cardText,
	container,
	card,
} from './styles'
import CharacterCard from './CharacterCard/CharacterCard'
import { getAllSheetsThunk } from '../../features/all-sheets/allSheetsSlice'
import { userLogout } from '../../features/user/userSlice'

const Home = () => {
	const dispatch = useDispatch()
	// const characterSheets = useSelector(
	// 	(state) => state.allSheets.characterSheets
	// )
	const characterSheets = useSelector((state) => state.user.characterSheets)

	useEffect(() => {
		dispatch(getAllSheetsThunk({}))
	}, [])

	// console.log(characterSheets)
	return (
		<Container sx={container}>
			<Paper>
				<Grid container spacing={2}>
					{characterSheets.map((character, index) => {
						return (
							<CharacterCard
								key={character.characterSheetId}
								characterSheetId={character.characterSheetId}
								characterName={character.characterName}
								index={index}
							/>
						)
					})}
				</Grid>
			</Paper>
		</Container>
	)
}

export default Home
