import { useSelector } from 'react-redux'
import { Grid, Container } from '@mui/material'

import Stat from './Stat/Stat'
import { gridItem } from './styles'

const Stats = () => {
	const abilityScores = useSelector(
		(state) => state.characterSheet.abilityScores
	)
	console.log('stats', abilityScores)

	return (
		<Container>
			<Grid container spacing={5}>
				{Object.keys(abilityScores).map((score) => {
					return (
						<Grid item xs={4} md={2} key={score} sx={gridItem}>
							<Stat {...abilityScores[score]} />
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

export default Stats
