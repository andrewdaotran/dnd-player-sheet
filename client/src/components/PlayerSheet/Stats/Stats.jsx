import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Container, TextField, Typography, Paper } from '@mui/material'

import { getAbilityScores } from '../../../features/character-sheet/characterSheetExtraReducers'
import Stat from './Stat/Stat'
import { gridItem } from './styles'

const Stats = () => {
	const dispatch = useDispatch()
	const abilityScores = useSelector(
		(state) => state.characterSheet.abilityScores
	)
	useEffect(() => {
		dispatch(getAbilityScores())
	}, [dispatch])

	return (
		<Container>
			<Grid container spacing={5}>
				{abilityScores.map((score) => {
					return (
						<Grid item xs={4} md={2} key={score.name} sx={gridItem}>
							<Stat {...score} />
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

export default Stats
