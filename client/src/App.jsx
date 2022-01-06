import { CssBaseline } from '@mui/material'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import PlayerInformation from './components/PlayerSheet/PlayerInformation/PlayerInformation'
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
				<PlayerInformation />
				<PlayerSheet />
			</div>
		</>
	)
}

export default App
