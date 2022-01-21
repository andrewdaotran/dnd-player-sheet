import { CssBaseline } from '@mui/material'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import CreateCharacter from './components/PlayerSheet/CreateCharacter/CreateCharacter'

import PlayerSheet from './components/PlayerSheet/PlayerSheet'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	// useEffect and dispatch from backend and fill all values with that information into redux

	return (
		<div className='App'>
			<Router>
				<CssBaseline />
				<Navbar />
				<Sidebar />
				<Routes>
					{/* Need to update to push to /character/:id when authorization is implemented */}
					<Route path='/' element={<PlayerSheet />} />
					<Route
						path='/modal'
						element={
							<>
								<Modal />
							</>
						}
					/>
					<Route path='/create/*' element={<CreateCharacter />} />
					{/* <Route path='/character' element={<PlayerSheet />} /> */}
				</Routes>
			</Router>
		</div>
	)
}

export default App
