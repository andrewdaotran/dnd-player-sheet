import { useSelector, useDispatch } from 'react-redux'
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

import { updateCharacterInformation } from '../../../../features/character-sheet/characterInformationSlice'

const CharacterInformation = ({ create }) => {
	const dispatch = useDispatch()
	const characterInformation = useSelector(
		(state) => state.characterInformation
	)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	// const mediumScreenAndUp = useMediaQuery(theme.breakpoints.up('md'))
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	const character = {
		armorClass: characterInformation.armorClass,
		initiative: characterInformation.initiative,
		speed: characterInformation.speed,
	}

	const handleInputs = (e) => {
		dispatch(
			updateCharacterInformation({ name: e.target.name, input: e.target.value })
		)
	}
	const handleRadio = (e) => {
		let val = ''
		if (
			e.target.value === characterInformation.deathSaveSuccess.value ||
			e.target.value === characterInformation.deathSaveFail.value
		) {
			val = ''
		} else {
			val = e.target.value
		}
		dispatch(updateCharacterInformation({ name: e.target.name, input: val }))
	}

	return (
		<Card
			sx={mediumScreenAndDown ? { ...card, margin: '0 auto 1rem auto' } : card}
		>
			{/* Armor Class, Initiative, and Speed Inputs */}
			<Grid container spacing={2} sx={inputContainer}>
				{Object.keys(character).map((name) => {
					return (
						<Grid item xs={4} key={name} sx={inputItem}>
							<TextField
								label={
									name === 'armorClass' && smallScreenAndDown
										? character[name].abbrev
										: character[name].title
								}
								name={name}
								disabled={create ? false : areInputsDisabled}
								value={character[name].value}
								onChange={handleInputs}
								InputProps={{
									inputProps: { style: { textAlign: 'center' } },
								}}
							/>
						</Grid>
					)
				})}

				{/* Hit Dice Total */}
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
										name={characterInformation.hitDiceTotal.name}
										value={characterInformation.hitDiceTotal.value}
										onChange={handleInputs}
										InputProps={{
											inputProps: { style: { textAlign: 'center' } },
										}}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/* Hit Dice Type */}
					<Grid container sx={hitDiceNumberContainer}>
						<Grid item>
							<TextField
								disabled={create ? false : areInputsDisabled}
								name={characterInformation.hitDiceType.name}
								value={characterInformation.hitDiceType.value}
								onChange={handleInputs}
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

				{create ? null : (
					<Grid item sm={6} xs={12} sx={deathSavesContainer}>
						{/* Death Saves Success */}
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
											// disabled={create ? true : areInputsDisabled}
											size='small'
											value={item}
											onClick={handleRadio}
											name={characterInformation.deathSaveSuccess.name}
											checked={
												characterInformation.deathSaveSuccess.value === item
											}
										/>
									)
								})}
							</Grid>
						</Grid>

						{/* Death Saves Fail */}
						<Grid container sx={deathSaveFailures}>
							<Grid item md={12}>
								<Typography sx={deathSaveFailuresTypography}>
									Failures
								</Typography>
							</Grid>
							<Grid item>
								{['f1', 'f2', 'f3'].map((item) => {
									return (
										<Radio
											key={item}
											// disabled={create ? true : areInputsDisabled}
											size='small'
											value={item}
											onClick={handleRadio}
											name={characterInformation.deathSaveFail.name}
											checked={
												characterInformation.deathSaveFail.value === item
											}
										/>
									)
								})}
							</Grid>
						</Grid>
						<Typography variant='h6' sx={deathSaveTypography}>
							Death Saves
						</Typography>
					</Grid>
				)}
			</Grid>
		</Card>
	)
}

export default CharacterInformation
