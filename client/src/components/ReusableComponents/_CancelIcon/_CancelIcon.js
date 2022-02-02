import { IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

const _CancelIcon = ({ handleCancel }) => {
	return (
		<IconButton onClick={handleCancel}>
			<CancelIcon />
		</IconButton>
	)
}

export default _CancelIcon
