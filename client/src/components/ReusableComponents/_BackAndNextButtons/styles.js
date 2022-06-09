import { themeColors } from '../../../utils'

export const paper = {
	display: 'inline-block',
	justifyContent: 'center',
}

export const gridContainer = {
	justifyContent: 'center',
	marginTop: '1rem',
}

export const nextButton = {
	marginLeft: '1rem',
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}

export const backButton = {
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
}
