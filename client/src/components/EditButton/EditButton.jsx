import { useDispatch, useSelector } from 'react-redux'

import { Button, Box } from '@mui/material'

import { buttonContainer, cancelButton } from './styles'

import { toggleInputs } from '../../features/disable-inputs/disableInputsSlice'
import {
	getSingleCharacterSheet,
	updateCharacterSheet,
} from '../../features/character-sheet/thunks'

const EditButton = () => {
	const dispatch = useDispatch()
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const characterSheet = useSelector((state) => state.characterSheet)
	const id = useSelector((state) => state.characterSheet.id)

	const handleUpdate = () => {
		dispatch(toggleInputs())
		dispatch(updateCharacterSheet({ id, characterSheet }))
	}

	const cancelUpdate = () => {
		dispatch(toggleInputs())
		dispatch(getSingleCharacterSheet({ id }))
	}
	return (
		<>
			<Box sx={buttonContainer}>
				{areInputsDisabled ? (
					<>
						<Button
							onClick={() => dispatch(toggleInputs())}
							variant='contained'
						>
							Edit Character
						</Button>
					</>
				) : (
					<>
						<Button onClick={cancelUpdate} variant='outlined' sx={cancelButton}>
							Cancel Edit
						</Button>
						<Button onClick={handleUpdate} variant='contained'>
							Save Edits
						</Button>
					</>
				)}
			</Box>
		</>
	)
}

export default EditButton
