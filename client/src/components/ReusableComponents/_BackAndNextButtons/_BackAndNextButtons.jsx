import { useEffect } from 'react'
import { Button, Grid, Paper, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { backButton, gridContainer, nextButton, paper } from './styles'

const _BackAndNextButtons = ({ back, next, submitData, submit }) => {
	const navigate = useNavigate()
	const characterSheet = useSelector((state) => state.characterSheet)

	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Button
					variant='outlined'
					sx={backButton}
					onClick={() => {
						navigate(`/${back}`)
						// submitData()
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
						submitData()
						if (!submit) {
							// navigate(`/characterSheets/${characterSheet.id}`)
							// } else {
							navigate(`/${next}`)
						}
					}}
				>
					{submit ? 'Submit' : 'Next'}
				</Button>
			</Grid>
		</Grid>
	)
}

export default _BackAndNextButtons
