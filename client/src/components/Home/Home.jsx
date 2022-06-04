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
	Box,
} from '@mui/material'

import { container, paper, gridContainer, box, title, username } from './styles'
import CharacterCard from './CharacterCard/CharacterCard'
import { getAllSheetsThunk } from '../../features/all-sheets/allSheetsSlice'
import { userLogout } from '../../features/user/userSlice'
import WarningModal from '../WarningModal/WarningModal'

const Home = () => {
	const dispatch = useDispatch()
	// const characterSheets = useSelector(
	// 	(state) => state.allSheets.characterSheets
	// )
	const characterSheets = useSelector((state) => state.user.characterSheets)
	const allSheets = useSelector((state) => state.allSheets.characterSheets)
	const user = useSelector((state) => state.user)

	useEffect(() => {
		dispatch(getAllSheetsThunk({}))
	}, [characterSheets])

	// console.log(allSheets)
	return (
		<>
			{/* {characterSheets.length > 0 ? ( */}
			{characterSheets.length > 0 ? (
				<Container sx={container}>
					{/* <Paper sx={paper}> */}
					<Typography variant='h3' sx={title}>
						{/* Your Character Sheets */}
						{user.username ? (
							<>
								<span style={username}>{user.username}</span>'s
							</>
						) : (
							'Your'
						)}{' '}
						Character Sheets
					</Typography>
					<Grid container spacing={2} sx={gridContainer}>
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
					{/* </Paper> */}
				</Container>
			) : null}
		</>
	)
}

export default Home
