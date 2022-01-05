import { CssBaseline } from '@mui/material'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	return (
		<>
			<CssBaseline />
			<div className='App'>
				<Navbar />
				<Sidebar />
				<Modal />
			</div>
		</>
	)
}

export default App
