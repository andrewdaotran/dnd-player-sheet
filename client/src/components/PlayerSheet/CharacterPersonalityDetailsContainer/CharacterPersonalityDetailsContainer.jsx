import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
	const detailCategories = useSelector((state) => state.characterDetails)

	return (
		<Container>
			<Card sx={card}>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Character Details</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{Object.keys(detailCategories).map((detail) => {
							return (
								<DetailCategory {...detailCategories[detail]} key={detail} />
							)
						})}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Container>
	)
}

export default CharacterPersonalityDetailsContainer
