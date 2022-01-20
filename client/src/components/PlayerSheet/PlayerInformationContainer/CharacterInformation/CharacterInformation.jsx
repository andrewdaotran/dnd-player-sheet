import { useSelector } from 'react-redux'
import {
	TextField,
	Typography,
	Grid,
	Card,
	useMediaQuery,
	Radio,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
	inputContainer,
	inputItem,
	card,
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

const CharacterInformation = ({
	create,
	character,
	character2,
	changeValuesMapped,
	changeValuesNonMapped,
}) => {
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	// const mediumScreenAndUp = useMediaQuery(theme.breakpoints.up('md'))
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const handleInputValue = (e) => {
		const val = e.target.value
		changeValuesMapped(e.target.name, val)
	}

	const handleDiceInput = (e) => {
		const val = e.target.value
		changeValuesNonMapped(e.target.name, val)
	}

	const handleRadioSuccess = (e) => {
		if (character2.deathSaveSuccess.value === e.target.value) {
			changeValuesNonMapped(character2.deathSaveSuccess.name, '')
		} else {
			changeValuesNonMapped(character2.deathSaveSuccess.name, e.target.value)
		}
	}

	const handleRadioFail = (e) => {
		if (character2.deathSaveFail.value === e.target.value) {
			changeValuesNonMapped(character2.deathSaveFail.name, '')
		} else {
			changeValuesNonMapped(character2.deathSaveFail.name, e.target.value)
		}
	}

	return (
		<Card
			sx={mediumScreenAndDown ? { ...card, margin: '0 auto 1rem auto' } : card}
		>
			<Grid container spacing={2} sx={inputContainer}>
				{Object.keys(character).map((name) => {
					return (
						<Grid item xs={4} key={name} sx={inputItem}>
							<TextField
								label={
									name === 'armorClass' && smallScreenAndDown
										? character[name].smallTitle
										: character[name].title
								}
								name={name}
								disabled={create ? false : areInputsDisabled}
								value={character[name].value}
								onChange={handleInputValue}
								InputProps={{
									inputProps: { style: { textAlign: 'center' } },
								}}
							/>
						</Grid>
					)
				})}

				{/* Hit Dice */}
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
										disabled={create ? false : areInputsDisabled}
										name={character2.hitDiceTotal.name}
										value={character2.hitDiceTotal.value}
										onChange={handleDiceInput}
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
								disabled={create ? false : areInputsDisabled}
								name={character2.hitDiceType.name}
								value={character2.hitDiceType.value}
								onChange={handleDiceInput}
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

				{/* Death Saves */}
				<Grid item sm={6} xs={12} sx={deathSavesContainer}>
					<Grid container sx={deathSaveSuccesses}>
						<Grid item md={12}>
							<Typography sx={deathSaveSuccessesTypography}>
								Successes
							</Typography>
						</Grid>

						<Grid item>
							{['s1', 's2', 's3'].map((item) => {
								return (
									<Radio
										key={item}
										disabled={create ? true : areInputsDisabled}
										size='small'
										value={item}
										onClick={handleRadioSuccess}
										name={character2.deathSaveSuccess.name}
										checked={character2.deathSaveSuccess.value === item}
									/>
								)
							})}
						</Grid>
					</Grid>
					<Grid container sx={deathSaveFailures}>
						<Grid item md={12}>
							<Typography sx={deathSaveFailuresTypography}>Failures</Typography>
						</Grid>
						<Grid item>
							{['f1', 'f2', 'f3'].map((item) => {
								return (
									<Radio
										key={item}
										disabled={create ? true : areInputsDisabled}
										size='small'
										value={item}
										onClick={handleRadioFail}
										name={character2.deathSaveFail.name}
										checked={character2.deathSaveFail.value === item}
									/>
								)
							})}
						</Grid>
					</Grid>
					<Typography variant='h6' sx={deathSaveTypography}>
						Death Saves
					</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}

export default CharacterInformation
