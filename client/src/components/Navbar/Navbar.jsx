import {
	Typography,
	AppBar,
	Grid,
	Toolbar,
	IconButton,
	Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { characterName, container, playerName, toolbarButon } from './styles'

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar sx={container}>
				<IconButton aria-label='menu'>
					<MenuIcon />
				</IconButton>
				<Typography sx={characterName}>
					{/* {characterName */}
					Character Name
				</Typography>
				<Typography sx={playerName}>
					{/* {playerName} */}
					Player Name
				</Typography>
				<Button sx={toolbarButon} variant='contained'>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
