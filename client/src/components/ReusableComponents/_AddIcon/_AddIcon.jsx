import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { addButton } from './styles'

const _AddIcon = ({ handleIsAdding, sx }) => {
	return (
		<IconButton sx={sx || addButton} onClick={handleIsAdding}>
			<AddIcon />
		</IconButton>
	)
}

export default _AddIcon
