import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import _UserItemEntryAndButtons from '../../../../ReusableComponents/_UserItemEntryAndButtons/_UserItemEntryAndButtons'
import _EditTextFieldAndButtons from '../../../../ReusableComponents/_EditTextFieldAndButtons/_EditTextFieldAndButtons'
import _AddIcon from '../../../../ReusableComponents/_AddIcon/_AddIcon'
import {
	createCharacterDetail,
	updateCharacterDetail,
	updateIsEditingCharacterDetail,
	deleteCharacterDetail,
} from '../../../../../features/character-sheet/characterSheetSlice'

import React from 'react'
import { updateCharacterDetails } from '../../../../../features/character-sheet/thunks'

const ProficienciesAndLanguagesCategory = ({ details, name }) => {
	const dispatch = useDispatch()
	const id = useSelector((state) => state.characterSheet.id)
	const [isAdding, setIsAdding] = useState(false)
	const [postToBeEdited, setPostToBeEdited] = useState('')
	const [postToBeAdded, setPostToBeAdded] = useState('')

	const handleIsEditing = (name, index, text) => {
		dispatch(updateIsEditingCharacterDetail({ name, index, main: false }))

		setPostToBeEdited(text)
	}

	const handleEdit = (add, e) => {
		if (!add) {
			setPostToBeEdited(e.target.value)
		} else {
			setPostToBeAdded(e.target.value)
		}
	}

	const handleDelete = (name, index) => {
		dispatch(deleteCharacterDetail({ name, index, main: false }))
		dispatch(updateCharacterDetails(id))
	}

	const cancelEditOrAdd = (add, name, index) => {
		if (!add) {
			setPostToBeEdited('')
			dispatch(updateIsEditingCharacterDetail({ name, index, main: false }))
		} else {
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		}
	}

	const handleSubmit = (add, name, index, text) => {
		if (!add && !text) {
			setPostToBeEdited('')
			dispatch(updateIsEditingCharacterDetail({ name, index, main: false }))
			dispatch(deleteCharacterDetail({ name, index, main: false }))
			dispatch(updateCharacterDetails(id))
		} else if (add && !text) {
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		} else if (!add) {
			dispatch(updateCharacterDetail({ name, index, main: false, text }))
			dispatch(updateIsEditingCharacterDetail({ name, index, main: false }))
			dispatch(updateCharacterDetails(id))
			setPostToBeEdited('')
		} else {
			dispatch(createCharacterDetail({ name, main: false, text }))
			dispatch(updateCharacterDetails(id))
			setIsAdding(!isAdding)
			setPostToBeAdded('')
		}
	}

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	return (
		<>
			{details.map((item, index) => {
				return !item.isEditing ? (
					<_UserItemEntryAndButtons
						key={item.id}
						text={item.text}
						handleIsEditing={() => handleIsEditing(name, index, item.text)}
						handleDelete={() => handleDelete(name, index)}
					/>
				) : (
					<_EditTextFieldAndButtons
						key={item.id}
						handleIsEditing={(e) => handleEdit(false, e)}
						cancelEditing={() => cancelEditOrAdd(false, name, index)}
						submitItem={() => handleSubmit(false, name, index, postToBeEdited)}
						textFieldValue={postToBeEdited}
					/>
				)
			})}

			{isAdding ? (
				<_EditTextFieldAndButtons
					handleIsEditing={(e) => handleEdit(true, e)}
					cancelEditing={() => cancelEditOrAdd(true, name)}
					submitItem={() => handleSubmit(true, name, null, postToBeAdded)}
					textFieldValue={postToBeAdded}
				/>
			) : (
				<_AddIcon handleIsAdding={handleIsAdding} />
			)}
		</>
	)
}
export default ProficienciesAndLanguagesCategory
