import { useSelector } from 'react-redux'
import { TextField, Grid, Card, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { inputContainer, inputItem, card } from './styles'
const PlayerInformation = ({ changeValues, character, create }) => {
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Card
			sx={mediumScreenAndDown ? { ...card, margin: '1rem auto 0 auto' } : card}
		>
			<Grid container spacing={2} sx={inputContainer}>
				{character &&
					Object.keys(character).map((label) => {
						return (
							<Grid item lg={4} md={6} sm={4} key={label} sx={inputItem}>
								<TextField
									disabled={create ? false : areInputsDisabled}
									name={label}
									label={character[label].title}
									InputProps={{
										inputProps: {
											style: {
												textAlign: 'center',
											},
										},
									}}
									onChange={changeValues}
									value={character[label].value}
								/>
							</Grid>
						)
					})}
			</Grid>
		</Card>
	)
}

export default PlayerInformation
