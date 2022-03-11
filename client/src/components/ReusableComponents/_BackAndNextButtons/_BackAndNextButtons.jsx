import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Grid, Paper, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { backButton, gridContainer, nextButton, paper } from './styles'
import { close } from '../../../features/sidebar-open/sidebarOpenSlice'

const _BackAndNextButtons = ({ back, next, submitData, submit, required }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const characterSheet = useSelector((state) => state.characterSheet)

	console.log(characterSheet.characterName.value)

	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Button
					variant='outlined'
					sx={backButton}
					onClick={() => {
						navigate(`/${back}`)
						dispatch(close())
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
						dispatch(close())
						if (!submit) {
							// navigate(`/characterSheets/${characterSheet.id}`)
							// } else {
							navigate(`/${next}`)
						}
					}}
					// character name is required
					disabled={
						!required
							? false
							: characterSheet.characterName.value
							? false
							: true
					}
				>
					{submit ? 'Submit' : 'Next'}
				</Button>
			</Grid>
		</Grid>
	)
}

export default _BackAndNextButtons
