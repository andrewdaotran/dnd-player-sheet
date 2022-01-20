import { useState } from 'react'
import { useSelector } from 'react-redux'
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
// import _AccordionCategory from '../../ReusableComponents/_AccordionCategory/_AccordionGroupComponent'

const Inventory = () => {
	const [inventoryCategories, setInventoryCategories] = useState([
		'Armor',
		'Misc',
		'Money',
		'Jewelry',
	])

	const inventory = useSelector((state) => state.inventory)
	console.log(inventory)

	// const handleIsEditing = (post, id) => {

	// }

	// export const editPost = (post, id) => async (dispatch) => {
	// 	try {
	// 		const { data } = await api.editPost(post, id)
	// 		dispatch({ type: actionTypes.EDIT_POST, payload: data })
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

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
						{/* {inventoryCategories.map((category) => {
							return <InventoryCategory category={category} key={category} />
						})} */}
						{inventory.map((category) => {
							return (
								<_AccordionCategory
									// key={category.title}
									// category={category}
									// isEditing={isEditing} no longer need as each inventory item has its own
									handleIsEditing={handleIsEditing}
									submitEditItem={submitEditItem}
									cancelEditing={cancelEditing}
									isAdding={isAdding}
									handleIsAdding={handleIsAdding}
									submitAddItem={submitAddItem}
									cancelAdding={cancelAdding}
									// textFieldEdit={category.}
									// textFieldAdd={ }
								/>
							)
						})}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Container>
	)
}

export default Inventory

// <_AccordionCategory
// 			key={/*category.title*/ category}
// 			category={category}
// 			isEditing={isEditing}
// 			handleIsEditing={handleIsEditing}
// 			isAdding={isAdding}
// 			cancelEditing={cancelEditing}
// 			submitEditItem={submitEditItem}
// 			submitAddItem={submitAddItem}
// 			cancelAdding={cancelAdding}
// 			handleIsAdding={handleIsAdding}
// 	/>

// {
// 	isAdding ? (
// 		<form>
// 			<Grid container>
// 				<TextField
// 					fullWidth
// 					multiline={true}
// 					rows={3}
// 					sx={inventoryTextField}
// 					value={inventoryContent}
// 					onChange={(e) => setInventoryAdding(e.target.value)}
// 				></TextField>

// 				<Button
// 					variant='contained'
// 					onClick={submitDetails}
// 					sx={submitButton}
// 					// type='submit'
// 				>
// 					Submit
// 				</Button>

// 				<Button variant='contained' onClick={cancelAdding} sx={cancelButton}>
// 					Cancel
// 				</Button>
// 			</Grid>
// 		</form>
// 	) : (
// 		<IconButton sx={addButton} onClick={handleIsAdding}>
// 			<AddIcon />
// 		</IconButton>
// 	)
// }
