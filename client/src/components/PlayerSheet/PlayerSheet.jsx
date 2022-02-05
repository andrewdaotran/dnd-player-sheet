import HitPointsContainer from './HitPointsContainer/HitPointsContainer'
import PlayerInformationContainer from './PlayerInformationContainer/PlayerInformationContainer'
import Stats from './Stats/Stats'
import Skills from './Skills/Skills'
import AttacksAndSpellcastingAccordion from './AttacksAndSpellcastingAccordion/AttacksAndSpellcastingAccordion'
import Inventory from './Inventory/Inventory'
import CharacterPersonalityDetailsContainer from './CharacterPersonalityDetailsContainer/CharacterPersonalityDetailsContainer'

const PlayerSheet = () => {
	return (
		<>
			<HitPointsContainer />
			<PlayerInformationContainer />
			<Stats />
			<Skills />
			<AttacksAndSpellcastingAccordion />
			<Inventory />
			<CharacterPersonalityDetailsContainer />
		</>
	)
}

export default PlayerSheet
