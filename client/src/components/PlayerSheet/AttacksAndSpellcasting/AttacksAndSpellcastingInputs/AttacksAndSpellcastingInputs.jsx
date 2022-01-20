import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	Paper,
	TextField,
	Grid,
	Card,
	useMediaQuery,
	IconButton,
	Accordion,
	Typography,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'

const AttacksAndSpellcastingInputs = ({
	newAttackOrSpell,
	setNewAttackOrSpell,
	edit,
	attackOrSpell,
	setExistingAttacksOrSpells,
	existingAttacksOrSpells,
}) => {
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	return (
		<>
			<Grid item xs={4.5}>
				<TextField
					fullWidth
					disabled={edit ? false : areInputsDisabled}
					variant='filled'
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					// onChange={
					// 	edit
					// 		? (e) =>
					// 				setNewAttackOrSpell({
					// 					...newAttackOrSpell,
					// 					name: e.target.value,
					// 				})
					// 		: (e) =>
					// 				setExistingAttacksOrSpells([
					// 					...existingAttacksOrSpells,
					// 					{
					// 						...attackOrSpell,
					// 						name: e.target.value,
					// 					},
					// 				])
					// }
					value={edit ? newAttackOrSpell.name : attackOrSpell.name}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					variant='filled'
					disabled={edit ? false : areInputsDisabled}
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					// onChange={
					// 	edit
					// 		? (e) =>
					// 				setNewAttackOrSpell({
					// 					...newAttackOrSpell,
					// 					attack: e.target.value,
					// 				})
					// 		: (e) =>
					// 				setExistingAttacksOrSpells([
					// 					...existingAttacksOrSpells,
					// 					{
					// 						...attackOrSpell,
					// 						attack: e.target.value,
					// 					},
					// 				])
					// }
					// need to dispatch actions to change the value
					value={edit ? newAttackOrSpell.attack : attackOrSpell.attack}
				/>
			</Grid>
			<Grid item xs={4.5}>
				<TextField
					fullWidth
					variant='filled'
					disabled={edit ? false : areInputsDisabled}
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					// need to fix onChange to onClick/onSubmit or else it will continue to create new things when typing

					// onChange={
					// 	edit
					// 		? (e) =>
					// 				setNewAttackOrSpell({
					// 					...newAttackOrSpell,
					// 					damageType: e.target.value,
					// 				})
					// 		: (e) =>
					// 				setExistingAttacksOrSpells([
					// 					...existingAttacksOrSpells,
					// 					{
					// 						...attackOrSpell,
					// 						damageType: e.target.value,
					// 					},
					// 				])
					// }
					value={edit ? newAttackOrSpell.damageType : attackOrSpell.damageType}
				/>
			</Grid>
		</>
	)
}

export default AttacksAndSpellcastingInputs
