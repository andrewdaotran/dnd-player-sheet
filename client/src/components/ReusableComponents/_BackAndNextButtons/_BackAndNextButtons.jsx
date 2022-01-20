import { Button, Grid, Paper, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { backButton, gridContainer, nextButton, paper } from './styles'

const _BackAndNextButtons = ({ back, next, submitData }) => {
	const navigate = useNavigate()
	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Button
					variant='outlined'
					sx={backButton}
					onClick={() => {
						navigate(`/${back}`)
						submitData()
					}}
				>
					Back
				</Button>
			</Grid>
			<Grid item>
				<Button
					sx={nextButton}
					variant='contained'
					onClick={() => {
						navigate(`/${next}`)
						submitData()
					}}
				>
					Next
				</Button>
			</Grid>
		</Grid>
	)
}

export default _BackAndNextButtons
