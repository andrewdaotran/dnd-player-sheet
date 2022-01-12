import { useState, useEffect } from 'react'

import {
	Container,
	Card,
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Grid,
	TextField,
	Typography,
	IconButton,
	Button,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import {
	addButton,
	detailTextField,
	detailTitleTypography,
	detailTypography,
	submitButton,
	cancelButton,
} from './styles'

const DetailCategory = ({ detail }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [detailContent, setDetailContent] = useState('')

	const handleIsEditing = () => {
		setIsEditing(!isEditing)
	}

	const submitDetails = () => {
		setIsEditing(!isEditing)
		setDetailContent('')
	}

	const cancelAdding = () => {
		setIsEditing(!isEditing)
		setDetailContent('')
	}

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant='subtitle1' sx={detailTitleTypography}>
					{detail}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='body2' sx={detailTypography}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
				<Typography variant='body2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
				{isEditing ? (
					<>
						<TextField
							fullWidth
							multiline={true}
							rows={3}
							sx={detailTextField}
							value={detailContent}
							onChangeCapture={(e) => setDetailContent(e.target.value)}
						></TextField>
						<Button
							variant='contained'
							onClick={submitDetails}
							sx={submitButton}
						>
							Submit
						</Button>
						<Button
							variant='contained'
							onClick={cancelAdding}
							sx={cancelButton}
						>
							Cancel
						</Button>
					</>
				) : null}
			</AccordionDetails>
			{!isEditing ? (
				<IconButton sx={addButton} onClick={handleIsEditing}>
					<AddIcon />
				</IconButton>
			) : null}
		</Accordion>
	)
}

export default DetailCategory
