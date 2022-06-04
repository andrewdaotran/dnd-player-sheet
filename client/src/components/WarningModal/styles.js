import { themeColors } from '../../utils'

export const container = {
	position: 'fixed',
	top: 0,
	left: 0,
	// width: '100%',
	height: '100vh',
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	// justifyContent: 'center',
	// alignItems: 'center',
	zIndex: 1,
}

export const card = {
	// position: 'relative',
	padding: '32px',
	// width: '100%',
	maxWidth: '640px',
	margin: '15rem auto',
}

export const modalCardActions = {
	justifyContent: 'center',
}

export const modalGrid = {
	justifyContent: 'center',

	// marginTop: '7rem',
}

export const modalText = {
	textAlign: 'center',
}

export const cancelButton = {
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
}

export const confirmButton = {
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}
