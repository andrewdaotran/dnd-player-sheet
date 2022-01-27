import {
	Container,
	Paper,
	Accordion,
	Typography,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { container } from './styles'

import AttacksAndSpellcasting from './AttacksAndSpellcasting/AttacksAndSpellcasting'

const AttacksAndSpellcastingAccordion = () => {
	return (
		<Container sx={container}>
			<Paper>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Attacks and Spellcasting</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<AttacksAndSpellcasting />
					</AccordionDetails>
				</Accordion>
			</Paper>
		</Container>
	)
}

export default AttacksAndSpellcastingAccordion
