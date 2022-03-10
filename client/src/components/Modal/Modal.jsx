import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
	Typography,
	Container,
	Button,
	Card,
	CardContent,
	CardActions,
	Grid,
} from '@mui/material'

import {
	modalButton,
	modalCardActions,
	modalGrid,
	modalText,
	container,
} from './styles'

import { useNavigate } from 'react-router-dom'
import { close } from '../../features/sidebar-open/sidebarOpenSlice'
import { getUserFromLocalStorage } from '../../features/user/userSlice'
import { clearCharacterSheet } from '../../features/character-sheet/characterSheetSlice'

const Modal = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const createCharacterButton = () => {
		dispatch(close())
		navigate('/create/character-name')
	}

	useEffect(() => {
		dispatch(clearCharacterSheet())

		const profile = JSON.parse(localStorage.getItem('profile'))

		if (profile) dispatch(getUserFromLocalStorage())

		if (!profile) {
			navigate('/auth')
			dispatch(clearCharacterSheet())
			return
		}
	}, [dispatch])

	return (
		<Container sx={container}>
			<Grid container sx={modalGrid}>
				<Card>
					<Grid item sx={modalText}>
						<CardContent>
							<Typography variant='h4'>
								Welcome to ndru's DnD Character Creator
							</Typography>
						</CardContent>
					</Grid>
					<Grid item justifyItems='center' alignItems='center'>
						<CardActions sx={modalCardActions} onClick={createCharacterButton}>
							<Button sx={modalButton} variant='contained'>
								Create a Character
							</Button>
						</CardActions>
					</Grid>
				</Card>
			</Grid>
		</Container>
	)
}

export default Modal
