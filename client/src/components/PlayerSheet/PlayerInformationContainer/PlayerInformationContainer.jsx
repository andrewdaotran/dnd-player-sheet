import { Container, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PlayerInformation from './PlayerInformation/PlayerInformation'

import { gridItem } from './styles'
import CharacterInformation from './CharacterInformation/CharacterInformation'

const PlayerInformationContainer = () => {
	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Container>
			<Grid container spacing={mediumScreenAndDown ? 2 : 5}>
				<Grid
					item
					md={6}
					sx={(gridItem, mediumScreenAndDown ? { order: 2 } : null)}
				>
					<CharacterInformation />
				</Grid>
				<Grid item md={6}>
					<PlayerInformation />
				</Grid>
			</Grid>
		</Container>
	)
}

export default PlayerInformationContainer
