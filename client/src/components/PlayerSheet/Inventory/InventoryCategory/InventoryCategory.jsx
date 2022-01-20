import { useState, useEffect } from 'react'

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

import _AccordionCategory from '../../../ReusableComponents/_AccordionCategory/_AccordionCategory'
import _EditTextField from '../../../ReusableComponents/EditTextField/_EditTextField'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import { categoryTitleTypography } from '../../../ReusableComponents/_AccordionCategory/styles'

const InventoryCategory = ({ category }) => {
	const [isAdding, setIsAdding] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	// change this to an array in future
	const [inventoryEditing, setInventoryEditing] = useState(
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quidem qui repudiandae blanditiis impeditdelectus? Odio saepe a, obcaecati sed quam soluta quos, fuga nihil pariatur molestiae, reiciendis exercitationem.'
	)
	const [inventoryAdding, setInventoryAdding] = useState('')

	const handleIsEditing = (e) => {
		// setInventoryEditing(e.target.value)
		setIsEditing(!isEditing)
	}

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	const submitEditItem = () => {
		setIsEditing(false)
	}

	const cancelEditing = () => {
		setIsEditing(false)
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
		<_AccordionCategory
			key={/*category.title*/ category}
			category={category}
			isEditing={isEditing}
			handleIsEditing={handleIsEditing}
			isAdding={isAdding}
			cancelEditing={cancelEditing}
			submitEditItem={submitEditItem}
			submitAddItem={submitAddItem}
			cancelAdding={cancelAdding}
			handleIsAdding={handleIsAdding}
		/>

		// <Accordion>
		// 	<AccordionSummary expandIcon={<ExpandMoreIcon />}>
		// 		<Typography variant='subtitle1' sx={inventoryTitleTypography}>
		// 			{inventory}
		// 		</Typography>
		// 	</AccordionSummary>
		// 	<AccordionDetails>
		// 		<Grid container spacing={2}>
		// 			{isEditing ? (
		// 				<>
		// 					<_EditTextField
		// 						handleIsEditing={handleIsEditing}
		// 						cancelEditing={cancelEditing}
		// 						submitItem={submitInventoryItemEdit}
		// 						textFieldValue={inventoryEditing}
		// 					/>
		// 				</>
		// 			) : (
		// 				<>
		// 					<Grid item xs={11}>
		// 						<Typography variant='body2' sx={inventoryTypography}>
		// 							{inventoryEditing}
		// 						</Typography>
		// 					</Grid>
		// 					<Grid item xs={1}>
		// 						<_EditIcon handleIsEditing={() => setIsEditing(true)} />
		// 					</Grid>
		// 				</>
		// 			)}

		// 			<Grid item xs={11}>
		// 				<Typography variant='body2' sx={inventoryTypography}>
		// 					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		// 					Temporibus tempore eius ex non perspiciatis veritatis rem eum
		// 					nulla dicta impedit, distinctio autem architecto iusto corporis
		// 					similique sint error accusantium rerum aliquam a velit!
		// 					Consequuntur at deleniti magni fugit, iure sunt autem quidem
		// 					praesentium cupiditate atque dolorum neque voluptates dicta
		// 					nesciunt.
		// 				</Typography>
		// 			</Grid>
		// 		</Grid>

		// 		{isAdding ? (
		// 			<_EditTextField
		// 				handleIsEditing={(e) => setInventoryAdding(e.target.value)}
		// 				cancelEditing={cancelAdding}
		// 				submitItem={submitDetails}
		// 				textFieldValue={inventoryAdding}
		// 			/>
		// 		) : (
		// 			<_AddIcon handleIsAdding={handleIsAdding} />
		// 		)}
		// 	</AccordionDetails>
		// </Accordion>
	)
}

export default InventoryCategory
