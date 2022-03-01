import { useSelector, useDispatch } from 'react-redux'

import { TextField, Grid } from '@mui/material'

import {
	temporaryHitPointsContainer,
	temporaryHitPointsTextField,
} from './styles'

import { updateHitPoints } from '../../../../features/character-sheet/characterSheetSlice'

const TemporaryHitPoints = () => {
	const dispatch = useDispatch()
	const temporaryHitPoints = useSelector(
		(state) => state.characterSheet.hitPoints.temporaryHitPoints
	)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const handleInput = (e) => {
		dispatch(updateHitPoints({ name: e.target.name, input: e.target.value }))
	}

	return (
		<Grid item>
			<Grid container sx={temporaryHitPointsContainer}>
				<Grid item sx={temporaryHitPoints}>
					<TextField
						sx={temporaryHitPointsTextField}
						label={temporaryHitPoints.title}
						name={temporaryHitPoints.name}
						disabled={areInputsDisabled}
						value={
							!temporaryHitPoints.value.value
								? temporaryHitPoints.value.default
								: temporaryHitPoints.value.value
						}
						onChange={handleInput}
						InputProps={{
							inputProps: {
								style: { textAlign: 'center' },
							},
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default TemporaryHitPoints
