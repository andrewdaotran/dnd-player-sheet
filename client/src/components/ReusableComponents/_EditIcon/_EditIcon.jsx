import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const _EditIcon = ({ handleIsEditing }) => {
	return (
		<IconButton onClick={handleIsEditing}>
			<EditIcon />
		</IconButton>
	)
}

export default _EditIcon
