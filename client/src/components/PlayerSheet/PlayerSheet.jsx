import { Container, Typography, Grid } from '@mui/material'

import Stats from './Stats/Stats'
import HitPointsContainer from './HitPointsContainer/HitPointsContainer'
import PlayerInformationContainer from './PlayerInformationContainer/PlayerInformationContainer'
import AttacksAndSpellcasting from './AttacksAndSpellcasting/AttacksAndSpellcasting'

import CharacterPersonalityDetailsContainer from './CharacterPersonalityDetailsContainer/CharacterPersonalityDetailsContainer'

const PlayerSheet = () => {
	return (
		<>
			<HitPointsContainer />
			<PlayerInformationContainer />
			<Stats />
			<AttacksAndSpellcasting />
			<CharacterPersonalityDetailsContainer />
		</>
	)
}

export default PlayerSheet
