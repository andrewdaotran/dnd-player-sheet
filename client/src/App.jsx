import { CssBaseline } from '@mui/material'
import CharacterPersonalityDetailsContainer from './components/CharacterPersonalityDetailsContainer/CharacterPersonalityDetailsContainer'

import HitPointsContainer from './components/HitPointsContainer/HitPointsContainer'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'

import PlayerInformationContainer from './components/PlayerSheet/PlayerInformationContainer/PlayerInformationContainer'
import PlayerSheet from './components/PlayerSheet/PlayerSheet'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	// useEffect and dispatch from backend and fill all values with that information into redux
	return (
		<>
			<CssBaseline />
			<div className='App'>
				<Navbar />
				<Sidebar />
				<Modal />
				<HitPointsContainer />
				<PlayerInformationContainer />
				<PlayerSheet />
				<CharacterPersonalityDetailsContainer />
			</div>
		</>
	)
}

export default App
