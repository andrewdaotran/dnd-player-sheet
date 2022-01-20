import { useState } from 'react'

import {
	Box,
	Typography,
	Grid,
	Container,
	Paper,
	TextField,
	Checkbox,
} from '@mui/material'

import Skill from './Skill/Skill'

// to be deleted

import { getSkills } from '../../../api/dndApi'
// to be deleted

import { skillsContainer, skillsTypography, paper } from './styles'

const Skills = () => {
	// to be deleted
	const [skills, setSkills] = useState([])

	const gettingSkills = async () => {
		const { data } = await getSkills()
		setSkills(data.results)
	}

	useState(() => {
		gettingSkills()
	}, [])

	console.log(skills)

	// to be deleted
	return (
		<Container sx={skillsContainer}>
			<Paper>
				<Grid container sx={paper}>
					<Grid item xs={12}>
						<Typography variant={'h6'} sx={skillsTypography}>
							Skills
						</Typography>
					</Grid>
					{skills.map((skill) => {
						return <Skill key={skill.index} skill={skill} />
					})}
				</Grid>
			</Paper>
		</Container>
	)
}

export default Skills
