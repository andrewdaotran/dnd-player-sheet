import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				zIndex: 1,
			}}
		>
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
		</div>
	)
}

export default WarningModal
