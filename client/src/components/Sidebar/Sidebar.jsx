import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	Drawer,
	IconButton,
	Divider,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	List,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import CreateIcon from '@mui/icons-material/Create'

import SidebarCharacters from './SidebarCharacters/SidebarCharacters'
import { close } from '../../features/sidebar-open/sidebarOpenSlice'
import { sidebarIconContainer } from './styles'

const Sidebar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const characterSheets = useSelector((state) => state.user.characterSheets)
	const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
	const drawerWidth = useSelector((state) => state.sidebar.drawerWidth)

	return (
		<Drawer
			variant='persistent'
			anchor='left'
			open={isSidebarOpen}
			sx={{ width: drawerWidth }}
			PaperProps={{ sx: { width: `${drawerWidth}px` } }}
		>
			<List>
				<ListItemButton
					sx={sidebarIconContainer}
					onClick={() => dispatch(close())}
				>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
				</ListItemButton>

				<Divider />

				<ListItemButton
					onClick={() => {
						navigate(`/create/character-name`)
						dispatch(close())
					}}
				>
					<ListItemIcon>
						<CreateIcon />
					</ListItemIcon>
					<ListItemText primary='Create a Character' />
				</ListItemButton>

				<Divider />

				{characterSheets.map((character) => {
					return (
						<SidebarCharacters
							key={character.characterSheetId}
							{...character}
						/>
					)
				})}
			</List>
		</Drawer>
	)
}

export default Sidebar
