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
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { purple, lightGreen } from '@mui/material/colors'
import { themeColors } from './utils'
import './App.css'
import Footer from './components/Footer/Footer'
function App() {
	const theme = createTheme({
		palette: {
			background: {
				default: themeColors.greyWhite,
			},
			// primary:
			// secondary: {
			// 	main: '#a34c50',
			// 	light: '#e8443c',
			// 	dark: '#4a2932',
			// 	contrastText: '#000',
			// },
			// success: { main: lightGreen[200] },
		},
		typography: {
			fontFamily: 'Rajdhani, sans-serif',
		},
		components: {
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: themeColors.dirtyOrange,
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						backgroundColor: themeColors.dirtyOrange,
						border: `1px solid ${themeColors.offBlack}`,
						':hover': {
							backgroundColor: themeColors.lighterDirtyOrange,
						},
						danger: {
							backgroundColor: themeColors.royalRed,
							':hover': {
								backgroundColor: themeColors.lighterRoyalRed,
							},
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						border: `2px solid ${themeColors.offBlack}`,
						// backgroundColor: themeColors.greyWhite,
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						border: `2px solid ${themeColors.offBlack}`,
					},
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: {
						borderRadius: '4px',
					},
				},
			},
			MuiDrawer: {
				styleOverrides: {
					paper: {
						border: `2px solid ${themeColors.offBlack}`,
						backgroundColor: themeColors.greyWhite,
					},
				},
			},
		},
	})
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Router>
					<CssBaseline />
					<Navbar />
					<Sidebar />

					<Routes>
						<Route
							path='/'
							element={
								<>
									<Modal />
									<Home />
								</>
							}
						/>
						<Route
							path='/home'
							// path='/'
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
					{/* <Footer /> */}
				</Router>
			</div>
		</ThemeProvider>
	)
}

export default App
