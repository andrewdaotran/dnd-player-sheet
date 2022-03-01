import { useSelector, useDispatch } from 'react-redux'

import { TextField, Grid, InputAdornment } from '@mui/material'

import { playerHitPoints, playerHitPointsContainer } from './styles'

import { updateHitPoints } from '../../../../features/character-sheet/characterSheetSlice'

const HitPoints = ({ create }) => {
	const dispatch = useDispatch()

	const hitPoints = useSelector(
		(state) => state.characterSheet.hitPoints.hitPoints
	)
	const totalHitPoints = useSelector(
		(state) => state.characterSheet.hitPoints.totalHitPoints
	)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleInput = (e) => {
		dispatch(updateHitPoints({ name: e.target.name, input: e.target.value }))
	}

	return (
		<Grid item>
			<Grid container sx={playerHitPointsContainer}>
				<Grid item sx={playerHitPoints}>
					<TextField
						label={hitPoints.title}
						name={hitPoints.name}
						value={
							!hitPoints.value.value
								? hitPoints.value.default
								: hitPoints.value.value
						}
						onChange={handleInput}
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
										disabled={create ? false : areInputsDisabled}
										name={totalHitPoints.name}
										InputProps={{
											disableUnderline: true,
											inputProps: {
												style: {
													textAlign: 'center',
													width: '4ch',
												},
											},
										}}
										value={
											!totalHitPoints.value.value
												? totalHitPoints.value.default
												: totalHitPoints.value.value
										}
										onChange={handleInput}
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
