import { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	listContainer,
	editButton,
	sectionTitles,
	submitButtonXS,
	submitButton,
	cancelButton,
	addButton,
	paper,
} from './styles'

import {
	Container,
	Paper,
	Grid,
	useMediaQuery,
	IconButton,
	Typography,
	Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import CancelIcon from '@mui/icons-material/Cancel'
import AddIcon from '@mui/icons-material/Add'

import AttacksAndSpellcastingInputs from '../AttacksAndSpellcastingInputs/AttacksAndSpellcastingInputs'

import {
	createNewAandS,
	removeAandS,
} from '../../../../features/character-sheet/characterSheetSlice'
import { updateAttacksAndSpellcasting } from '../../../../features/character-sheet/thunks'

const AttacksAndSpellcasting = ({ create }) => {
	const dispatch = useDispatch()
	const id = useSelector((state) => state.characterSheet.id)
	const attacksAndSpellcasting = useSelector(
		(state) => state.characterSheet.attacksAndSpellcasting
	)
	const [isAdding, setIsAdding] = useState(false)
	const [newAttackOrSpell, setNewAttackOrSpell] = useState({
		name: '',
		attack: '',
		damageType: '',
	})
	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const handleIsEditing = () => {
		setIsAdding(!isAdding)
	}
	const submitNewItem = () => {
		if (
			newAttackOrSpell.name &&
			newAttackOrSpell.damageType !== '' &&
			newAttackOrSpell.attack === ''
		) {
			setIsAdding(!isAdding)
			dispatch(createNewAandS({ ...newAttackOrSpell, attack: '-' }))
			if (!create) dispatch(updateAttacksAndSpellcasting(id))
			setNewAttackOrSpell({
				name: '',
				attack: '',
				damageType: '',
			})
		} else if (newAttackOrSpell.name && newAttackOrSpell.damageType !== '') {
			setIsAdding(!isAdding)
			dispatch(createNewAandS(newAttackOrSpell))
			if (!create) dispatch(updateAttacksAndSpellcasting(id))
			setNewAttackOrSpell({
				name: '',
				attack: '',
				damageType: '',
			})
		}
	}
	const cancelNewItem = () => {
		setIsAdding(!isAdding)
		setNewAttackOrSpell({
			name: '',
			attack: '',
			damageType: '',
		})
	}
	const deleteItem = (index) => {
		dispatch(removeAandS(index))
		if (!create) dispatch(updateAttacksAndSpellcasting(id))
	}

	return (
		<Paper sx={paper}>
			<Container>
				<Grid container>
					<Grid container spacing={2}>
						<Grid item xs={4.5} sx={sectionTitles}>
							<Typography variant='subtitle1'>Name</Typography>
						</Grid>
						<Grid item xs={2} sx={sectionTitles}>
							<Typography variant='subtitle1'>Atk</Typography>
						</Grid>
						<Grid item xs={4.5} sx={sectionTitles}>
							<Typography variant='subtitle1'>Damage/Type</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						sx={listContainer}
						spacing={smallScreenAndDown ? 1 : 2}
					>
						{attacksAndSpellcasting.map((attackOrSpell, index) => {
							return (
								<Fragment key={attackOrSpell.id}>
									<AttacksAndSpellcastingInputs
										attackOrSpell={attackOrSpell}
										edit={false}
										create={create}
										index={index}
										newItem={false}
									/>

									<Grid item xs={1}>
										<IconButton
											sx={editButton}
											onClick={() => deleteItem(index)}
										>
											<CancelIcon />
										</IconButton>
									</Grid>
								</Fragment>
							)
						})}
					</Grid>

					{isAdding ? (
						<Grid container spacing={smallScreenAndDown ? 1 : 2}>
							<AttacksAndSpellcastingInputs
								newAttackOrSpell={newAttackOrSpell}
								setNewAttackOrSpell={setNewAttackOrSpell}
								edit={true}
								create={create}
								newItem={true}
							/>

							<Button
								variant='contained'
								onClick={submitNewItem}
								sx={smallScreenAndDown ? submitButtonXS : submitButton}
							>
								Submit
							</Button>

							<Button
								variant='contained'
								onClick={cancelNewItem}
								sx={cancelButton}
							>
								Cancel
							</Button>
						</Grid>
					) : (
						<IconButton sx={addButton} onClick={handleIsEditing}>
							<AddIcon />
						</IconButton>
					)}
				</Grid>
			</Container>
		</Paper>
	)
}

export default AttacksAndSpellcasting
