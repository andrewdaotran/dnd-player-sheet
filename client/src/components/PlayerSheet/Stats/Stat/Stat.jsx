import { useDispatch, useSelector } from 'react-redux'
import { TextField, Container, Paper } from '@mui/material'
import * as api from '../../../../api/dndApi'
import { textField, paperItem, paperContainer } from './styles'
import { updateAbilityScores } from '../../../../features/character-sheet/abilityScoresSlice'

const Stat = ({ url, name, title, value, modifier, create }) => {
	const dispatch = useDispatch()

	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleInputValue = (e) => {
		dispatch(
			updateAbilityScores({ name: e.target.name, input: e.target.value })
		)
	}

	return (
		<Paper elevation={3} sx={paperContainer}>
			{title}
			<Container>
				<TextField
					variant='outlined'
					name={name}
					value={value ? value : 0}
					onChange={handleInputValue}
					sx={textField}
					disabled={create ? false : areInputsDisabled}
					InputProps={{ inputProps: { style: { textAlign: 'center' } } }}
				/>
			</Container>
			<Container>
				<Paper sx={paperItem}>
					<TextField
						value={value ? modifier : '-'}
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
