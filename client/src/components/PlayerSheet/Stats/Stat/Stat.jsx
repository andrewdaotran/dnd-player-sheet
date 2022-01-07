import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Container, Paper } from '@mui/material'
import * as api from '../../../../api/dndApi'
import { textField, paperItem, paperContainer } from './styles'

const Stat = ({ url, name }) => {
	const [abilityScore, setAbilityScore] = useState({})
	const [playerScore, setPlayerScore] = useState(10)

	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	// function to get data for individual ability scores from dnd api
	const individualAbilityScore = async (url) => {
		try {
			const { data } = await api.getIndividualAbilityScores(url)
			setAbilityScore(data)
		} catch (error) {
			console.log(error)
		}
	}

	// getting data for individual ability scores from dnd api
	useEffect(() => {
		individualAbilityScore(url)
	}, [])

	return (
		<Paper elevation={3} sx={paperContainer}>
			{abilityScore.full_name}
			<Container>
				<TextField
					variant='outlined'
					// add type when editing
					// type='number'
					value={playerScore}
					sx={textField}
					disabled={areInputsDisabled}
					InputProps={{ inputProps: { style: { textAlign: 'center' } } }}
				/>
			</Container>
			<Container>
				<Paper sx={paperItem}>
					<TextField
						//value depends on value of ability score, never let player edit this number
						value={'+2'}
						disabled={areInputsDisabled}
						variant='standard'
						InputProps={{
							disableUnderline: true,
							inputProps: {
								style: {
									textAlign: 'center',
								},
							},
						}}
					/>
				</Paper>
			</Container>
		</Paper>
	)
}

export default Stat
