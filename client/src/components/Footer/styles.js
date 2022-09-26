import { themeColors } from '../../utils'

export const container = {
	height: '8rem',
	display: 'grid',
}

export const footerText = {
	textAlign: 'center',
}

export const iconsContainer = {
	display: 'flex',
	justifyContent: 'center',
	gap: '3rem',
}

export const icons = {
	cursor: 'pointer',
	transition: 'all 0.3s ease-in-out',
	':hover': {
		color: themeColors.offBlack,
	},
	display: 'grid',
	justifyContent: 'center',
	alignItems: 'center',
}

export const iconsTypography = {}
