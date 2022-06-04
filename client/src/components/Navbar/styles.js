import { themeColors } from '../../utils'

export const container = {
	margin: '0 1rem',
}

export const playerName = {
	marginLeft: '1rem',
	cursor: 'pointer',
	fontWeight: 'bold',
	transition: 'all 0.3s ease-in-out',
	':hover': {
		color: themeColors.offBlack,
	},
	width: 'fit-content',
	fontSize: '2rem',
}

export const characterName = {
	marginRight: '1rem',
	color: 'white',
	fontWeight: 'bold',
}

export const characterNameTextField = {
	backgroundColor: themeColors.greyWhite,
}

export const toolbarButton = {
	color: 'white',
	transition: 'all 0.3s ease-in-out',
	':hover': {
		color: themeColors.offBlack,
	},
}
