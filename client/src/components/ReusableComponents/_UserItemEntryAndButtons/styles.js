import { themeColors } from '../../../utils'

export const container = {
	border: `1px solid ${themeColors.dirtyOrange}`,
	margin: '0 1rem',
	borderRadius: '0.5rem',
	padding: '1rem',
	display: 'grid',
	gridTemplateColumns: '9fr 2fr',
	alignItems: 'center',
}

export const smallContainer = {
	gridTemplateColumns: 'none',
}

export const iconContainer = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
}

export const smallIconContainer = {
	gridTemplateColumns: '1fr 1fr 9fr',
	paddingTop: '0.5rem',
}

export const detailTypography = {
	// marginBottom: '1rem',
	fontWeight: 'bold',
}
