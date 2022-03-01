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

// delete later, just disable and enable inputs for now

import { useNavigate } from 'react-router-dom'

const Modal = () => {
	const navigate = useNavigate()

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
						<CardActions
							sx={modalCardActions}
							onClick={() => navigate('/create/character-name')}
						>
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
