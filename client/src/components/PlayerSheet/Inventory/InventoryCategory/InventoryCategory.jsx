import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Grid,
	TextField,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	inventoryTextField,
	inventoryTitleTypography,
	inventoryTypography,
} from './styles'

// import _AccordionCategory from '../../../ReusableComponents/_AccordionCategory/_AccordionCategory'

import _UserItemEntryAndButtons from '../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import { categoryTitleTypography } from './styles'
import _EditTextFieldAndButtons from '../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import { createInventoryCategory } from '../../../../features/character-sheet/inventorySlice'

const InventoryCategory = ({ name, title, value }) => {
	const dispatch = useDispatch()
	const [isAdding, setIsAdding] = useState(false)

	const [inventoryAdding, setInventoryAdding] = useState('')
	const [itemAdding, setItemAdding] = useState('')

	const handleAddingInventoryCategory = (name) => {
		setIsAdding(!isAdding)
		dispatch(createInventoryCategory({ name }))
	}

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	const submitEditItem = () => {
		// setIsEditing(false)
	}

	const cancelEditing = () => {
		// setIsEditing(false)
	}

	const submitAddItem = () => {
		// e.preventDefault()
		// console.log('hello?')
		setIsAdding(!isAdding)
		setInventoryAdding('')
	}

	const cancelAdding = () => {
		setIsAdding(!isAdding)
		setInventoryAdding('')
	}
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='subtitle1' sx={inventoryTitleTypography}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={2}>
					{value.map((item, index) => {
						console.log(item)
						return !item.isEditing ? (
							<_UserItemEntryAndButtons
								key={item.id}
								text={item.text}
								handleIsEditing={() => {}}
								handleDelete={() => {}}
							/>
						) : (
							<_EditTextFieldAndButtons
								handleIsEditing={() => {}}
								cancelEditing={() => {}}
								submitItem={() => {}}
								textFieldValue={''}
							/>
						)
					})}
				</Grid>

				{isAdding ? (
					<_EditTextFieldAndButtons
						handleIsEditing={(e) => setInventoryAdding(e.target.value)}
						cancelEditing={cancelAdding}
						submitItem={(e) => handleAddingInventoryCategory(e.target.value)}
						textFieldValue={inventoryAdding}
					/>
				) : (
					<_AddIcon handleIsAdding={handleIsAdding} />
				)}
			</AccordionDetails>
		</Accordion>
	)
}

export default InventoryCategory
