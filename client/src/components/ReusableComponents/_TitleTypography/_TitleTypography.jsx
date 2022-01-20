import { Typography } from '@mui/material'

import { titleStyle } from './styles'

const _TitleTypography = ({ title }) => {
	return (
		<Typography variant='h3' sx={titleStyle}>
			{title}
		</Typography>
	)
}

export default _TitleTypography
