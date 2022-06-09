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

const AttacksAndSpellcastingAccordion = ({ create }) => {
	return (
		<Container sx={container}>
			<Paper sx={{ border: 'none' }}>
				<Accordion defaultExpanded={create ? true : false}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography variant='h6'>Attacks and Spellcasting</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<AttacksAndSpellcasting create={create} />
					</AccordionDetails>
				</Accordion>
			</Paper>
		</Container>
	)
}

export default AttacksAndSpellcastingAccordion
