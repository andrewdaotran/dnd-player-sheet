import { useState } from 'react'
import {
	Container,
	Paper,
	TextField,
	Typography,
	Grid,
	Card,
	useMediaQuery,
	RadioGroup,
	Radio,
	FormControlLabel,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
	container,
	gridContainer,
	gridItem,
	card,
	radioTypography,
	radioGroup,
	deathSaveTypography,
	deathSavesContainer,
	deathSaveFailures,
	deathSaveSuccesses,
} from './styles'

const CharacterInformation = () => {
	//need to pull player information from backend from authorization and character sheet, put into state value
	const [labels, setLabels] = useState(['Armor Class', 'Initiative', 'Speed'])
	const [radioValueSuccess, setRadioValueSuccess] = useState('')
	const [radioValueFail, setRadioValueFail] = useState('')

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

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))
	return (
		<Container
			sx={
				mediumScreenAndDown
					? { container, margin: '0 auto 1rem auto' }
					: container
			}
		>
			<Card sx={card}>
				<Grid container spacing={2} sx={gridContainer}>
					{labels.map((label) => {
						return (
							<Grid
								item
								xs={4}
								key={label}
								sx={(gridItem, { border: '1px solid red' })}
							>
								<TextField label={label} />
							</Grid>
						)
					})}
					<Grid item sm={6} xs={12}>
						Hit Dice
						{/* https://wiki.roll20.net/Character_Sheets */}
					</Grid>
					<Grid item sm={6} xs={12} sx={deathSavesContainer}>
						<Grid container sx={deathSaveSuccesses}>
							<Grid item>
								<Typography>Successes</Typography>
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
							<Grid item>
								<Typography sx={radioTypography}>Failures</Typography>
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
