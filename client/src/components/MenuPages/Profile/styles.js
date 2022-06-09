import { themeColors } from '../../../utils'

export const paper = {
	padding: '1rem',
	maxWidth: '40rem',
	margin: '7rem auto 0 auto',
	position: 'relative',
}
export const container = {
	position: 'relative',
}

export const header = {
	// textAlign: 'center',
	marginBottom: '1rem',
}

export const typography = {
	margin: 'auto 0 auto 0',
}

export const editButton = {
	display: 'flex',
	justifyContent: 'flex-end',
}

export const emptyDiv = {
	marginBottom: '1rem',
}
export const buttonContainer = {
	margin: '1.5rem auto .5rem auto',
}

export const deleteButton = {
	// margin: '2rem 0 1rem 0',
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
	borderRadius: '0.4rem',
}
