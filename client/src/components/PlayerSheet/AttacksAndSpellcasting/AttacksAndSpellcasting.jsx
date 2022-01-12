import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	Paper,
	TextField,
	Grid,
	Card,
	Button,
	useMediaQuery,
	IconButton,
	Accordion,
	Typography,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import {
	sectionTitles,
	container,
	addButton,
	submitButton,
	cancelButton,
	submitButtonXS,
	listContainer,
} from './styles'
import AttacksAndSpellcastingInputs from './AttacksAndSpellcastingInputs/AttacksAndSpellcastingInputs'

const AttacksAndSpellcasting = () => {
	const [existingAttacksOrSpells, setExistingAttacksOrSpells] = useState([
		{ name: 'sword', attack: '2', damageType: '1d4slashing' },
		{ name: 'hammer', attack: '3', damageType: '1d4bludgeoning' },
	])
	const [newAttackOrSpell, setNewAttackOrSpell] = useState({
		name: '',
		attack: '',
		damageType: '',
	})

	const [isEditing, setIsEditing] = useState(false)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const handleIsEditing = () => {
		setIsEditing(!isEditing)
	}

	const submitDetails = (e) => {
		e.preventDefault()
		setIsEditing(!isEditing)
		// setDetailConten('')
	}

	const cancelAdding = () => {
		setIsEditing(!isEditing)
		setNewAttackOrSpell({
			name: '',
			attack: '',
			damageType: '',
		})
	}

	return (
		<Container sx={container}>
			<Paper>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Attacks and Spellcasting</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={2}>
							<Grid item xs={5} sx={sectionTitles}>
								<Typography variant='subtitle1'>Name</Typography>
							</Grid>
							<Grid item xs={2} sx={sectionTitles}>
								<Typography variant='subtitle1'>Atk</Typography>
							</Grid>
							<Grid item xs={5} sx={sectionTitles}>
								<Typography variant='subtitle1'>Damage/Type</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							sx={listContainer}
							spacing={smallScreenAndDown ? 1 : 2}
						>
							{existingAttacksOrSpells.map((attackOrSpell) => {
								return (
									//pass setIsEditing prop down

									<AttacksAndSpellcastingInputs
										attackOrSpell={attackOrSpell}
										edit={false}
										existingAttacksOrSpells={existingAttacksOrSpells}
										setExistingAttacksOrSpells={setExistingAttacksOrSpells}
									/>
								)
							})}
						</Grid>
						{isEditing ? (
							<form>
								<Grid container spacing={smallScreenAndDown ? 1 : 2}>
									<AttacksAndSpellcastingInputs
										newAttackOrSpell={newAttackOrSpell}
										setNewAttackOrSpell={setNewAttackOrSpell}
										edit={true}
									/>
									<Button
										variant='contained'
										onClick={submitDetails}
										type='submit'
										sx={smallScreenAndDown ? submitButtonXS : submitButton}
									>
										Submit
									</Button>
									<Button
										variant='contained'
										onClick={cancelAdding}
										sx={cancelButton}
									>
										Cancel
									</Button>
								</Grid>
							</form>
						) : null}
						{!isEditing ? (
							<IconButton sx={addButton} onClick={handleIsEditing}>
								<AddIcon />
							</IconButton>
						) : null}
					</AccordionDetails>
				</Accordion>
			</Paper>
		</Container>
	)
}

export default AttacksAndSpellcasting
