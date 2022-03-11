import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
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
	Divider,
} from '@mui/material'

import { cardTitle, card, divider } from './styles'

const CharacterCard = ({ characterSheetId, characterName, index }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const sheetsLoading = useSelector((state) => state.allSheets.isLoading)
	const characterSheetData = useSelector(
		(state) => state.allSheets.characterSheets[index]
	)

	const handleNavigate = () => {
		navigate(`/characterSheets/${characterSheetId}`)
	}

	return (
		<Grid item>
			<Card sx={card}>
				<CardActionArea onClick={handleNavigate}>
					<CardContent>
						<Typography variant='h5' sx={cardTitle}>
							{characterName}
						</Typography>
						<Divider sx={divider} />
						{!sheetsLoading ? (
							<>
								<Typography>
									Class: {characterSheetData.playerInformation.class.value}
								</Typography>
								<Typography>
									Race: {characterSheetData.playerInformation.race.value}
								</Typography>
								<Typography>
									Background:{' '}
									{characterSheetData.playerInformation.background.value}
								</Typography>
								<Typography>
									Alignment:{' '}
									{characterSheetData.playerInformation.alignment.value}
								</Typography>
								<Typography>
									Level: {characterSheetData.playerInformation.level.value}
								</Typography>
								<Typography>
									Experience Points:{' '}
									{characterSheetData.playerInformation.experiencePoints.value}
								</Typography>
							</>
						) : (
							<h5>Loading</h5>
						)}
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

export default CharacterCard
