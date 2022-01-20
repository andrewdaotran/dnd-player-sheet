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
	// categoryTextField,
	categoryTitleTypography,
	categoryTypography,
} from './styles'
import EditTextField from '../EditTextField/_EditTextField'
import _EditTextField from '../EditTextField/_EditTextField'
import _AddIcon from '../_AddIcon/_AddIcon'
import _EditIcon from '../_EditIcon/_EditIcon'

const _AccordionCategory = ({
	category,
	isEditing,
	handleIsEditing,
	handleIsAdding,
	isAdding,
	cancelEditing,
	submitEditItem,
	submitAddItem,
	cancelAdding,
}) => {
	// const [isAdding, setIsAdding] = useState(false)
	// const [isEditing, setIsEditing] = useState(false)
	// change this to an array in future
	// const [inventoryEditing, setInventoryEditing] = useState(
	// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quidem qui repudiandae blanditiis impeditdelectus? Odio saepe a, obcaecati sed quam soluta quos, fuga nihil pariatur molestiae, reiciendis exercitationem.'
	// )
	// const [inventoryAdding, setInventoryAdding] = useState('')

	// const handleIsEditing = (e) => {
	// 	setInventoryEditing(e.target.value)
	// }

	// const submitInventoryItemEdit = () => {
	// 	setIsEditing(false)
	// }

	// const cancelEditing = () => {
	// 	setIsEditing(false)
	// }

	// const handleIsAdding = () => {
	// 	setIsAdding(!isAdding)
	// }

	// const submitDetails = () => {
	// 	// e.preventDefault()
	// 	// console.log('hello?')
	// 	setIsAdding(!isAdding)
	// 	setInventoryAdding('')
	// }

	// const cancelAdding = () => {
	// 	setIsAdding(!isAdding)
	// 	setInventoryAdding('')
	// }

	const [arr, setArr] = useState([1, 2])
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='subtitle1' sx={categoryTitleTypography}>
					{/*category.title */ category}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={2}>
					{/* category.items.map a state array from redux */}
					{arr.map((item) => {
						return /* Change to category.isEditing */ isEditing ? (
							<EditTextField
								handleIsEditing={handleIsEditing}
								cancelEditing={cancelEditing}
								submitItem={submitEditItem}
								textFieldValue={
									/* inventoryEditing  need the state from redux*/ category
								}
							/>
						) : (
							<>
								{/* {arr.map((item) => {
								return ( */}
								<>
									<Grid item xs={11}>
										<Typography variant='body2' sx={categoryTypography}>
											{/* inventoryEditing  need the state from redux*/}
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Neque sit, doloremque esse autem aliquam labore voluptate
											temporibus voluptatibus voluptatum provident.
										</Typography>
									</Grid>
									<Grid item xs={1}>
										<_EditIcon handleIsEditing={handleIsEditing} />
									</Grid>
								</>
								{/* )
							})} */}
							</>
						)
					})}
				</Grid>

				{isAdding ? (
					<Grid container>
						<EditTextField
							handleIsEditing={handleIsAdding}
							cancelEditing={cancelAdding}
							submitItem={submitAddItem}
							textFieldValue={
								/* inventoryAdding  need the state from redux*/ category
							}
						/>
					</Grid>
				) : (
					<_AddIcon handleIsAdding={handleIsAdding} />
				)}
			</AccordionDetails>
		</Accordion>
	)
}

export default _AccordionCategory
