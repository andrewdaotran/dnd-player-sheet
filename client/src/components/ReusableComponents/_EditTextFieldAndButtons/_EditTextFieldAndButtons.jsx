import { Grid, TextField, Button } from '@mui/material'

import { submitButton, cancelButton, container } from './styles'

const _EditTextFieldAndButtons = ({
	handleIsEditing,
	cancelEditing,
	submitItem,
	textFieldValue,
}) => {
	return (
		<Grid item xs={12} sx={container}>
			<TextField
				fullWidth
				multiline={true}
				rows={3}
				value={textFieldValue}
				onChange={handleIsEditing}
			/>
			<Button
				variant='contained'
				onClick={submitItem}
				sx={submitButton}
				// type='submit'
			>
				Submit
			</Button>

			<Button variant='contained' onClick={cancelEditing} sx={cancelButton}>
				Cancel
			</Button>
		</Grid>
	)
}

export default _EditTextFieldAndButtons
