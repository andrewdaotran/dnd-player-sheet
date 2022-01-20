import { useSelector, useDispatch } from 'react-redux'
import { TextField, Grid, Card, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { inputContainer, inputItem, card } from './styles'
import { addData } from '../../../../features/character-sheet/characterSheetSlice'
const PlayerInformation = ({ create }) => {
	const dispatch = useDispatch()
	const characterSheet = useSelector((state) => state.characterSheet)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	const character = {
		class: characterSheet.class,
		race: characterSheet.race,
		background: characterSheet.background,
		alignment: characterSheet.alignment,
		level: characterSheet.level,
		experiencePoints: characterSheet.experiencePoints,
	}

	const handlePlayerInformation = (e) => {
		dispatch(
			addData({
				...characterSheet,
				[e.target.name]: {
					...characterSheet[e.target.name],
					value: e.target.value,
				},
			})
		)
	}

	return (
		<Card
			sx={mediumScreenAndDown ? { ...card, margin: '1rem auto 0 auto' } : card}
		>
			<Grid container spacing={2} sx={inputContainer}>
				{character &&
					Object.keys(character).map((name) => {
						return (
							<Grid item lg={4} md={6} sm={4} key={name} sx={inputItem}>
								<TextField
									disabled={create ? false : areInputsDisabled}
									label={character[name].title}
									name={name}
									onChange={handlePlayerInformation}
									value={character[name].value}
									InputProps={{
										inputProps: {
											style: {
												textAlign: 'center',
											},
										},
									}}
								/>
							</Grid>
						)
					})}
			</Grid>
		</Card>
	)
}

export default PlayerInformation
