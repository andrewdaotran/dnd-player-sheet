import { useDispatch } from 'react-redux'
import { Button, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { backButton, gridContainer, nextButton, paper } from './styles'
import { close } from '../../../features/sidebar-open/sidebarOpenSlice'

const _BackAndNextButtons = ({
	back,
	next,
	submitData,
	submit,
	characterNamePage,
	playerInformationPage,
}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const characterSheet = useSelector((state) => state.characterSheet)

	// console.log(characterSheet.characterName.value)

	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Button
					variant='contained'
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
					disabled={
						characterNamePage
							? !characterSheet.characterName.value
							: playerInformationPage
							? !characterSheet.playerInformation.class.value ||
							  !characterSheet.playerInformation.race.value ||
							  !characterSheet.playerInformation.background.value ||
							  !characterSheet.playerInformation.alignment.value
							: false
					}
				>
					{submit ? 'Submit' : 'Next'}
				</Button>
			</Grid>
		</Grid>
	)
}

export default _BackAndNextButtons
