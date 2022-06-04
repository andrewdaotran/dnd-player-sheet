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
import { getUserFromLocalStorage } from '../../features/user/userSlice'
import { clearCharacterSheet } from '../../features/character-sheet/characterSheetSlice'
import RollButton from '../RollButton/RollButton'

const PlayerSheet = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const navigate = useNavigate()
	const isLoading = useSelector((state) => state.isLoading.isLoading)

	useEffect(() => {
		const profile = JSON.parse(localStorage.getItem('profile'))

		if (profile) dispatch(getUserFromLocalStorage())

		// if (!profile) {
		// 	navigate('/auth')
		// 	dispatch(clearCharacterSheet())
		// 	return
		// }

		dispatch(getSingleCharacterSheet({ id, navigate }))
	}, [dispatch])

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
			{/* <RollButton /> */}
		</>
	)
}

export default PlayerSheet
