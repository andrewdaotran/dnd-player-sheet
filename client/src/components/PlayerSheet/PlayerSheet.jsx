import { useState } from 'react'

import Stats from './Stats/Stats'
import HitPointsContainer from './HitPointsContainer/HitPointsContainer'
import PlayerInformationContainer from './PlayerInformationContainer/PlayerInformationContainer'
import AttacksAndSpellcasting from './AttacksAndSpellcasting/AttacksAndSpellcasting'

import CharacterPersonalityDetailsContainer from './CharacterPersonalityDetailsContainer/CharacterPersonalityDetailsContainer'
import Skills from './Skills/Skills'
// import Inventory from './Inventory/Inventory'

const PlayerSheet = () => {
	const [player, setPlayer] = useState()
	return (
		<>
			<HitPointsContainer />
			<PlayerInformationContainer />
			<Stats />
			<Skills />
			<AttacksAndSpellcasting />
			{/* <Inventory /> */}
			<CharacterPersonalityDetailsContainer />
		</>
	)
}

export default PlayerSheet
