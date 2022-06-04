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
	CardActions,
	Grid,
	Paper,
	Divider,
} from '@mui/material'

import {
	card,
	container,
	modalText,
	modalCardActions,
	cancelButton,
	modalGrid,
	confirmButton,
} from './styles'

const WarningModal = ({
	deleteCharacter,
	deleteUser,
	submitFunction,
	cancelFunction,
	textInsert,
}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	return (
		<Container sx={container}>
			<Grid container sx={modalGrid}>
				<Card sx={card}>
					<Grid item sx={modalText}>
						<CardContent>
							<Typography variant='h6'>
								{deleteCharacter
									? `Are you sure you want to delete the character ${textInsert}?`
									: `Are you sure you want to delete your account? All of your characters will be lost.`}
							</Typography>
						</CardContent>
					</Grid>
					<Grid item justifyItems='center' alignItems='center'>
						<CardActions sx={modalCardActions}>
							<Button
								sx={cancelButton}
								variant='contained'
								onClick={cancelFunction}
							>
								Cancel
							</Button>
							<Button
								sx={confirmButton}
								variant='contained'
								onClick={submitFunction}
							>
								Confirm
							</Button>
						</CardActions>
					</Grid>
				</Card>
			</Grid>
		</Container>
	)
}

export default WarningModal
