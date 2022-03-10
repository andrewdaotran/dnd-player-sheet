import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

import {
	Typography,
	TextField,
	Container,
	Button,
	Card,
	CardContent,
	CardActions,
	Grid,
	Paper,
} from '@mui/material'

import {
	authButton,
	modalCardActions,
	authGrid,
	authText,
	container,
	paper,
	questionText,
	authTextFieldContainer,
} from './styles'

import {
	standardLogin,
	signup,
	googleLoginThunk,
} from '../../features/user/thunks'
import { attachUser } from '../../features/character-sheet/characterSheetSlice'
import { googleLogin } from '../../features/user/userSlice'

const Auth = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		usernameOrEmail: '',
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [haveLogin, setHaveLogin] = useState(true)

	useEffect(() => {
		const profile = JSON.parse(localStorage.getItem('profile'))

		if (profile) {
			const userId = profile?.googleId || profile?.standardId || profile?._id
			navigate(`/home/${userId}`)
		}
	}, [])

	const standardAuth = (e) => {
		e.preventDefault()
		if (haveLogin) {
			dispatch(standardLogin({ formData, navigate }))
		}
		if (!haveLogin) {
			dispatch(signup({ formData, navigate }))
		}
	}

	const handleSetForm = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSwitchForms = () => {
		setHaveLogin(!haveLogin)
		setFormData({
			usernameOrEmail: '',
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		})
	}

	const googleSuccess = async (res) => {
		const profile = res?.profileObj
		const token = res?.tokenId

		// dispatch(attachUser({ profile, token }))
		// dispatch(googleLogin({ profile, token }))
		dispatch(googleLoginThunk({ profile, token, navigate }))
	}

	const googleFailure = (err) => {
		console.log(err)
	}
	return (
		<Container sx={container}>
			<Paper sx={paper}>
				{/* Top Typography */}
				<Grid item sx={authText}>
					{haveLogin ? (
						<Typography variant='h4'>Sign In</Typography>
					) : (
						<Typography variant='h4'>Sign Up</Typography>
					)}
				</Grid>
				<form onSubmit={standardAuth}>
					{/* Input Fields */}
					{haveLogin ? (
						<Grid container spacing={2} sx={authTextFieldContainer}>
							<Grid item xs={12}>
								<TextField
									placeholder='Username or Email *'
									size='small'
									fullWidth
									value={formData.usernameOrEmail}
									name='usernameOrEmail'
									// value={formData.username}
									// name='username'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									placeholder='Password *'
									size='small'
									fullWidth
									value={formData.password}
									name='password'
									onChange={handleSetForm}
								/>
							</Grid>
						</Grid>
					) : (
						<Grid container spacing={2} sx={authTextFieldContainer}>
							<Grid item xs={6}>
								<TextField
									placeholder='First Name *'
									size='small'
									fullWidth
									value={formData.firstName}
									name='firstName'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									placeholder='Last Name *'
									size='small'
									fullWidth
									value={formData.lastName}
									name='lastName'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									placeholder='Username *'
									size='small'
									fullWidth
									value={formData.username}
									name='username'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									placeholder='Email Address *'
									size='small'
									fullWidth
									value={formData.email}
									name='email'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									placeholder='Password *'
									size='small'
									fullWidth
									value={formData.password}
									name='password'
									onChange={handleSetForm}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									placeholder='Confirm Password *'
									size='small'
									fullWidth
									value={formData.confirmPassword}
									name='confirmPassword'
									onChange={handleSetForm}
								/>
							</Grid>
						</Grid>
					)}
					<Grid item></Grid>

					{/* Buttons */}

					{haveLogin ? (
						<>
							<Grid item>
								<Button
									sx={authButton}
									onClick={() => {}}
									fullWidth
									variant='contained'
									size='small'
									type='submit'
								>
									Sign In
								</Button>
							</Grid>
							<Grid item>
								<GoogleLogin
									clientId='43266252395-5jhp0l8jcfup59b718n9oe7ke8i6ps57.apps.googleusercontent.com'
									render={(renderProps) => (
										<Button
											sx={authButton}
											onClick={renderProps.onClick}
											// disabled={renderProps.disabled}
											variant='contained'
											fullWidth
											size='small'
										>
											Google Login
										</Button>
									)}
									onSuccess={googleSuccess}
									onFailure={googleFailure}
									cookiePolicy='single_host_origin'
								/>
							</Grid>
						</>
					) : (
						<>
							<Grid item>
								<Button
									sx={authButton}
									onClick={() => {}}
									fullWidth
									variant='contained'
									size='small'
									type='submit'
								>
									Sign Up
								</Button>
							</Grid>
						</>
					)}
				</form>

				{/* Bottom Typography  */}
				{haveLogin ? (
					<Typography onClick={handleSwitchForms} sx={questionText}>
						Don't have a login? Sign Up.
					</Typography>
				) : (
					<Typography onClick={handleSwitchForms} sx={questionText}>
						Already have a login? Sign In.
					</Typography>
				)}
			</Paper>
			{/* </Grid> */}
		</Container>
	)
}

export default Auth
