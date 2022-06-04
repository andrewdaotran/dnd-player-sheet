import { themeColors } from '../../utils'

export const buttonContainer = {
	marginTop: '1rem',
	textAlign: 'center',
}

export const cancelButton = {
	marginRight: '1rem',
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
		border: '1px solid black',
	},
	color: 'white',
}

export const editCharacterButton = {
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}

export const saveCharacterButton = {
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}
