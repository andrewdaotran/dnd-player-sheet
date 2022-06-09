import { themeColors } from '../../utils'

export const container = {}

export const card = {
	padding: '32px',
	maxWidth: '640px',
	margin: '15rem auto',
}

export const modalCardActions = {
	justifyContent: 'center',
}

export const modalGrid = {
	justifyContent: 'center',
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
