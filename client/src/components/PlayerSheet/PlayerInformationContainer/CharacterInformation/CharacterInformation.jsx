import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	Paper,
	TextField,
	Typography,
	Grid,
	Card,
	useMediaQuery,
	Radio,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
	container,
	inputContainer,
	inputItem,
	card,
	radioTypography,
	deathSaveTypography,
	deathSavesContainer,
	deathSaveFailures,
	deathSaveSuccesses,
	hitDiceTypography,
	hitDiceTotalContainer,
	hitDiceTotalTypography,
	hitDiceNumberContainer,
	deathSaveFailuresTypography,
	deathSaveSuccessesTypography,
} from './styles'

const CharacterInformation = () => {
	//need to pull player information from backend from authorization and character sheet, put into state value
	const [labels, setLabels] = useState(['Armor Class', 'Initiative', 'Speed'])
	const [radioValueSuccess, setRadioValueSuccess] = useState('')
	const [radioValueFail, setRadioValueFail] = useState('')

	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const mediumScreenAndUp = useMediaQuery(theme.breakpoints.up('md'))
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const handleRadioSuccess = (e) => {
		if (radioValueSuccess === e.target.value) {
			setRadioValueSuccess('')
		} else {
			setRadioValueSuccess(e.target.value)
		}
	}

	const handleRadioFail = (e) => {
		if (radioValueFail === e.target.value) {
			setRadioValueFail('')
		} else {
			setRadioValueFail(e.target.value)
		}
	}

	// change Armor Class to AC when screen goes small
	useEffect(() => {
		if (smallScreenAndDown) {
			setLabels(['AC', 'Initiative', 'Speed'])
		} else {
			setLabels(['Armor Class', 'Initiative', 'Speed'])
		}
	}, [smallScreenAndDown])

	return (
		<Container
			sx={
				mediumScreenAndDown
					? { ...container, margin: '0 auto 1rem auto' }
					: container
			}
		>
			<Card sx={card}>
				<Grid container spacing={2} sx={inputContainer}>
					{labels.map((label) => {
						return (
							<Grid item xs={4} key={label} sx={inputItem}>
								<TextField
									label={label}
									disabled={areInputsDisabled}
									InputProps={{
										inputProps: { style: { textAlign: 'center' } },
									}}
								/>
							</Grid>
						)
					})}
					<Grid item sm={6} xs={12}>
						<Grid container sx={hitDiceTotalContainer}>
							<Grid item>
								<Grid container>
									<Grid item xs={6} sx={hitDiceTotalTypography}>
										<Typography>Total:</Typography>
									</Grid>
									<Grid item xs={6}>
										<TextField
											variant='standard'
											disabled={areInputsDisabled}
											defaultValue={0}
											type='number'
											InputProps={{
												inputProps: { style: { textAlign: 'center' } },
											}}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid container sx={hitDiceNumberContainer}>
							<Grid item>
								<TextField
									type='number'
									disabled={areInputsDisabled}
									defaultValue={0}
									InputProps={{
										inputProps: { style: { textAlign: 'center' } },
									}}
								/>
							</Grid>
						</Grid>
						<Typography variant='h6' sx={hitDiceTypography}>
							Hit Dice
						</Typography>
					</Grid>
					<Grid item sm={6} xs={12} sx={deathSavesContainer}>
						<Grid container sx={deathSaveSuccesses}>
							<Grid item md={12}>
								<Typography sx={deathSaveSuccessesTypography}>
									Successes
								</Typography>
							</Grid>
							<Grid item>
								<Radio
									size='small'
									value='s1'
									onClick={handleRadioSuccess}
									checked={radioValueSuccess === 's1'}
								/>
								<Radio
									size='small'
									value='s2'
									onClick={handleRadioSuccess}
									checked={radioValueSuccess === 's2'}
								/>
								<Radio
									size='small'
									value='s3'
									onClick={handleRadioSuccess}
									checked={radioValueSuccess === 's3'}
								/>
							</Grid>
						</Grid>
						<Grid container sx={deathSaveFailures}>
							<Grid item md={12}>
								<Typography sx={deathSaveFailuresTypography}>
									Failures
								</Typography>
							</Grid>
							<Grid item>
								<Radio
									size='small'
									value='f1'
									onClick={handleRadioFail}
									checked={radioValueFail === 'f1'}
								/>
								<Radio
									size='small'
									value='f2'
									onClick={handleRadioFail}
									checked={radioValueFail === 'f2'}
								/>
								<Radio
									size='small'
									value='f3'
									onClick={handleRadioFail}
									checked={radioValueFail === 'f3'}
								/>
							</Grid>
						</Grid>
						<Typography variant='h6' sx={deathSaveTypography}>
							Death Saves
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</Container>
	)
}

export default CharacterInformation
