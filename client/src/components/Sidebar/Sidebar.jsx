import { useSelector, useDispatch } from 'react-redux'
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

import { close } from '../../features/sidebar-open/sidebarOpenSlice'
import { sidebarIconContainer } from './styles'

const Sidebar = () => {
	const dispatch = useDispatch()
	const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen)
	const drawerWidth = useSelector((state) => state.sidebar.drawerWidth)
	console.log(drawerWidth)
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
				{/* Add .map of characters associated with each account */}
				<ListItemButton>
					<ListItemIcon>
						<CreateIcon />
					</ListItemIcon>
					<ListItemText primary='Create a Character' />
				</ListItemButton>
				<Divider />
			</List>
		</Drawer>
	)
}

export default Sidebar
