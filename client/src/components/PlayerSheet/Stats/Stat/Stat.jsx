import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Container, Paper } from '@mui/material'
import * as api from '../../../../api/dndApi'
import { textField, paperItem, paperContainer } from './styles'
import { addData } from '../../../../features/character-sheet/characterSheetSlice'

const Stat = ({ url, name, title, value, modifier }) => {
	// const [abilityScore, setAbilityScore] = useState({})
	// const [playerScore, setPlayerScore] = useState(12)

	const dispatch = useDispatch()
	const characterSheet = useSelector((state) => state.characterSheet)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleInputValue = (e) => {
		dispatch(
			addData({
				...characterSheet,
				abilityScores: {
					...characterSheet.abilityScores,
					[e.target.name]: {
						...characterSheet.abilityScores[e.target.name],
						value: e.target.value,
					},
				},
			})
		)
	}

	return (
		<Paper elevation={3} sx={paperContainer}>
			{title}
			<Container>
				<TextField
					variant='outlined'
					name={name}
					value={value}
					onChange={handleInputValue}
					sx={textField}
					// disabled={areInputsDisabled}
					InputProps={{ inputProps: { style: { textAlign: 'center' } } }}
				/>
			</Container>
			<Container>
				<Paper sx={paperItem}>
					<TextField
						//value depends on value of ability score, never let player edit this number
						value={`+${modifier}`}
						disabled
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
