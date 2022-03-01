import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Container,
	Card,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { card } from './styles'

import InventoryCategory from './InventoryCategory/InventoryCategory'
import _AddIcon from '../../ReusableComponents/_AddIcon/_AddIcon'
import _EditTextFieldAndButtons from '../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'

import { createInventoryCategory } from '../../../features/character-sheet/characterSheetSlice'

const Inventory = ({ create }) => {
	const dispatch = useDispatch()
	const inventoryCategories = useSelector(
		(state) => state.characterSheet.inventory
	)
	const [isAdding, setIsAdding] = useState(false)
	const [inventoryName, setInventoryName] = useState('')

	const handleAddingInventoryCategory = (name) => {
		setIsAdding(!isAdding)
		dispatch(createInventoryCategory({ name }))
		setInventoryName('')
	}

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}
	const cancelAdding = () => {
		setIsAdding(!isAdding)
		setInventoryName('')
	}

	return (
		<Container>
			<Card sx={card}>
				<Accordion defaultExpanded={create ? true : false}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Inventory</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{Object.keys(inventoryCategories).map((category) => {
							return (
								<InventoryCategory
									{...inventoryCategories[category]}
									key={category}
								/>
							)
						})}
						{isAdding ? (
							<>
								<_EditTextFieldAndButtons
									handleIsEditing={(e) => setInventoryName(e.target.value)}
									cancelEditing={cancelAdding}
									submitItem={() =>
										handleAddingInventoryCategory(inventoryName)
									}
									textFieldValue={inventoryName}
								/>
							</>
						) : (
							<_AddIcon handleIsAdding={handleIsAdding} />
						)}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Container>
	)
}

export default Inventory
