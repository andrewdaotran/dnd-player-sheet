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
import _EditTextFieldAndButtons from '../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import _AddIcon from '../../../ReusableComponents/_AddIcon/_AddIcon'
import _EditIcon from '../../../ReusableComponents/_EditIcon/_EditIcon'
import _CancelIcon from '../../../ReusableComponents/_CancelIcon/_CancelIcon'
import _UserItemEntryAndButtons from '../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'

const DetailCategory = ({ name, value, title }) => {
	const dispatch = useDispatch()
	const [isAdding, setIsAdding] = useState(false)
	const [isAddingPandL, setIsAddingPandL] = useState({
		armor: false,
		weapons: false,
		tools: false,
		languages: false,
	})
	const [postToBeEdited, setPostToBeEdited] = useState('')
	const [postToBeAdded, setPostToBeAdded] = useState('')
	const [pAndLPostToBeAdded, setPandLPostToBeAdded] = useState({
		armor: '',
		weapons: '',
		tools: '',
		languages: '',
	})

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	const handleIsEditing = (name, index, main, text) => {
		dispatch(updateIsEditingCharacterDetail({ name, index, main }))
		setPostToBeEdited(text)
	}

	// add is a boolean passed in to signifiy if adding rather than editing
	// if main is false, need to pass in name
	const handleEdit = (add, main, e, name) => {
		if (!add) {
			setPostToBeEdited(e.target.value)
		} else if (main) {
			setPostToBeAdded(e.target.value)
		} else {
			setPandLPostToBeAdded({ ...pAndLPostToBeAdded, [name]: e.target.value })
		}
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	// add is a boolean passed in to signifiy if adding rather than editing
	const handleSubmit = (add, name, index, main, text) => {
		if (!add) {
			dispatch(updateCharacterDetail({ name, index, main, text }))
			dispatch(updateIsEditingCharacterDetail({ name, index, main }))
			setPostToBeEdited('')
		} else if (main) {
			dispatch(createCharacterDetail({ name, main, text }))
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		} else {
			dispatch(createCharacterDetail({ name, main, text }))
			setIsAddingPandL({ ...isAddingPandL, [name]: !isAddingPandL })
			setPandLPostToBeAdded({ ...isAddingPandL, [name]: '' })
		}
	}

	// if adding, only need to pass in one argument which is a boolean to signifiy if adding rather than editing
	const cancelEditorAdd = (add, main, name, index) => {
		if (!add) {
			setPostToBeEdited('')
			dispatch(updateIsEditingCharacterDetail({ name, index, main }))
		} else if (main) {
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		} else {
			setIsAddingPandL({ ...isAddingPandL, [name]: !isAddingPandL[name] })
			setPandLPostToBeAdded({ ...pAndLPostToBeAdded, [name]: '' })
		}
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	const handleDelete = (name, index, main) => {
		dispatch(deleteCharacterDetail({ name, index, main }))
	}

	// main is a boolean passed in, if !proficienciesAndLanguages, main = true else false
	// if main is true, only need to pass in main
	const handleIsAdding = (main, name) => {
		if (main) {
			setIsAdding(!isAdding)
		} else {
			setIsAddingPandL({ ...isAddingPandL, [name]: !isAddingPandL[name] })
		}
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
										handleIsEditing(name, index, true, item.text)
									}
									handleDelete={() => handleDelete(name, index, true)}
									name={name}
								/>
							) : (
								<_EditTextFieldAndButtons
									key={item.id}
									handleIsEditing={(e) => handleEdit(false, true, e)}
									cancelEditing={() =>
										cancelEditorAdd(false, true, name, index)
									}
									submitItem={() =>
										handleSubmit(false, name, index, true, postToBeEdited)
									}
									textFieldValue={postToBeEdited}
								/>
							)
						})}

						{isAdding ? (
							<_EditTextFieldAndButtons
								handleIsEditing={(e) => handleEdit(true, true, e)}
								cancelEditing={() => cancelEditorAdd(true, true)}
								submitItem={() =>
									handleSubmit(true, name, null, true, postToBeAdded)
								}
								textFieldValue={postToBeAdded}
							/>
						) : (
							<_AddIcon handleIsAdding={() => handleIsAdding(true)} />
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
										{value[proficiency].value.map((item, index) => {
											return !item.isEditing ? (
												<_UserItemEntryAndButtons
													key={item.id}
													text={item.text}
													handleIsEditing={() =>
														handleIsEditing(
															value[proficiency].name,
															index,
															false,
															item.text
														)
													}
													handleDelete={() =>
														handleDelete(value[proficiency].name, index, false)
													}
													name={value[proficiency].name}
												/>
											) : (
												<_EditTextFieldAndButtons
													key={item.id}
													handleIsEditing={(e) =>
														handleEdit(false, false, e, value[proficiency].name)
													}
													cancelEditing={() =>
														cancelEditorAdd(
															false,
															false,
															value[proficiency].name,
															index
														)
													}
													submitItem={() =>
														handleSubmit(
															false,
															value[proficiency].name,
															index,
															false,
															postToBeEdited
														)
													}
													textFieldValue={
														pAndLPostToBeAdded[value[proficiency].name]
													}
												/>
											)
										})}

										{isAddingPandL[value[proficiency].name] ? (
											<_EditTextFieldAndButtons
												handleIsEditing={(e) =>
													handleEdit(true, false, e, value[proficiency].name)
												}
												cancelEditing={() =>
													cancelEditorAdd(true, false, value[proficiency].name)
												}
												submitItem={() =>
													handleSubmit(
														true,
														value[proficiency].name,
														null,
														false,
														postToBeAdded
													)
												}
												textFieldValue={
													pAndLPostToBeAdded[value[proficiency].name]
												}
											/>
										) : (
											<_AddIcon
												handleIsAdding={() =>
													handleIsAdding(false, value[proficiency].name)
												}
											/>
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


// separate

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

	const handleIsEditing = (name, index, main, text) => {
		dispatch(updateIsEditingCharacterDetail({ name, index, main }))
		setPostToBeEdited(text)
	}

	const handleEdit = (e) => {
		setPostToBeEdited(e.target.value)
	}

	const handleSubmit = (name, index, main, text) => {
		dispatch(updateCharacterDetail({ name, index, main, text }))
		dispatch(updateIsEditingCharacterDetail({ name, index, main }))
		setPostToBeEdited('')
	}

	const cancelEdit = (name, index, main) => {
		setPostToBeEdited('')
		dispatch(updateIsEditingCharacterDetail({ name, index, main }))
	}

	const handleDelete = (name, index, main) => {
		dispatch(deleteCharacterDetail({ name, index, main }))
	}

	const handleAddEdit = (e) => {
		setPostToBeAdded(e.target.value)
	}

	const handleAddSubmit = (name, main, text) => {
		dispatch(createCharacterDetail({ name, main, text }))
		setIsAdding(!isAdding)
		setPostToBeAdded('')
	}

	const cancelAdd = () => {
		setIsAdding(!isAdding)
		setPostToBeAdded('')
	}

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
										handleIsEditing(name, index, true, item.text)
									}
									handleDelete={() => handleDelete(name, index, true)}
									name={name}
								/>
							) : (
								<_EditTextFieldAndButtons
									key={item.id}
									handleIsEditing={handleEdit}
									cancelEditing={() => cancelEdit(name, index, true)}
									submitItem={() =>
										handleSubmit(name, index, true, postToBeEdited)
									}
									textFieldValue={postToBeEdited}
								/>
							)
						})}

						{isAdding ? (
							<_EditTextFieldAndButtons
								handleIsEditing={handleAddEdit}
								cancelEditing={cancelAdd}
								submitItem={() => handleAddSubmit(name, true, postToBeAdded)}
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
										{value[proficiency].value.map((item, index) => {
											return !item.isEditing ? (
												<_UserItemEntryAndButtons
													key={item.id}
													text={item.text}
													handleIsEditing={() =>
														handleIsEditing(
															value[proficiency].name,
															index,
															false,
															item.text
														)
													}
													handleDelete={() =>
														handleDelete(value[proficiency].name, index, false)
													}
													name={value[proficiency].name}
												/>
											) : (
												<_EditTextFieldAndButtons
													key={item.id}
													handleIsEditing={handleEdit}
													cancelEditing={() =>
														cancelEdit(value[proficiency].name, index, false)
													}
													submitItem={() =>
														handleSubmit(
															value[proficiency].name,
															index,
															false,
															postToBeEdited
														)
													}
													textFieldValue={postToBeEdited}
												/>
											)
										})}

										{isAdding ? (
											<_EditTextFieldAndButtons
												handleIsEditing={handleAddEdit}
												cancelEditing={cancelAdd}
												submitItem={() =>
													handleAddSubmit(
														value[proficiency].name,
														false,
														postToBeAdded
													)
												}
												textFieldValue={postToBeAdded}
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
