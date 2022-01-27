import { useDispatch, useSelector } from 'react-redux'

import { Button, Box } from '@mui/material'

import { buttonContainer, cancelButton } from './styles'

import { toggleInputs } from '../../features/disable-inputs/disableInputsSlice'

const EditButton = () => {
	const dispatch = useDispatch()
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
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
						<Button
							onClick={() => dispatch(toggleInputs())}
							variant='outlined'
							sx={cancelButton}
						>
							Cancel Edit
						</Button>
						<Button
							onClick={() => dispatch(toggleInputs())}
							variant='contained'
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
