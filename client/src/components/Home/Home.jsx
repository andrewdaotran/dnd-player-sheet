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

import { container, paper, gridContainer, box } from './styles'
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

	useEffect(() => {
		dispatch(getAllSheetsThunk({}))
	}, [characterSheets])

	// console.log(allSheets)
	return (
		<>
			{/* {characterSheets.length > 0 ? ( */}
			{characterSheets.length > 0 ? (
				<Container sx={container}>
					{/* <Box sx={box}> */}
					<Paper sx={paper}>
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
					</Paper>
					{/* </Box> */}
				</Container>
			) : null}
		</>
	)
}

export default Home
