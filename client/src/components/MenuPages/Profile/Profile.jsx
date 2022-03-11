import React from 'react'
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

import { header, container, editButton, typography, emptyDiv } from './styles'
import ProfileLines from './ProfileLines/ProfileLines'

const Profile = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	const lineNames = {
		email: user.email,
		// 'First Name': user.firstName,
		// 'Last Name': user.lastName,
		fullName: user.fullName,
		username: user.username,
	}

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
						console.log(lineNames[lineName])
						return (
							<ProfileLines
								key={lineName}
								value={lineNames[lineName]}
								title={lineName}
							/>
						)
					})}
				</Grid>
				<Grid sx={emptyDiv}></Grid>
			</Container>
		</Paper>
	)
}

export default Profile
