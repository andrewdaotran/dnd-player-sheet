import { useState } from 'react'

import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	TextField,
	MenuItem,
	Menu,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
	clearCharacterSheet,
	updateCharacterName,
} from '../../features/character-sheet/characterSheetSlice'

import {
	characterName,
	container,
	playerName,
	toolbarButton,
	characterNameTextField,
} from './styles'
import { open, close } from '../../features/sidebar-open/sidebarOpenSlice'
import {
	userLogout,
	getUserFromLocalStorage,
} from '../../features/user/userSlice'
import { useEffect } from 'react'
import { getAllSheetsThunk } from '../../features/all-sheets/allSheetsSlice'

const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state) => state.user)
	const characterSheet = useSelector((state) => state.characterSheet)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
	const drawerWidth = useSelector((state) => state.sidebar.drawerWidth)

	const profile = JSON.parse(localStorage.getItem('profile'))

	useEffect(() => {
		if (profile) {
			dispatch(getUserFromLocalStorage())
			dispatch(getAllSheetsThunk())
		}

		if (!profile) {
			navigate('/auth')
			dispatch(clearCharacterSheet())
		}
	}, [])

	const handleNameChange = (e) => {
		dispatch(updateCharacterName({ input: e.target.value }))
	}

	const handleProfile = () => {
		navigate('/profile')
		setAnchorEl(null)
	}

	const handleLogout = () => {
		dispatch(userLogout())
		dispatch(clearCharacterSheet())
		dispatch(close())
		navigate('/auth')
		setAnchorEl(null)
	}

	const [anchorEl, setAnchorEl] = useState(null)
	const anchorOpen = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleNavigateHome = () => {
		navigate('/home')
	}

	return (
		<AppBar position='static'>
			<Toolbar sx={container}>
				{profile ? (
					<IconButton
						aria-label='menu'
						onClick={() => dispatch(open())}
						sx={toolbarButton}
					>
						<MenuIcon />
					</IconButton>
				) : null}

				<Typography sx={playerName} onClick={handleNavigateHome}>
					{/* {playerName} */}
					{user.username || user.email}
				</Typography>
				{/* Empty div to separate in middle of player and character name */}
				<div style={{ flexGrow: 1 }}></div>
				{areInputsDisabled ? (
					<Typography sx={characterName}>
						{characterSheet.characterName.value}
					</Typography>
				) : (
					<TextField
						sx={characterNameTextField}
						onChange={handleNameChange}
						value={characterSheet.characterName.value}
						size='small'
						placeholder='Character Name'
					>
						{/* functionality */}
					</TextField>
				)}

				{profile ? (
					<>
						<IconButton sx={toolbarButton} onClick={handleClick}>
							<SettingsIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={anchorOpen}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
						>
							<MenuItem onClick={handleProfile}>Profile</MenuItem>
							{/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>
					</>
				) : null}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
