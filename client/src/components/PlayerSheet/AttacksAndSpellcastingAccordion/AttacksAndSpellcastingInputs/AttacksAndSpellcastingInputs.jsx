import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Grid, useMediaQuery, useTheme } from '@mui/material'

import {
	createNewAandS,
	editAandS,
} from '../../../../features/character-sheet/characterSheetSlice'
import { updateAttacksAndSpellcasting } from '../../../../features/character-sheet/thunks'

const AttacksAndSpellcastingInputs = ({
	newAttackOrSpell,
	setNewAttackOrSpell,
	edit,
	attackOrSpell,
	newItem,
	create,
	index,
}) => {
	const dispatch = useDispatch()
	const id = useSelector((state) => state.characterSheet.id)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const handleNewPost = (e) => {
		setNewAttackOrSpell({
			...newAttackOrSpell,
			[e.target.name]: e.target.value,
		})
	}

	const handleEditPost = (e) => {
		dispatch(
			editAandS({
				index,
				name: e.target.name,
				input: e.target.value,
			})
		)
		if (!create) dispatch(updateAttacksAndSpellcasting(id))
	}

	return (
		<>
			<Grid item xs={smallScreenAndDown ? 4 : 4.5}>
				<TextField
					fullWidth
					name='name'
					disabled={edit || create ? false : areInputsDisabled}
					variant='filled'
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					value={edit ? newAttackOrSpell.name : attackOrSpell.name}
					onChange={newItem ? handleNewPost : handleEditPost}
				/>
			</Grid>
			<Grid item xs={2}>
				<TextField
					fullWidth
					name='attack'
					variant='filled'
					disabled={edit || create ? false : areInputsDisabled}
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					value={edit ? newAttackOrSpell.attack : attackOrSpell.attack}
					onChange={newItem ? handleNewPost : handleEditPost}
				/>
			</Grid>
			<Grid item xs={4.5}>
				<TextField
					fullWidth
					name='damageType'
					variant='filled'
					disabled={edit || create ? false : areInputsDisabled}
					InputProps={{
						inputProps: {
							style: {
								textAlign: 'center',
							},
						},
					}}
					value={edit ? newAttackOrSpell.damageType : attackOrSpell.damageType}
					onChange={newItem ? handleNewPost : handleEditPost}
				/>
			</Grid>
		</>
	)
}

export default AttacksAndSpellcastingInputs
