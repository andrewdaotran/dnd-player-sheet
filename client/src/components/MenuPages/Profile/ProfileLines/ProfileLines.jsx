import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	Grid,
	Container,
	Paper,
	TextField,
	Button,
	IconButton,
	Typography,
	Divider,
	Box,
} from '@mui/material'

import { editButton, typography, container, buttonBox } from './styles'
import { updateUserThunk } from '../../../../features/user/thunks'
import { updateUserReducer } from '../../../../features/user/userSlice'
import { toggleIsEditingProfile } from '../../../../features/profile-lines-isEditing/profileLinesIsEditingSlice'

const ProfileLines = ({ value, title }) => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const profileLinesIsEditing = useSelector(
		(state) => state.profileLinesIsEditing
	)
	const [isEditing, setIsEditing] = useState(false)
	const [firstInput, setFirstInput] = useState('')
	const [secondInput, setSecondInput] = useState('')

	const handleEdit = () => {
		setIsEditing(!isEditing)
		dispatch(toggleIsEditingProfile(title))

		if (title === 'fullName') {
			setFirstInput(user.firstName)
			setSecondInput(user.lastName)
			return
		}

		setFirstInput(user[title])
	}

	const handleChange = (e) => {
		if (e.target.name === 'lastName') {
			setSecondInput(e.target.value)
		} else {
			setFirstInput(e.target.value)
		}
	}

	const handleSubmit = () => {
		if (title === 'fullName') {
			dispatch(
				updateUserReducer({
					name: title,
					firstInput,
					secondInput,
					firstName: 'firstName',
					lastName: 'lastName',
				})
			)

			dispatch(updateUserThunk({}))
		} else {
			dispatch(updateUserReducer({ name: title, firstInput }))
			dispatch(updateUserThunk({}))
		}
		setIsEditing(!isEditing)
		dispatch(toggleIsEditingProfile(title))
	}

	const handleCancel = () => {
		setIsEditing(!isEditing)
		dispatch(toggleIsEditingProfile(title))

		setFirstInput('')
		setSecondInput('')
	}

	// console.log(value)
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	return (
		<>
			<Grid item xs={12}>
				<Grid container sx={container}>
					<Grid item xs={4} sx={typography}>
						<Typography>
							{title === 'fullName' ? 'Name' : capitalizeFirstLetter(title)}:
						</Typography>
					</Grid>

					{!profileLinesIsEditing[title] ? (
						<Grid item xs={4} sx={typography}>
							<Typography>{user[title]}</Typography>
						</Grid>
					) : (
						<Grid item xs={4} sx={typography}>
							<Grid container spacing={1}>
								<Grid item>
									<TextField
										size='small'
										name={title === 'fullName' ? 'firstName' : title}
										value={firstInput}
										onChange={handleChange}
									/>
								</Grid>
								{title === 'fullName' ? (
									<Grid item>
										<TextField
											size='small'
											name={title === 'fullName' ? 'lastName' : null}
											value={secondInput}
											onChange={handleChange}
										/>
									</Grid>
								) : null}

								<Grid item>
									<Button onClick={handleCancel}>Cancel</Button>
								</Grid>
								<Grid item>
									<Button onClick={handleSubmit} variant='contained'>
										Save
									</Button>
								</Grid>
							</Grid>
						</Grid>
					)}

					<Grid item xs={4}>
						<Box sx={buttonBox}>
							<Button
								sx={editButton}
								onClick={handleEdit}
								disabled={
									user.token.length > 500 && title === 'email' ? true : false
								}
							>
								Edit
							</Button>
						</Box>
					</Grid>
				</Grid>
				<Divider />
			</Grid>
		</>
	)
}

export default ProfileLines
