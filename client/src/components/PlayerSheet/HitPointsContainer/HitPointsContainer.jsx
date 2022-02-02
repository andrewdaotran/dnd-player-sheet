import { Container, Grid, Paper } from '@mui/material'

import HitPoints from './HitPoints/HitPoints'
import TemporaryHitPoints from './TemporaryHitPoints/TemporaryHitPoints'
import { container, paper, paperCreate, hitPointsContainer } from './styles'

const HitPointsContainer = ({ create }) => {
	return (
		<Container sx={container}>
			<Paper sx={create ? paperCreate : paper}>
				<Grid container sx={hitPointsContainer} spacing={2}>
					<HitPoints create={create} />
					{create ? null : <TemporaryHitPoints />}
				</Grid>
			</Paper>
		</Container>
	)
}

export default HitPointsContainer
