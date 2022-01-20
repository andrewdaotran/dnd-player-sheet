import { Grid, TextField, Button } from '@mui/material'

import { submitButton, cancelButton } from './styles'

const _EditTextField = ({
	handleIsEditing,
	cancelEditing,
	submitItem,
	textFieldValue,
}) => {
	return (
		<Grid item xs={12}>
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

export default _EditTextField
