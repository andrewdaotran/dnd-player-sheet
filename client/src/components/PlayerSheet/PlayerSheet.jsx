import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import HitPointsContainer from './HitPointsContainer/HitPointsContainer'
import PlayerInformationContainer from './PlayerInformationContainer/PlayerInformationContainer'
import Stats from './Stats/Stats'
import Skills from './Skills/Skills'
import AttacksAndSpellcastingAccordion from './AttacksAndSpellcastingAccordion/AttacksAndSpellcastingAccordion'
import Inventory from './Inventory/Inventory'
import CharacterPersonalityDetailsContainer from './CharacterPersonalityDetailsContainer/CharacterPersonalityDetailsContainer'
import { getSingleCharacterSheet } from '../../features/character-sheet/thunks'
import Loading from '../Loading/Loading'

const PlayerSheet = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const navigate = useNavigate()
	const characterSheet = useSelector((state) => state.characterSheet)
	const isLoading = useSelector((state) => state.isLoading.isLoading)

	useEffect(() => {
		dispatch(getSingleCharacterSheet({ id, navigate }))
	}, [dispatch])

	// useEffect(() => {
	// 	console.log('character Sheet boi', characterSheet)
	// }, [characterSheet])

	useEffect(() => {
		console.log('whats up', isLoading)
	}, [isLoading])
	return isLoading ? (
		<Loading />
	) : (
		<>
			<HitPointsContainer />
			<PlayerInformationContainer />
			<Stats />
			<Skills />
			<AttacksAndSpellcastingAccordion />
			<Inventory />
			<CharacterPersonalityDetailsContainer />
		</>
	)
}

export default PlayerSheet
