import {
	Typography,
	AppBar,
	Grid,
	Toolbar,
	IconButton,
	Button,
	cardClasses,
	TextField,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateCharacterName } from '../../features/character-sheet/characterSheetSlice'

import { characterName, container, playerName, toolbarButton } from './styles'
import { open } from '../../features/sidebar-open/sidebarOpenSlice'
import {
	userLogout,
	getUserFromLocalStorage,
} from '../../features/user/userSlice'
import { useEffect } from 'react'

const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const characterSheet = useSelector((state) => state.characterSheet)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
	const drawerWidth = useSelector((state) => state.sidebar.drawerWidth)

	useEffect(() => {
		const profile = JSON.parse(localStorage.getItem('profile'))

		if (profile) dispatch(getUserFromLocalStorage())
	}, [])

	const handleNameChange = (e) => {
		dispatch(updateCharacterName({ input: e.target.value }))
	}

	const handleLogout = () => {
		dispatch(userLogout())
		navigate('/auth')
	}

	return (
		<AppBar position='static'>
			<Toolbar sx={container}>
				<IconButton aria-label='menu' onClick={() => dispatch(open())}>
					<MenuIcon />
				</IconButton>

				<Typography sx={playerName}>
					{/* {playerName} */}
					Player Name
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
					>
						{/* functionality */}
					</TextField>
				)}

				<Button sx={toolbarButton} variant='contained' onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
