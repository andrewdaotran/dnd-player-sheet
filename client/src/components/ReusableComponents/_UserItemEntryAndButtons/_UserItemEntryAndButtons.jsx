import { Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import _EditTextField from '../_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import { detailTypography } from './styles'

import _AddIcon from '../_AddIcon/_AddIcon'
import _EditIcon from '../_EditIcon/_EditIcon'
import _CancelIcon from '../_CancelIcon/_CancelIcon'
const _UserItemEntryAndButtons = ({ text, handleIsEditing, handleDelete }) => {
	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<>
			<Grid item xs={smallScreenAndDown ? 10.5 : 11}>
				<Typography variant='body2' sx={detailTypography}>
					{text}
				</Typography>
			</Grid>
			<Grid item xs={smallScreenAndDown ? 0.75 : 0.5}>
				<_EditIcon handleIsEditing={handleIsEditing} />
			</Grid>

			<Grid item xs={smallScreenAndDown ? 0.75 : 0.5}>
				<_CancelIcon handleDelete={handleDelete} />
			</Grid>
		</>
	)
}

export default _UserItemEntryAndButtons
