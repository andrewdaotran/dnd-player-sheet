import {
	Typography,
	AppBar,
	Grid,
	Toolbar,
	IconButton,
	Button,
	cardClasses,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector, useDispatch } from 'react-redux'

import { characterName, container, playerName, toolbarButton } from './styles'
import { open } from '../../features/sidebar-open/sidebarOpenSlice'

const Navbar = () => {
	const dispatch = useDispatch()
	const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
	const drawerWidth = useSelector((state) => state.sidebar.drawerWidth)

	return (
		<AppBar position='static'>
			<Toolbar sx={container}>
				<IconButton aria-label='menu' onClick={() => dispatch(open())}>
					<MenuIcon />
				</IconButton>

				<Typography sx={playerName}>
					{/* {characterName */}
					Player Name
				</Typography>
				<Typography sx={characterName}>
					{/* {playerName} */}
					Character Name
				</Typography>
				<Button sx={toolbarButton} variant='contained'>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
