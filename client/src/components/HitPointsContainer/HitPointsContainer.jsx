import { Container, Grid, Paper } from '@mui/material'
import HitPoints from './HitPoints/HitPoints'

import { container, paper, hitPointsContainer } from './styles'
import TemporaryHitPoints from './TemporaryHitPoints/TemporaryHitPoints'

const HitPointsContainer = () => {
	return (
		<Container sx={container}>
			<Paper sx={paper}>
				<Grid container sx={hitPointsContainer} spacing={2}>
					<HitPoints />
					<TemporaryHitPoints />
				</Grid>
			</Paper>
		</Container>
	)
}

export default HitPointsContainer
