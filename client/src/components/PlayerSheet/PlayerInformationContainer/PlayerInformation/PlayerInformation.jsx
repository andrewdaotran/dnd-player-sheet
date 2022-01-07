import { useState } from 'react'
import {
	Container,
	Paper,
	TextField,
	Typography,
	Grid,
	Card,
	useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { container, inputContainer, inputItem, card } from './styles'
const PlayerInformation = () => {
	//need to pull player information from backend from authorization and character sheet, put into state value
	const [labels, setLabels] = useState([
		'Class',
		'Race',
		'Background',
		'Alignment',
		'Level',
		'Exp',
	])

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Container
			sx={
				mediumScreenAndDown
					? { ...container, margin: '1rem auto 0 auto' }
					: container
			}
		>
			<Card sx={card}>
				<Grid container spacing={2} sx={inputContainer}>
					{labels.map((label) => {
						return (
							<Grid item md={6} sm={4} key={label} sx={inputItem}>
								<TextField label={label} />
							</Grid>
						)
					})}
				</Grid>
			</Card>
		</Container>
	)
}

export default PlayerInformation
