import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Container,
	Card,
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { card } from './styles'
import InventoryCategory from './InventoryCategory/InventoryCategory'
import _AddIcon from '../../ReusableComponents/_AddIcon/_AddIcon'
import _EditTextFieldAndButtons from '../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'

import { createInventoryCategory } from '../../../features/character-sheet/inventorySlice'

const Inventory = () => {
	const dispatch = useDispatch()
	const inventoryCategories = useSelector((state) => state.inventory)

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

	return (
		<Container>
			<Card sx={card}>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>
							{/* title */ 'Inventory Hello'}
						</Typography>
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
							<_EditTextFieldAndButtons
								handleIsEditing={(e) => setInventoryName(e.target.value)}
								// cancelEditing={cancelAdding}
								submitItem={(e) => handleAddingInventoryCategory(inventoryName)}
								textFieldValue={inventoryName}
							/>
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
