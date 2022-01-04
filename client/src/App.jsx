import { CssBaseline } from '@mui/material'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'

function App() {
	return (
		<>
			<CssBaseline />
			<div className='App'>
				<Navbar />
				<Modal />
			</div>
		</>
	)
}

export default App
