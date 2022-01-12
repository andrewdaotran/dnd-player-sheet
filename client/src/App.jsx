import { CssBaseline } from '@mui/material'

import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'

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

				<PlayerSheet />
			</div>
		</>
	)
}

export default App
