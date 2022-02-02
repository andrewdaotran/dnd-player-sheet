import { createSlice } from '@reduxjs/toolkit'

const statModifiers = {
	1: '-5',
	2: '-4',
	3: '-4',
	4: '-3',
	5: '-3',
	6: '-2',
	7: '-2',
	8: '-1',
	9: '-1',
	10: '+0',
	11: '+0',
	12: '+1',
	13: '+1',
	14: '+2',
	15: '+2',
	16: '+3',
	17: '+3',
	18: '+4',
	19: '+4',
	20: '+5',
	21: '+5',
	22: '+6',
	23: '+6',
	24: '+7',
	25: '+7',
	26: '+8',
	27: '+8',
	28: '+9',
	29: '+9',
	30: '+10',
}

const initialState = {
	strength: {
		name: 'strength',
		title: 'Strength',
		value: '11',
		abbrev: 'STR',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/str',
	},
	dexterity: {
		name: 'dexterity',
		title: 'Dexterity',
		value: '12',
		abbrev: 'DEX',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/dex',
	},
	constitution: {
		name: 'constitution',
		title: 'Constitution',
		value: '13',
		abbrev: 'CON',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/con',
	},
	intelligence: {
		name: 'intelligence',
		title: 'Intelligence',
		value: '14',
		abbrev: 'INT',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/int',
	},
	wisdom: {
		name: 'wisdom',
		title: 'Wisdom',
		value: '15',
		abbrev: 'WIS',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/wis',
	},
	charisma: {
		name: 'charisma',
		title: 'Charisma',
		value: '16',
		abbrev: 'CHA',
		modifier: '3',
		url: 'https://www.dnd5eapi.co/api/ability-scores/cha',
	},
}

const limiter = (input) => {
	if (input < 0) {
		return 0
	} else if (input > 30) {
		return 30
	} else {
		return input
	}
}

const abilityScoresSlice = createSlice({
	name: 'Ability Scores',
	initialState,
	reducers: {
		// dispatch with {name, input}
		updateAbilityScores: (state, action) => {
			state[action.payload.name].value = limiter(parseInt(action.payload.input))
			state[action.payload.name].modifier =
				statModifiers[limiter(parseInt(action.payload.input))]
		},
	},
})

export const { updateAbilityScores } = abilityScoresSlice.actions

export default abilityScoresSlice.reducer
