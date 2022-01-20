import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Box,
	Typography,
	Grid,
	Container,
	Paper,
	TextField,
	Checkbox,
	useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import axios from 'axios'

import { addCheck, removeCheck } from '../../../../features/skills/skillsSlice'
import { skillContainer } from './styles'
const Skill = ({ skill }) => {
	const dispatch = useDispatch()
	const fourMaxChecked = useSelector((state) => state.skills.fourMaxChecked)
	const [skillData, setSkillData] = useState({})
	const [checked, setChecked] = useState(false)

	const handleCheck = () => {
		if (checked) {
			dispatch(removeCheck())
		} else {
			dispatch(addCheck())
		}
		setChecked(!checked)
	}

	const getSkillAbility = async () => {
		const { data } = await axios.get(`https://www.dnd5eapi.co${skill.url}`)
		setSkillData(data)
	}
	useEffect(() => {
		getSkillAbility()
	}, [])

	const theme = useTheme()
	const smallScreenAndDown = useMediaQuery(theme.breakpoints.down('sm'))

	// console.log(skillData.ability_score)

	return (
		<Grid item xs={6} md={4}>
			<Grid container spacing={2} sx={skillContainer}>
				<Grid item xs={2}>
					<Checkbox
						checked={checked}
						onChange={handleCheck}
						disabled={
							(fourMaxChecked === 4 && checked) || fourMaxChecked < 4
								? false
								: true
						}
					/>
				</Grid>
				<Grid item xs={2}>
					<Typography>
						{/* added modifiers: proficiency bonus, stats, and class/race bonus */}
						3
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant={'subtitle2'}>
						{skill.name}
						{/* for some reason the app breaks if it starts on a small screen, please fix */}
						{/* {`(${skillData.ability_score.name})`} */}
						{/* {smallScreenAndDown ? null : `(${skillData.ability_score.name})`} */}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Skill
