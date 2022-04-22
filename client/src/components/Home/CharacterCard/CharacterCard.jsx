import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import WarningModal from '../../WarningModal/WarningModal'

import {
	Typography,
	TextField,
	Container,
	Button,
	Card,
	CardContent,
	CardActionArea,
	CardActions,
	Grid,
	Paper,
	Divider,
} from '@mui/material'

import {
	cardTitle,
	card,
	divider,
	deleteButton,
	deleteButtonContainer,
} from './styles'
import {
	deleteCharacterSheetThunk,
	getSingleCharacterSheet,
} from '../../../features/character-sheet/thunks'
import { removeCharacterSheetThunk } from '../../../features/user/thunks'
import { removeCharacterSheet } from '../../../features/all-sheets/allSheetsSlice'

const CharacterCard = ({ characterSheetId, characterName, index }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const standardId = useSelector((state) => state.user.standardId)
	const sheetsLoading = useSelector((state) => state.allSheets.isLoading)
	const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)

	const characterSheetData = useSelector(
		(state) => state.allSheets.characterSheets[index]
	)

	const handleNavigate = () => {
		navigate(`/characterSheets/${characterSheetId}`)
		dispatch(getSingleCharacterSheet({ id: characterSheetId, navigate }))
	}

	const handleDeleteCharacter = () => {
		dispatch(deleteCharacterSheetThunk(characterSheetId))
		dispatch(removeCharacterSheetThunk(characterSheetId))
		dispatch(removeCharacterSheet(characterSheetId))
		setDeleteConfirmOpen(!deleteConfirmOpen)
	}

	const handleToggleDeleteConfirm = () => {
		setDeleteConfirmOpen(!deleteConfirmOpen)
	}

	// console.log(characterSheetData)

	return (
		<>
			<Grid item>
				<Card sx={card}>
					{/* <CardActionArea> */}
					<CardContent>
						<Typography variant='h5' sx={cardTitle} onClick={handleNavigate}>
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
						<CardActions sx={deleteButtonContainer}>
							<Button
								sx={deleteButton}
								variant='contained'
								onClick={handleToggleDeleteConfirm}
							>
								Delete
							</Button>
						</CardActions>
					</CardContent>
					{/* </CardActionArea> */}
				</Card>
			</Grid>
			{deleteConfirmOpen ? (
				<WarningModal
					submitFunction={handleDeleteCharacter}
					cancelFunction={handleToggleDeleteConfirm}
					deleteCharacter={true}
					textInsert={characterName}
				/>
			) : null}
		</>
	)
}

export default CharacterCard
