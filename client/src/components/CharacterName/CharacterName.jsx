import { useDispatch, useSelector } from 'react-redux'

import { Container, Paper, TextField } from '@mui/material'

import { container } from './styles'
import { updateCharacterName } from '../../features/character-sheet/characterSheetSlice'

const CharacterName = ({ create }) => {
	const dispatch = useDispatch()
	const characterName = useSelector(
		(state) => state.characterSheet.characterName
	)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleCharacterName = (e) => {
		dispatch(updateCharacterName({ input: e.target.value }))
	}
	return (
		<Paper sx={container}>
			<Container>
				<TextField
					fullWidth
					disabled={create ? false : areInputsDisabled}
					label={characterName.title}
					onChange={handleCharacterName}
					name={characterName.name}
					value={characterName.value}
				/>
			</Container>
		</Paper>
	)
}

export default CharacterName
