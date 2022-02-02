import { useState, useEffect, Fragment } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
	Container,
	Card,
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Grid,
	TextField,
	Typography,
	IconButton,
	Button,
	useMediaQuery,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import {
	addButton,
	detailTextField,
	detailTitleTypography,
	detailTypography,
	submitButton,
	cancelButton,
} from './styles'

import {
	createNewDetail,
	removeDetail,
	editDetail,
} from '../../../../features/character-sheet/characterDetailsSlice'
import _EditTextFieldAndButtons from '../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import _CancelIcon from '../../../ReusableComponents/_CancelIcon/_CancelIcon'
import _UserItemEntryAndButtons from '../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'

const DetailCategory = ({ name, value, title }) => {
	const dispatch = useDispatch()
	const characterDetails = useSelector((state) => state.characterDetails)
	const detailCategory = useSelector((state) => state.characterDetails[name])

	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const [isAdding, setIsAdding] = useState(false)

	// const handleEdit = (name, data, index) => {
	// 	dispatch(editDetail({ ...characterDetails, name: { ...characterDetails[ name ], value: [ ...characterDetails[ name ].value, index = { ...characterDetails[ name ].value[ index ], text: data ]}}}))
	// }

	// const handleIsEditing = () => {

	// }

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='subtitle1' sx={detailTitleTypography}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{title !== 'Proficiencies and Languages' ? (
					<Grid container>
						{value.map((item) => {
							return !item.isEditing ? (
								<_UserItemEntryAndButtons
									key={item.id}
									text={item.text}
									handleIsEditing={() => {}}
									handleDelete={() => {}}
								/>
							) : (
								<_EditTextFieldAndButtons
									key={item.id}
									// handleIsEditing={(e) =>
									// 	handleEdit(value.name, e.target.value, index)
									// }
									cancelEditing={() => {}}
									submitItem={() => {}}
									textFieldValue={item.text}
								/>
							)
						})}

						{isAdding ? (
							<_EditTextFieldAndButtons
								handleIsEditing={() => {}}
								cancelEditing={() => {}}
								submitItem={() => {}}
								textFieldValue='temporariiieeesss'
							/>
						) : (
							<_AddIcon handleIsAdding={handleIsAdding} />
						)}
					</Grid>
				) : (
					Object.keys(value).map((proficiency) => {
						return (
							<Accordion key={proficiency}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant='subtitle1' sx={detailTitleTypography}>
										{value[proficiency].title}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										{value[proficiency].value.map((item) => {
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
													textFieldValue={item.text}
													key={item.id}
												/>
											)
										})}

										{isAdding ? (
											<_EditTextFieldAndButtons
												handleIsEditing={() => {}}
												cancelEditing={() => {}}
												submitItem={() => {}}
												textFieldValue='temporary'
											/>
										) : (
											<_AddIcon handleIsAdding={handleIsAdding} />
										)}
									</Grid>
								</AccordionDetails>
							</Accordion>
						)
					})
				)}
			</AccordionDetails>
		</Accordion>
	)
}

export default DetailCategory
