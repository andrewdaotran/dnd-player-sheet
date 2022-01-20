import { Container, Grid, Paper } from '@mui/material'

import HitPoints from './HitPoints/HitPoints'
import TemporaryHitPoints from './TemporaryHitPoints/TemporaryHitPoints'
import { container, paper, hitPointsContainer } from './styles'

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
