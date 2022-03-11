import { useState } from 'react'

import {
	Typography,
	AppBar,
	Toolbar,
	IconButton,
	Button,
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

import { characterName, container, playerName, toolbarButton } from './styles'
import { open, close } from '../../features/sidebar-open/sidebarOpenSlice'
import {
	userLogout,
	getUserFromLocalStorage,
} from '../../features/user/userSlice'
import { useEffect } from 'react'

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
		if (profile) dispatch(getUserFromLocalStorage())

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

	return (
		<AppBar position='static'>
			<Toolbar sx={container}>
				{profile ? (
					<IconButton aria-label='menu' onClick={() => dispatch(open())}>
						<MenuIcon />
					</IconButton>
				) : null}

				<Typography sx={playerName}>
					{/* {playerName} */}
					{user.username || user.email}
				</Typography>
				{areInputsDisabled ? (
					<Typography sx={characterName}>
						{characterSheet.characterName.value}
					</Typography>
				) : (
					<TextField
						sx={characterName}
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
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleLogout}>Logout</MenuItem>
						</Menu>
					</>
				) : null}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
