import { Typography, Grid, Container, Paper } from '@mui/material'

import Skill from './Skill/Skill'

import { skillsContainer, skillsTypography, paper } from './styles'
import { useSelector } from 'react-redux'

const Skills = ({ create }) => {
	const skills = useSelector((state) => state.skills.skills)

	return (
		<Container sx={skillsContainer}>
			<Paper>
				<Grid container sx={paper}>
					<Grid item xs={12}>
						<Typography variant={'h6'} sx={skillsTypography}>
							Skills
						</Typography>
					</Grid>
					{Object.keys(skills).map((skill) => {
						return <Skill create={create} key={skill} skill={skills[skill]} />
					})}
				</Grid>
			</Paper>
		</Container>
	)
}

export default Skills
