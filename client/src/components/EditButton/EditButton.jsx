import { useDispatch, useSelector } from 'react-redux'

import { Button, Box } from '@mui/material'

import {
	buttonContainer,
	cancelButton,
	editCharacterButton,
	saveCharacterButton,
} from './styles'

import { toggleInputs } from '../../features/disable-inputs/disableInputsSlice'
import {
	getSingleCharacterSheet,
	updateCharacterSheet,
} from '../../features/character-sheet/thunks'
import { close } from '../../features/sidebar-open/sidebarOpenSlice'
import { updateCharacterNameInCharacterSheets } from '../../features/user/userSlice'

const EditButton = () => {
	const dispatch = useDispatch()
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const characterSheet = useSelector((state) => state.characterSheet)
	const id = useSelector((state) => state.characterSheet.id)

	const handleEditCharacter = () => {
		dispatch(toggleInputs())
		dispatch(close())
	}

	const handleUpdate = () => {
		dispatch(toggleInputs())
		dispatch(updateCharacterSheet({ id, characterSheet }))
		dispatch(
			updateCharacterNameInCharacterSheets({
				characterSheetId: id,
				characterName: characterSheet.characterName.value,
			})
		)
		dispatch(close())
	}

	const cancelUpdate = () => {
		dispatch(toggleInputs())
		dispatch(getSingleCharacterSheet({ id }))
		dispatch(close())
	}
	return (
		<>
			<Box sx={buttonContainer}>
				{areInputsDisabled ? (
					<>
						<Button
							onClick={handleEditCharacter}
							variant='contained'
							sx={editCharacterButton}
						>
							Edit Character
						</Button>
					</>
				) : (
					<>
						<Button onClick={cancelUpdate} variant='outlined' sx={cancelButton}>
							Cancel Edit
						</Button>
						<Button
							onClick={handleUpdate}
							variant='contained'
							sx={saveCharacterButton}
						>
							Save Edits
						</Button>
					</>
				)}
			</Box>
		</>
	)
}

export default EditButton
