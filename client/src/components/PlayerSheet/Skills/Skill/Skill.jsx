import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Typography,
	Grid,
	Checkbox,
	useMediaQuery,
	Popover,
	Container,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import axios from 'axios'

import {
	updateCheck,
	injectDescription,
} from '../../../../features/character-sheet/characterSheetSlice'

import { skillContainer } from './styles'
const Skill = ({
	name,
	title,
	checked,
	modifier,
	description,
	abilityScore,
	url,
	create,
}) => {
	const dispatch = useDispatch()
	const theme = useTheme()
	const areInputsDisabled = useSelector((state) => state.disableInputs.toggle)
	const fourMaxChecked = useSelector(
		(state) => state.characterSheet.skills.fourMaxChecked
	)
	const smallScreenAndUp = useMediaQuery(theme.breakpoints.up('sm'))
	const [anchor, setAnchor] = useState(null)

	const getDescription = async () => {
		const {
			data: { desc },
		} = await axios.get(url)
		dispatch(injectDescription({ name: name, desc }))
	}

	useEffect(() => {
		if (create) {
			getDescription()
		}
	}, [])

	const handleCheck = () => {
		dispatch(updateCheck(name))
	}

	const handleMouseOver = (e) => {
		setAnchor(e.currentTarget)
	}

	const handleMouseLeave = () => {
		setAnchor(null)
	}

	return (
		<Grid item xs={6} md={4}>
			<Grid container spacing={2} sx={skillContainer}>
				<Grid item xs={2}>
					<Checkbox
						checked={checked}
						onChange={handleCheck}
						disabled={
							!create && areInputsDisabled
								? true
								: (fourMaxChecked === 4 && checked) || fourMaxChecked < 4
								? false
								: true
						}
					/>
				</Grid>
				<Grid item xs={2}>
					<Typography>
						{/* added modifiers: proficiency bonus, stats, and class/race bonus */}
						{modifier}
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant={'subtitle2'}
						onMouseEnter={handleMouseOver}
						onMouseLeave={handleMouseLeave}
					>
						{title} {smallScreenAndUp ? ` (${abilityScore.abbrev})` : null}
					</Typography>
					{create ? (
						<Popover
							sx={{
								pointerEvents: 'none',
							}}
							anchorEl={anchor}
							open={Boolean(anchor)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							onClose={handleMouseLeave}
							disableRestoreFocus
						>
							<Container>
								<Typography>{description}</Typography>
							</Container>
						</Popover>
					) : null}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skill
