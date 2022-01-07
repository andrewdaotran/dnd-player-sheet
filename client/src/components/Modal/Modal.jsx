import {
	Typography,
	Container,
	Paper,
	Button,
	AppBar,
	TextField,
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
import { useDispatch } from 'react-redux'
import { toggleInputs } from '../../features/disable-inputs/disableInputsSlice'

const Modal = () => {
	// delete later, just disable and enable inputs for now
	const dispatch = useDispatch()

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
							onClick={() => dispatch(toggleInputs())}
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
