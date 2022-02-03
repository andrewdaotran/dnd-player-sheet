import { IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

const _CancelIcon = ({ handleDelete }) => {
	return (
		<IconButton onClick={handleDelete}>
			<CancelIcon />
		</IconButton>
	)
}

export default _CancelIcon
