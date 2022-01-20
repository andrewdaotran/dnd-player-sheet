import { useState, useEffect } from 'react'

import {
	Container,
	Card,
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import DetailCategory from './DetailCategory/DetailCategory'
import { card } from './styles'

const CharacterPersonalityDetailsContainer = () => {
	const [detailCategories, setDetailCategories] = useState([
		'Personality Traits',
		'Ideals',
		'Bonds',
		'Flaws',
		'Proficiencies and Languages',
		'Senses',
		'Notes',
	])
	return (
		<Container>
			<Card sx={card}>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Character Details</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{detailCategories.map((detail) => {
							return <DetailCategory detail={detail} key={detail} />
						})}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Container>
	)
}

export default CharacterPersonalityDetailsContainer
