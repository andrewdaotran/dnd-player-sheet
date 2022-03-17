import { useSelector, useDispatch } from 'react-redux'
import { TextField, Grid, Card, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { inputContainer, inputItem, card } from './styles'

import { updatePlayerInformation } from '../../../../features/character-sheet/characterSheetSlice'
const PlayerInformation = ({ create }) => {
	const dispatch = useDispatch()

	const playerInformation = useSelector(
		(state) => state.characterSheet.playerInformation
	)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	const handlePlayerInformation = (e) => {
		dispatch(
			updatePlayerInformation({ name: e.target.name, input: e.target.value })
		)
	}

	return (
		<Card
			sx={mediumScreenAndDown ? { ...card, margin: '1rem auto 0 auto' } : card}
		>
			<Grid container spacing={2} sx={inputContainer}>
				{Object.keys(playerInformation).map((name, index) => {
					return (
						<Grid item lg={4} md={6} sm={4} key={name} sx={inputItem}>
							<TextField
								disabled={create ? false : areInputsDisabled}
								label={
									index === 0
										? `${playerInformation[name].title}*`
										: index === 1
										? `${playerInformation[name].title}*`
										: index === 2
										? `${playerInformation[name].title}*`
										: index === 3
										? `${playerInformation[name].title}*`
										: playerInformation[name].title
								}
								name={name}
								onChange={handlePlayerInformation}
								value={playerInformation[name].value}
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
