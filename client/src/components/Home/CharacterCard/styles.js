import { themeColors } from '../../../utils'

export const card = {
	// border: '1px solid black',
	width: '15rem',
}

export const cardTitle = {
	textAlign: 'center',
	marginBottom: '0.5rem',
	cursor: 'pointer',
	fontWeight: 'bold',
	transition: 'all 0.3s ease-in-out',
	':hover': {
		color: themeColors.greyWhite,
	},
}

export const divider = {
	marginBottom: '0.5rem',
}

export const deleteButtonContainer = {
	marginBottom: '0',
}

export const deleteButton = {
	// justifySelf: 'center',
	margin: '1rem auto 0 auto',
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
}
