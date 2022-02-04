import { configureStore } from '@reduxjs/toolkit'
import abilityScoresSlice from './character-sheet/abilityScoresSlice'
import attacksAndSpellcastingSlice from './character-sheet/attacksAndSpellcastingSlice'
import characterDetailsSlice from './character-sheet/characterDetailsSlice'
import characterInformationSlice from './character-sheet/characterInformationSlice'
import characterSheetSlice from './character-sheet/characterSheetSlice'
import hitPointsSlice from './character-sheet/hitPointsSlice'
import playerInformationSlice from './character-sheet/playerInformationSlice'
import skillsSlice from './character-sheet/skillsSlice'
import disableInputsSlice from './disable-inputs/disableInputsSlice'
import inventorySlice from './character-sheet/inventorySlice'
import sidebarOpenSlice from './sidebar-open/sidebarOpenSlice'

const store = configureStore({
	reducer: {
		characterSheet: characterSheetSlice,
		sidebar: sidebarOpenSlice,
		disableInputs: disableInputsSlice,
		skills: skillsSlice,
		inventory: inventorySlice,
		attacksAndSpellcasting: attacksAndSpellcastingSlice,
		hitPoints: hitPointsSlice,
		characterDetails: characterDetailsSlice,
		abilityScores: abilityScoresSlice,
		playerInformation: playerInformationSlice,
		characterInformation: characterInformationSlice,
		inventory: inventorySlice,
	},
})

export default store
