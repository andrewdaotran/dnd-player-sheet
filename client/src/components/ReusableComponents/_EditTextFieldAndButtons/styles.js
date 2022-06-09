import { themeColors } from '../../../utils'

export const container = {
	marginTop: '1rem',
}

export const submitButton = {
	margin: '1rem 0 0 0',
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}

export const cancelButton = {
	margin: '1rem 0 0 1rem',
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
}
