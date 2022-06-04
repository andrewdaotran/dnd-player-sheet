import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
	Button,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import {
	inventoryTextField,
	inventoryTitleTypography,
	inventoryTypography,
	inventoryCategoryEditButton,
	inventoryCategoryCancelButton,
	gridContainer,
} from './styles'

import _UserItemEntryAndButtons from '../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import _EditTextFieldAndButtons from '../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import _CancelIcon from '../../../ReusableComponents/_CancelIcon/_CancelIcon'

import {
	createInventoryCategory,
	updateInventoryCategory,
	updateInventoryCategoryIsEditing,
	deleteInventoryCategory,
	createInventoryItem,
	updateInventoryItem,
	deleteInventoryItem,
	updateIsEditingInventoryItem,
} from '../../../../features/character-sheet/characterSheetSlice'
import { updateInventory } from '../../../../features/character-sheet/thunks'

const InventoryCategory = ({
	name,
	title,
	value,
	custom,
	isEditing,
	create,
}) => {
	const dispatch = useDispatch()
	const id = useSelector((state) => state.characterSheet.id)
	const [isAdding, setIsAdding] = useState(false)
	const [inventoryCategory, setInventoryCategory] = useState('')
	const [inventoryItem, setInventoryItem] = useState('')

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	const cancelAdding = () => {
		setIsAdding(!isAdding)
		setInventoryItem('')
	}

	// category

	const editInventoryCategory = () => {
		dispatch(updateInventoryCategoryIsEditing({ name }))
		dispatch(updateInventory(id))
		setInventoryCategory(title)
	}

	const submitInventoryCategory = () => {
		const newName = inventoryCategory.toLowerCase()
		dispatch(updateInventoryCategory({ name, newName }))
		dispatch(updateInventoryCategoryIsEditing({ name: newName }))
		dispatch(updateInventory(id))
		setInventoryCategory('')
	}

	const cancelInventoryCategoryEditing = () => {
		dispatch(updateInventoryCategoryIsEditing({ name }))
		setInventoryCategory('')
	}

	const removeInventoryCategory = () => {
		dispatch(deleteInventoryCategory({ name }))
		dispatch(updateInventory(id))
	}

	// item

	const editItem = (text, index) => {
		// dispatch(updateInventoryItem({ name, index, text: inventoryItem }))
		dispatch(updateIsEditingInventoryItem({ name, index }))
		// dispatch(updateInventory(id))
		setInventoryItem(text)
	}

	const submitItem = (add, index) => {
		if (add) {
			dispatch(createInventoryItem({ name, text: inventoryItem }))
			if (!create) dispatch(updateInventory(id))
			setIsAdding(!isAdding)
			setInventoryItem('')
		} else {
			dispatch(updateInventoryItem({ name, index, text: inventoryItem }))
			dispatch(updateIsEditingInventoryItem({ name, index }))
			if (!create) dispatch(updateInventory(id))
			setInventoryItem('')
		}
	}

	const cancelEditingItem = (index) => {
		dispatch(updateIsEditingInventoryItem({ name, index }))
		setInventoryItem('')
	}

	const deleteItem = (name, index) => {
		dispatch(deleteInventoryItem({ name, index }))
		if (!create) dispatch(updateInventory(id))
	}

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Grid container>
					<Grid item xs={11}>
						<Typography variant='subtitle1' sx={inventoryTitleTypography}>
							{title}
						</Typography>
					</Grid>
					<Grid item xs={1} sx={inventoryCategoryCancelButton}></Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={2} sx={gridContainer}>
					{value.map((item, index) => {
						return !item.isEditing ? (
							<_UserItemEntryAndButtons
								key={item.id}
								text={item.text}
								handleIsEditing={() => editItem(item.text, index)}
								handleDelete={() => deleteItem(name, index)}
							/>
						) : (
							<_EditTextFieldAndButtons
								handleIsEditing={(e) => setInventoryItem(e.target.value)}
								cancelEditing={() => cancelEditingItem(index)}
								submitItem={() => submitItem(false, index)}
								textFieldValue={inventoryItem}
								key={item.id}
							/>
						)
					})}
				</Grid>

				{isAdding ? (
					<_EditTextFieldAndButtons
						handleIsEditing={(e) => setInventoryItem(e.target.value)}
						cancelEditing={cancelAdding}
						submitItem={() => submitItem(true)}
						textFieldValue={inventoryItem}
					/>
				) : isEditing ? (
					<_EditTextFieldAndButtons
						handleIsEditing={(e) => setInventoryCategory(e.target.value)}
						cancelEditing={cancelInventoryCategoryEditing}
						submitItem={submitInventoryCategory}
						textFieldValue={inventoryCategory}
					/>
				) : (
					<>
						<_AddIcon handleIsAdding={handleIsAdding} />
						{custom ? (
							<>
								<Button
									variant='contained'
									onClick={editInventoryCategory}
									sx={inventoryCategoryEditButton}
								>
									Edit
								</Button>
								<Button
									sx={inventoryCategoryCancelButton}
									variant='contained'
									onClick={removeInventoryCategory}
								>
									Remove
								</Button>
							</>
						) : null}
					</>
				)}
			</AccordionDetails>
		</Accordion>
	)
}

export default InventoryCategory
