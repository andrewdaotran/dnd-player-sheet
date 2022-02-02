import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const _AccordionGroupComponent = ({ title, variant }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant={variant}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{/* {categories.map((category) => {
					return <_AccordionCategory category={category} key={category} />
				})} */}
			</AccordionDetails>
		</Accordion>
	)
}

export default _AccordionGroupComponent
