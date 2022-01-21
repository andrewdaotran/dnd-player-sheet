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

import { addData } from '../../../../features/character-sheet/characterSheetSlice'

const CharacterInformation = ({ create }) => {
	const dispatch = useDispatch()
	const characterSheet = useSelector((state) => state.characterSheet)
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	// const mediumScreenAndUp = useMediaQuery(theme.breakpoints.up('md'))
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	//refactor so names are not character and character2
	const character = {
		armorClass: characterSheet.armorClass,
		initiative: characterSheet.initiative,
		speed: characterSheet.speed,
	}

	const character2 = {
		hitDiceTotal: characterSheet.hitDiceTotal,
		hitDiceType: characterSheet.hitDiceType,
		deathSaveSuccess: characterSheet.deathSaveSuccess,
		deathSaveFail: characterSheet.deathSaveFail,
	}

	const handleInputs = (e) => {
		dispatch(
			addData({
				...characterSheet,
				[e.target.name]: {
					...characterSheet[e.target.name],
					value: e.target.value,
				},
			})
		)
	}
	const handleRadio = (e) => {
		let val = ''
		if (
			e.target.value === character2.deathSaveSuccess.value ||
			e.target.value === character2.deathSaveFail.value
		) {
			val = ''
		} else {
			val = e.target.value
		}
		dispatch(
			addData({
				...characterSheet,
				[e.target.name]: {
					...characterSheet[e.target.name],
					value: val,
				},
			})
		)
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
										name={character2.hitDiceTotal.name}
										value={character2.hitDiceTotal.value}
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
								name={character2.hitDiceType.name}
								value={character2.hitDiceType.value}
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
										disabled={create ? true : areInputsDisabled}
										size='small'
										value={item}
										onClick={handleRadio}
										name={character2.deathSaveSuccess.name}
										checked={character2.deathSaveSuccess.value === item}
									/>
								)
							})}
						</Grid>
					</Grid>

					{/* Death Saves Fail */}
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
										onClick={handleRadio}
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
