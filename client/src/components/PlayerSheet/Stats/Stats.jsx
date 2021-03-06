import { useSelector } from 'react-redux'
import { Grid, Container } from '@mui/material'

import Stat from './Stat/Stat'
import { gridItem } from './styles'
import { useEffect } from 'react'

const Stats = ({ create }) => {
	const abilityScores = useSelector(
		(state) => state.characterSheet.abilityScores
	)
	// console.log('andrew', abilityScores)

	// useEffect(() => {
	// 	console.log(abilityScores)
	// }, [abilityScores])

	return (
		<Container>
			<Grid container spacing={5}>
				{Object.keys(abilityScores).map((score) => {
					return (
						<Grid item xs={4} md={2} key={score} sx={gridItem}>
							<Stat {...abilityScores[score]} create={create} />
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

export default Stats
