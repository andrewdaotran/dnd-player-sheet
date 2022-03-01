import { useSelector } from 'react-redux'

import {
	Container,
	Card,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { card } from './styles'

import DetailCategory from './DetailCategory/DetailCategory'

const CharacterPersonalityDetailsContainer = ({ create }) => {
	const detailCategories = useSelector(
		(state) => state.characterSheet.characterDetails
	)

	return (
		<Container>
			<Card sx={card}>
				<Accordion defaultExpanded={create ? true : false}>
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
