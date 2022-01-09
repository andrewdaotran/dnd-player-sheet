import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { TextField, Grid, InputAdornment } from '@mui/material'

import { playerHitPoints, playerHitPointsContainer } from './styles'

const HitPoints = () => {
	const [currentPlayerHitPoints, setCurrentPlayerHitpoints] = useState(100)
	const [totalPlayerHitPoints, setTotalPlayerHitPoints] = useState(100)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleCurrentPlayerHitPoints = (e) => {
		setCurrentPlayerHitpoints(parseInt(e.target.value))
	}

	const handleMaxHitPoints = (e) => {
		setTotalPlayerHitPoints(e.target.value)
	}

	useEffect(() => {
		if (!currentPlayerHitPoints) {
			setCurrentPlayerHitpoints(0)
		}
	}, [currentPlayerHitPoints, totalPlayerHitPoints])
	return (
		<Grid item>
			<Grid container sx={playerHitPointsContainer}>
				<Grid item sx={playerHitPoints}>
					{/* figure out how to not leave text field blank and default to 0 without prepending the 0 at the beginning of the value when typing a new value in  */}
					<TextField
						label='Hit Points'
						value={currentPlayerHitPoints}
						onChange={handleCurrentPlayerHitPoints}
						InputProps={{
							inputProps: {
								style: { textAlign: 'center', width: '4ch' },
							},
							endAdornment: (
								<InputAdornment position='end' sx={{ alignItems: 'center' }}>
									{`/`}
									{/* Text field for some reason is elevated, need to fix */}
									<TextField
										variant='standard'
										disabled={areInputsDisabled}
										InputProps={{
											disableUnderline: true,
											inputProps: {
												style: {
													textAlign: 'center',
													width: '4ch',
												},
											},
										}}
										value={totalPlayerHitPoints}
										onChange={handleMaxHitPoints}
									/>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default HitPoints
