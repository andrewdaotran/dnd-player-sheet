import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material'

import {
	temp,
	addData,
} from '../../../features/character-sheet/characterSheetSlice'

import _TitleTypography from '../../ReusableComponents/_TitleTypography/_TitleTypography'
import PlayerInformation from '../PlayerInformationContainer/PlayerInformation/PlayerInformation'
import CharacterInformation from '../PlayerInformationContainer/CharacterInformation/CharacterInformation'
import Stats from '../Stats/Stats'

import { gridContainer } from './styles'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import _BackAndNextButtons from '../../ReusableComponents/_BackAndNextButtons/_BackAndNextButtons'

const CLASS_LABEL = 'Class'

const CreateCharacter = () => {
	const dispatch = useDispatch()

	const characterSheet = useSelector((state) => state.characterSheet)

	// refactor so the logic is done inside the components and changes to values will be dispatched directly to redux instead

	console.log(characterSheet)

	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Container>
					<_TitleTypography title={'Create Your Character'} />
					<Routes>
						<Route
							path='/player-information'
							element={
								<>
									<PlayerInformation create={true} />
									<_BackAndNextButtons
										next={'create/character-information'}
										//change back button to modal
										back={'create/player-information'}
										submitData={() => {}}
									/>
								</>
							}
						/>
						<Route
							path='character-information'
							element={
								<>
									<CharacterInformation create={true} />
									<_BackAndNextButtons
										next={'create/ability-scores'}
										back={'create/player-information'}
										submitData={() => {}}
									/>
								</>
							}
						/>
						<Route
							path='ability-scores'
							element={
								<>
									<Stats />
									<_BackAndNextButtons
										next={'create/ability-scores'}
										back={'create/character-information'}
										submitData={() => {}}
									/>
								</>
							}
						/>
					</Routes>
				</Container>
			</Grid>
		</Grid>
	)
}

export default CreateCharacter
