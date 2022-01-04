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

import { modalButton, modalCardActions, modalGrid, modalText } from './styles'

const Modal = () => {
	return (
		<Container>
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
						<CardActions sx={modalCardActions}>
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
