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

import {
	header,
	container,
	editButton,
	typography,
	emptyDiv,
	deleteButton,
} from './styles'
import ProfileLines from './ProfileLines/ProfileLines'
import WarningModal from '../../WarningModal/WarningModal'

const Profile = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)

	const lineNames = {
		email: user.email,
		fullName: user.fullName,
		username: user.username,
	}

	const handleToggleDeleteConfirm = () => {
		setDeleteConfirmOpen(!deleteConfirmOpen)
	}

	const handleDeleteUser = () => {}

	return (
		<Paper sx={container}>
			<Container>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant='h4' sx={header}>
							Profile
						</Typography>
						<Divider />
					</Grid>

					{Object.keys(lineNames).map((lineName) => {
						return (
							<ProfileLines
								key={lineName}
								value={lineNames[lineName]}
								title={lineName}
							/>
						)
					})}
					<Grid sx={deleteButton}>
						<Button variant='contained' onClick={handleToggleDeleteConfirm}>
							Delete Profile
						</Button>
					</Grid>
				</Grid>
				{/* <Grid sx={emptyDiv}></Grid> */}
				{deleteConfirmOpen ? (
					<WarningModal
						cancelFunction={handleToggleDeleteConfirm}
						submitFunction={handleDeleteUser}
					/>
				) : null}
			</Container>
		</Paper>
	)
}

export default Profile
