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

import FaceIcon from '@mui/icons-material/Face'
import { getSingleCharacterSheet } from '../../../features/character-sheet/thunks'
import { close } from '../../../features/sidebar-open/sidebarOpenSlice'

const SidebarCharacters = ({ characterSheetId, characterName }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleCharacterNavigate = () => {
		navigate(`/characterSheets/${characterSheetId}`)
		dispatch(getSingleCharacterSheet({ id: characterSheetId, navigate }))
		dispatch(close())
	}

	return (
		<>
			<ListItemButton onClick={handleCharacterNavigate}>
				<ListItemIcon>
					<FaceIcon />
				</ListItemIcon>
				<ListItemText primary={characterName} />
			</ListItemButton>

			<Divider />
		</>
	)
}

export default SidebarCharacters
