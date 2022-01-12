import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	Container,
	Paper,
	InputLabel,
	FormControl,
	Select,
	MenuItem,
	TextField,
	Grid,
	Card,
	Box,
	useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
	container,
	inputContainer,
	inputItem,
	card,
	selectItem,
} from './styles'
const PlayerInformation = () => {
	//need to pull player information from backend from authorization and character sheet, put into state value
	const [selectLabels, setSelectLabels] = useState([
		'Class',
		'Race',
		'Background',
		'Alignment',
	])
	const [selectItems, setSelectItems] = useState([
		['Bard', 'Rogue', 'Wizard'],
		['Elf', 'Halfling', 'Human'],
		['Holy', 'Evil', 'Carpenter'],
		['Good', 'Neutral', 'Evil'],
	])
	const [inputLabels, setLabels] = useState(['Level', 'Experience Points'])

	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)

	const theme = useTheme()
	const mediumScreenAndDown = useMediaQuery(theme.breakpoints.down('md'))

	const handleSelectChange = () => {}

	return (
		<Container
			sx={
				mediumScreenAndDown
					? { ...container, margin: '1rem auto 0 auto' }
					: container
			}
		>
			<Card sx={card}>
				<Grid container spacing={2} sx={inputContainer}>
					{selectLabels.map((label, index) => {
						return (
							//likely needs fixing. Changed text fields to selects and the widths are not consistent
							<Grid item md={6} sm={4} key={label}>
								<Box sx={selectItem}>
									<FormControl fullWidth>
										<InputLabel>{label}</InputLabel>
										<Select
											// value={age}
											label={label}
											// onChange={handleChange}
										>
											{selectItems[index].map((selectItem) => {
												return (
													<MenuItem value={selectItem}>{selectItem}</MenuItem>
												)
											})}
										</Select>
									</FormControl>
								</Box>
							</Grid>
						)
					})}
					{inputLabels.map((label) => {
						return (
							<Grid item md={6} sm={4} key={label} sx={inputItem}>
								<TextField
									label={label}
									disabled={areInputsDisabled}
									InputProps={{
										inputProps: {
											style: {
												textAlign: 'center',
											},
										},
									}}
								/>
							</Grid>
						)
					})}
				</Grid>
			</Card>
		</Container>
	)
}

export default PlayerInformation
