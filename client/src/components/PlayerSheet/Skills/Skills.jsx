import { Typography, Grid, Container, Paper } from '@mui/material'

import Skill from './Skill/Skill'

import {
	skillsContainer,
	skillsTypography,
	paper,
	note,
	expertise,
	proficiency,
} from './styles'
import { useSelector } from 'react-redux'
import { themeColors } from '../../../utils'

const Skills = ({ create }) => {
	const skills = useSelector((state) => state.characterSheet.skills.skills)

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
						return <Skill create={create} key={skill} {...skills[skill]} />
					})}
				</Grid>
				<Typography variant='h5' sx={note}>
					Check once for{' '}
					<span style={{ color: themeColors.lighterDirtyOrange }}>
						proficiency
					</span>{' '}
					, check again for{' '}
					<span style={{ color: themeColors.offBlack }}>expertise</span>.
				</Typography>
				<Typography sx={proficiency}>
					<span style={{ fontWeight: 'bold' }}>Gold: </span>Proficiency
				</Typography>
				<Typography sx={expertise}>
					<span style={{ fontWeight: 'bold' }}>Black: </span>
					Expertise
				</Typography>
			</Paper>
		</Container>
	)
}

export default Skills
