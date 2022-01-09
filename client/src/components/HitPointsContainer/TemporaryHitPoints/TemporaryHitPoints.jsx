import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { TextField, Grid, InputAdornment } from '@mui/material'

import {
	temporaryHitPoints,
	temporaryHitPointsContainer,
	temporaryHitPointsTextField,
} from './styles'

const TemporaryHitPoints = () => {
	return (
		<Grid item>
			<Grid container sx={temporaryHitPointsContainer}>
				<Grid item sx={temporaryHitPoints}>
					{/* figure out how to not leave text field blank and default to 0 without prepending the 0 at the beginning of the value when typing a new value in  */}
					<TextField
						sx={temporaryHitPointsTextField}
						label='Temporary HP'
						// value={currentTemporaryHitPoints}
						// onChange={handleCurrentTemporaryHitPoints}
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
