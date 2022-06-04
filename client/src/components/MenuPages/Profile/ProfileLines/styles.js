import { themeColors } from '../../../../utils'

export const container = {
	margin: '0.5rem 0',
}

export const typography = {
	margin: 'auto 0 auto 0',
}
export const buttonBox = {
	display: 'flex',
	justifyContent: 'flex-end',
}

export const editButton = {
	backgroundColor: themeColors.dirtyOrange,
	color: 'white',
	':hover': {
		backgroundColor: themeColors.lighterDirtyOrange,
	},
}
