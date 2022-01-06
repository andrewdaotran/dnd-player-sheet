import {
	Container,
	Paper,
	TextField,
	Typography,
	Grid,
	Card,
} from '@mui/material'
import { useState } from 'react'

import { container, gridContainer, gridItem, card } from './styles'
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
	return (
		<Container sx={container}>
			<Card sx={card}>
				<Grid container spacing={2} sx={gridContainer}>
					{labels.map((label) => {
						return (
							<Grid item xs={6} sx={gridItem} key={label}>
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
