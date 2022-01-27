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
	addCheck,
	removeCheck,
	injectDescription,
} from '../../../../features/skills/skillsSlice'

import { skillContainer } from './styles'
const Skill = ({ skill, create }) => {
	const dispatch = useDispatch()
	const theme = useTheme()
	const fourMaxChecked = useSelector((state) => state.skills.fourMaxChecked)
	const smallScreenAndUp = useMediaQuery(theme.breakpoints.up('sm'))
	const [anchor, setAnchor] = useState(null)

	const getDescription = async () => {
		const {
			data: { desc },
		} = await axios.get(skill.url)
		dispatch(injectDescription({ name: skill.name, desc }))
	}

	useEffect(() => {
		getDescription()
	}, [])

	const handleCheck = () => {
		if (skill.checked) {
			dispatch(removeCheck(skill.name))
		} else {
			dispatch(addCheck(skill.name))
		}
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
						checked={skill.checked}
						onChange={handleCheck}
						disabled={
							(fourMaxChecked === 4 && skill.checked) || fourMaxChecked < 4
								? false
								: true
						}
					/>
				</Grid>
				<Grid item xs={2}>
					<Typography>
						{/* added modifiers: proficiency bonus, stats, and class/race bonus */}
						{skill.modifier}
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant={'subtitle2'}
						onMouseEnter={handleMouseOver}
						onMouseLeave={handleMouseLeave}
					>
						{skill.title}{' '}
						{smallScreenAndUp ? ` (${skill.abilityScore.abbrev})` : null}
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
								<Typography>{skill.description}</Typography>
							</Container>
						</Popover>
					) : null}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skill
