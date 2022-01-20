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

import { gridContainer } from './styles'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import _BackAndNextButtons from '../../ReusableComponents/_BackAndNextButtons/_BackAndNextButtons'

const CLASS_LABEL = 'Class'

const CreateCharacter = () => {
	const dispatch = useDispatch()

	const characterSheet = useSelector((state) => state.characterSheet)

	const [playerInformation, setPlayerInformation] = useState({
		class: characterSheet.class,
		race: characterSheet.race,
		background: characterSheet.background,
		alignment: characterSheet.alignment,
		level: characterSheet.level,
		experiencePoints: characterSheet.experiencePoints,
	})

	const updatePlayerInformation = (e) => {
		setPlayerInformation({
			...playerInformation,
			[e.target.name]: {
				...playerInformation[e.target.name],
				value: e.target.value,
			},
		})
	}

	const [characterInformationMapped, setCharacterInformationMapped] = useState({
		armorClass: characterSheet.armorClass,
		initiative: characterSheet.initiative,
		speed: characterSheet.speed,
	})

	const [characterInformationNonMapped, setCharacterInformationNonMapped] =
		useState({
			hitDiceTotal: characterSheet.hitDiceTotal,
			hitDiceType: characterSheet.hitDiceType,
			deathSaveSuccess: characterSheet.deathSaveSuccess,
			deathSaveFail: characterSheet.deathSaveFail,
		})

	const updateCharacterInformationMapped = (name, input) => {
		setCharacterInformationMapped({
			...characterInformationMapped,
			[name]: {
				...characterInformationMapped[name],
				value: input,
			},
		})
	}

	const updateCharacterInformationNonMapped = (name, input) => {
		setCharacterInformationNonMapped({
			...characterInformationNonMapped,
			[name]: {
				...characterInformationNonMapped[name],
				value: input,
			},
		})
	}

	// console.log(characterSheet)

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
									<PlayerInformation
										character={playerInformation}
										changeValues={updatePlayerInformation}
										create={true}
									/>
									<_BackAndNextButtons
										next={'create/character-information'}
										//change back button to modal
										back={'create/player-information'}
										submitData={() => dispatch(addData(playerInformation))}
									/>
								</>
							}
						/>
						<Route
							path='character-information'
							element={
								<>
									<CharacterInformation
										character={characterInformationMapped}
										character2={characterInformationNonMapped}
										changeValuesMapped={updateCharacterInformationMapped}
										changeValuesNonMapped={updateCharacterInformationNonMapped}
										create={true}
									/>
									<_BackAndNextButtons
										next={'create/character-information'}
										back={'create/player-information'}
										submitData={() => {
											dispatch(
												addData({
													...characterInformationMapped,
													...characterInformationNonMapped,
												})
											)
										}}
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
