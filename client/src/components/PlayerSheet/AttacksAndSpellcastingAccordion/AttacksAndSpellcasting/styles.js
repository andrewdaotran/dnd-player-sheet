import { red } from '@mui/material/colors'
import { themeColors } from '../../../../utils'

export const paper = {
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
}

export const container = {
	marginTop: '1rem',
}

export const titleContainer = {
	margin: '0 auto 1rem auto',
}

export const sectionTitles = {
	textAlign: 'center',
}

export const addButton = {
	margin: '1rem 0 0 1rem',
}

export const editButton = {}

export const iconGrid = {
	display: 'grid',
	alignItems: 'center',
}

export const listContainer = {
	// marginBottom: '1rem',
	margin: '0 auto 1rem auto',
	// border: `1px solid ${themeColors.royalRed}`,
}

export const buttonsContainer = {
	// marginBottom: '1rem',
	margin: '0 auto 1rem auto',
}

export const submitButton = {
	margin: '1rem 0 0 1rem',
	backgroundColor: themeColors.dirtyOrange,
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}

export const submitButtonXS = {
	margin: '1rem 0 0 .5rem',
}

export const cancelButton = {
	margin: '1rem 0 0 1rem',
	backgroundColor: themeColors.royalRed,
	':hover': {
		backgroundColor: themeColors.lighterRoyalRed,
	},
}
