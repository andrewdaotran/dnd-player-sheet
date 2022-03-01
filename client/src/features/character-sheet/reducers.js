import { v4 as uuidv4 } from 'uuid'

import { statModifiers, limiter } from './utils'

const reducers = {
	updateAbilityScores: (state, action) => {
		state.abilityScores[action.payload.name].value = limiter(
			parseInt(action.payload.input)
		)
		state.abilityScores[action.payload.name].modifier =
			statModifiers[limiter(parseInt(action.payload.input))]
	},
	// dispatch with {name, attack, damageType}
	createNewAandS: (state, action) => {
		state.attacksAndSpellcasting.push({ id: uuidv4(), ...action.payload })
	},
	// dispatch with {index, name, input}
	editAandS: (state, action) => {
		state.attacksAndSpellcasting[action.payload.index][action.payload.name] =
			action.payload.input
	},
	// dispatch with index
	removeAandS: (state, action) => {
		state.attacksAndSpellcasting.splice(action.payload, 1)
	},
	// dispatch with {name, main: boolean, text}
	createCharacterDetail: (state, action) => {
		if (action.payload.main) {
			state.characterDetails[action.payload.name].value.push({
				id: uuidv4(),
				isEditing: false,
				text: action.payload.text,
			})
		} else {
			state.characterDetails.proficienciesAndLanguages.value[
				action.payload.name
			].value.push({
				id: uuidv4(),
				isEditing: false,
				text: action.payload.text,
			})
		}
	},
	updateCharacterDetail: (state, action) => {
		// dispatch with {name, index, main: boolean, text}
		if (action.payload.main) {
			state.characterDetails[action.payload.name].value[
				action.payload.index
			].text = action.payload.text
		} else {
			state.characterDetails.proficienciesAndLanguages.value[
				action.payload.name
			].value[action.payload.index].text = action.payload.text
		}
	},
	// dispatch with {name, index, main: boolean}
	updateIsEditingCharacterDetail: (state, action) => {
		if (action.payload.main) {
			// map through to change isEditing to false except the one stated
			state.characterDetails[action.payload.name].value.forEach(
				(item, index) => {
					if (action.payload.index === index) return

					item.isEditing = false
				}
			)

			state.characterDetails[action.payload.name].value[
				action.payload.index
			].isEditing =
				!state.characterDetails[action.payload.name].value[action.payload.index]
					.isEditing
		} else {
			state.characterDetails.proficienciesAndLanguages.value[
				action.payload.name
			].value.forEach((item, index) => {
				if (action.payload.index === index) return

				item.isEditing = false
			})
			state.characterDetails.proficienciesAndLanguages.value[
				action.payload.name
			].value[action.payload.index].isEditing =
				!state.characterDetails.proficienciesAndLanguages.value[
					action.payload.name
				].value[action.payload.index].isEditing
		}
	},
	// dispatch with {name, index, main: boolean}
	deleteCharacterDetail: (state, action) => {
		if (action.payload.main) {
			state.characterDetails[action.payload.name].value.splice(
				action.payload.index,
				1
			)
		} else {
			state.characterDetails.proficienciesAndLanguages.value[
				action.payload.name
			].value.splice(action.payload.index, 1)
		}
	},
	updateCharacterInformation: (state, action) => {
		state.characterInformation[action.payload.name].value = action.payload.input
	},
	updateCharacterName: (state, action) => {
		state.characterName.value = action.payload.input
	},
	updateHitPoints: (state, action) => {
		state.hitPoints[action.payload.name].value.value = parseInt(
			action.payload.input
		)
	},
	// dispatch with name
	createInventoryCategory: (state, action) => {
		const name = action.payload.name.toLowerCase()
		const title = action.payload.name
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
			.join(' ')

		if (state.inventory[name] || !name) return

		state.inventory[name] = {
			name,
			title,
			value: [],
			custom: true,
			isEditing: false,
		}
	},
	// dispatch with {newName, name}
	updateInventoryCategory: (state, action) => {
		const newName = action.payload.newName.toLowerCase()
		const title = action.payload.newName
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
			.join(' ')
		state.inventory[action.payload.newName] = {
			...state.inventory[action.payload.name],
			name: newName,
			title,
		}

		delete state.inventory[action.payload.name]
	},
	// dispatch with {name,}
	updateInventoryCategoryIsEditing: (state, action) => {
		Object.keys(state.inventory).forEach((item) => {
			if (action.payload.name === item) return

			state.inventory[item].isEditing = false
		})

		state.inventory[action.payload.name].isEditing =
			!state.inventory[action.payload.name].isEditing
	},
	// dispatch with {name}
	deleteInventoryCategory: (state, action) => {
		delete state.inventory[action.payload.name]
	},
	//dispatch with {name, text}
	createInventoryItem: (state, action) => {
		if (!action.payload.text) return
		state.inventory[action.payload.name].value.push({
			id: uuidv4(),
			text: action.payload.text,
			isEditing: false,
		})
	},
	// dispatch with {name, index, text}
	updateInventoryItem: (state, action) => {
		state.inventory[action.payload.name].value[action.payload.index].text =
			action.payload.text
	},
	// dispatch with {name, index}
	deleteInventoryItem: (state, action) => {
		state.inventory[action.payload.name].value.splice(action.payload.index, 1)
	},
	// dispatch with {name, index}
	updateIsEditingInventoryItem: (state, action) => {
		state.inventory[action.payload.name].value.forEach((item, index) => {
			if (index === action.payload.index) return
			item.isEditing = false
		})
		state.inventory[action.payload.name].value[action.payload.index].isEditing =
			!state.inventory[action.payload.name].value[action.payload.index]
				.isEditing
	},
	// dispatch with {name, input}
	updatePlayerInformation: (state, action) => {
		state.playerInformation[action.payload.name].value = action.payload.input
	},
	updateCheck: (state, action) => {
		// dispatch name

		if (state.skills.skills[action.payload].checked === false) {
			state.skills.fourMaxChecked += 1
		} else {
			state.skills.fourMaxChecked -= 1
		}
		state.skills.skills[action.payload].checked =
			!state.skills.skills[action.payload].checked
	},

	// dispatch {name, desc}
	injectDescription: (state, action) => {
		state.skills.skills[action.payload.name].description = action.payload.desc
	},
}

export default reducers
