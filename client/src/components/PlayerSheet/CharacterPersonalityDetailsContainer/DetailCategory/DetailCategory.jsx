import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { detailTitleTypography } from './styles'

import {
	createCharacterDetail,
	updateCharacterDetail,
	updateIsEditingCharacterDetail,
	deleteCharacterDetail,
} from '../../../../features/character-sheet/characterDetailsSlice'
import ProficienciesAndLanguagesCategory from './ProficienciesAndLanguagesCategory/ProficienciesAndLanguagesCategory'
import _EditTextFieldAndButtons from '../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import _CancelIcon from '../../../ReusableComponents/_CancelIcon/_CancelIcon'
import _UserItemEntryAndButtons from '../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'

const DetailCategory = ({ name, value, title }) => {
	const dispatch = useDispatch()
	const [isAdding, setIsAdding] = useState(false)
	const [postToBeEdited, setPostToBeEdited] = useState('')
	const [postToBeAdded, setPostToBeAdded] = useState('')

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	const handleIsEditing = (name, index, text) => {
		dispatch(updateIsEditingCharacterDetail({ name, index, main: true }))
		setPostToBeEdited(text)
	}

	// add is a boolean passed in to signifiy if adding rather than editing
	// if main is false, need to pass in name
	const handleEdit = (add, e, name) => {
		if (!add) {
			setPostToBeEdited(e.target.value)
		} else {
			setPostToBeAdded(e.target.value)
		}
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	// add is a boolean passed in to signifiy if adding rather than editing
	const handleSubmit = (add, name, index, text) => {
		if (!add && !text) {
			setPostToBeEdited('')
			dispatch(updateIsEditingCharacterDetail({ name, index, main: true }))
			dispatch(deleteCharacterDetail({ name, index, main: true }))
		} else if (add && !text) {
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		} else if (!add) {
			dispatch(updateCharacterDetail({ name, index, main: true, text }))
			dispatch(updateIsEditingCharacterDetail({ name, index, main: false }))
			setPostToBeEdited('')
		} else {
			dispatch(createCharacterDetail({ name, main: true, text }))
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		}
	}

	// if adding, only need to pass in one argument which is a boolean to signifiy if adding rather than editing
	const cancelEditOrAdd = (add, name, index) => {
		if (!add) {
			setPostToBeEdited('')
			dispatch(updateIsEditingCharacterDetail({ name, index, main: true }))
		} else {
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		}
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	const handleDelete = (name, index, main) => {
		dispatch(deleteCharacterDetail({ name, index, main }))
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	// if main is true, only need to pass in main
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
						{value.map((item, index) => {
							return !item.isEditing ? (
								<_UserItemEntryAndButtons
									key={item.id}
									text={item.text}
									handleIsEditing={() =>
										handleIsEditing(name, index, item.text)
									}
									handleDelete={() => handleDelete(name, index, true)}
									name={name}
								/>
							) : (
								<_EditTextFieldAndButtons
									key={item.id}
									handleIsEditing={(e) => handleEdit(false, e)}
									cancelEditing={() => cancelEditOrAdd(false, name, index)}
									submitItem={() =>
										handleSubmit(false, name, index, postToBeEdited)
									}
									textFieldValue={postToBeEdited}
								/>
							)
						})}

						{isAdding ? (
							<_EditTextFieldAndButtons
								handleIsEditing={(e) => handleEdit(true, e)}
								cancelEditing={() => cancelEditOrAdd(true)}
								submitItem={() => handleSubmit(true, name, null, postToBeAdded)}
								textFieldValue={postToBeAdded}
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
										<ProficienciesAndLanguagesCategory
											details={value[proficiency].value}
											name={value[proficiency].name}
										/>
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
