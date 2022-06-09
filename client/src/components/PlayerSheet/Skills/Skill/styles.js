import { themeColors } from '../../../../utils'

export const skillContainer = {
	alignItems: 'center',
}

export const skillModifier = {
	color: themeColors.lighterRoyalRed,
	textAlign: 'center',
}

export const proficientSkillModifier = {
	color: themeColors.lighterDirtyOrange,
	fontWeight: 'bold',
}

export const expertSkillModifier = {
	color: themeColors.offBlack,
	fontWeight: 'bold',
}

export const checkBoxes = {
	color: themeColors.lighterRoyalRed,
	'&.Mui-checked': {
		color: themeColors.lighterDirtyOrange,
	},
}

export const checkBoxExpertise = {
	'&.Mui-checked': {
		color: themeColors.offBlack,
	},
}
