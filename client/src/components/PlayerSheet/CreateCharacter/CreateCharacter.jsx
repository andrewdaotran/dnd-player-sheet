import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid } from '@mui/material'

import _TitleTypography from '../../ReusableComponents/_TitleTypography/_TitleTypography'
import PlayerInformation from '../PlayerInformationContainer/PlayerInformation/PlayerInformation'
import CharacterInformation from '../PlayerInformationContainer/CharacterInformation/CharacterInformation'
import Stats from '../Stats/Stats'

import { gridContainer } from './styles'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import _BackAndNextButtons from '../../ReusableComponents/_BackAndNextButtons/_BackAndNextButtons'
import Skills from '../Skills/Skills'

import AttacksAndSpellcasting from '../AttacksAndSpellcastingAccordion/AttacksAndSpellcasting/AttacksAndSpellcasting'
import HitPointsContainer from '../HitPointsContainer/HitPointsContainer'

const CLASS_LABEL = 'Class'

const CreateCharacter = () => {
	// const dispatch = useDispatch()

	// refactor so the logic is done inside the components and changes to values will be dispatched directly to redux instead

	return (
		<Grid container sx={gridContainer}>
			<Grid item>
				<Container>
					<_TitleTypography title={'Create Your Character'} />
					<Routes>
						<Route
							path='player-information'
							element={
								<>
									<HitPointsContainer create={true} />
									<PlayerInformation create={true} />
									<_BackAndNextButtons
										back={'modal'}
										next={'create/character-information'}
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
										back={'create/player-information'}
										next={'create/ability-scores'}
										submitData={() => {}}
									/>
								</>
							}
						/>
						<Route
							path='ability-scores'
							element={
								<>
									<Stats create={true} />
									<_BackAndNextButtons
										back={'create/character-information'}
										next={'create/skills'}
										submitData={() => {}}
									/>
								</>
							}
						/>
						<Route
							path='skills'
							element={
								<>
									<Skills create={true} />
									<_BackAndNextButtons
										back={'create/ability-scores'}
										next={'create/attacks-and-spellcasting'}
										submitData={() => {}}
									/>
								</>
							}
						/>
						<Route
							path='attacks-and-spellcasting'
							element={
								<>
									<AttacksAndSpellcasting create={true} />
									{/* <AttacksAndSpellcasting /> */}
									<_BackAndNextButtons
										back={'create/skills'}
										next={'create/attacks-and-spellcasting'}
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
