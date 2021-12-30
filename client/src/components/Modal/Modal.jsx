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

import useStyles from './styles'

const Modal = () => {
	const classes = useStyles()
	return (
		// <Container>
		// 	<Typography variant='h2'>Modal</Typography>
		// </Container>
		<Container>
			{/* remove alignItems and justifyContent after styling */}
			<Grid container alignItems='center' justifyContent='center'>
				<Card>
					<Grid item>
						<CardContent>
							<Typography variant='h4'>
								Welcome to ndru's DnD Character Creator
							</Typography>
						</CardContent>
					</Grid>
					<Grid item justifyItems='center' alignItems='center'>
						<CardActions>
							<Button className={classes.root}>Create a Character</Button>
						</CardActions>
					</Grid>
				</Card>
			</Grid>
		</Container>
	)
}

export default Modal
