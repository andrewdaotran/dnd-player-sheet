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
import {
	listItemButtonOdd,
	listItemIconOdd,
	listItemIconEven,
	listItemText,
	listItemButtonEven,
} from './styles'

const SidebarCharacters = ({ characterSheetId, characterName, index }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleCharacterNavigate = () => {
		navigate(`/characterSheets/${characterSheetId}`)
		dispatch(getSingleCharacterSheet({ id: characterSheetId, navigate }))
		dispatch(close())
	}

	return (
		<>
			<ListItemButton
				onClick={handleCharacterNavigate}
				sx={index % 2 ? listItemButtonOdd : listItemButtonEven}
			>
				<ListItemIcon sx={index % 2 ? listItemIconEven : listItemIconOdd}>
					<FaceIcon />
				</ListItemIcon>
				<ListItemText primary={characterName} sx={listItemText} />
			</ListItemButton>

			<Divider />
		</>
	)
}

export default SidebarCharacters
