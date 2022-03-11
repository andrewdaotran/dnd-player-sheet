import { CssBaseline } from '@mui/material'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import EditButton from './components/EditButton/EditButton'
import Profile from './components/MenuPages/Profile/Profile'

import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import CreateCharacter from './components/CreateCharacter/CreateCharacter'

import PlayerSheet from './components/PlayerSheet/PlayerSheet'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'

function App() {
	// useEffect and dispatch from backend and fill all values with that information into redux

	return (
		<div className='App'>
			<Router>
				<CssBaseline />
				<Navbar />
				<Sidebar />
				<Routes>
					<Route
						path='/home'
						element={
							<>
								<Modal />
								<Home />
							</>
						}
					/>
					<Route
						path='/auth'
						element={
							<>
								<Auth />
							</>
						}
					/>
					{/* Need to update to push to /character/:id when authorization is implemented */}
					{/* <Route path='/characterSheets' element={<PlayerSheet />} /> */}
					<Route
						path='/characterSheets/:id'
						element={
							<>
								<EditButton />
								<PlayerSheet />
							</>
						}
					/>

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

					<Route
						path='/profile'
						element={
							<>
								<Profile />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
