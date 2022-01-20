import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// import _AccordionCategory from '../_AccordionCategory/_AccordionCategory'

const _AccordionGroupComponent = ({ title, categories, setCategories }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='h6'>{title}</Typography>
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
