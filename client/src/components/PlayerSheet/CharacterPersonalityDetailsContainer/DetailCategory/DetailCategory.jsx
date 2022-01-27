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
import EditIcon from '@mui/icons-material/Edit'

import {
	addButton,
	detailTextField,
	detailTitleTypography,
	detailTypography,
	submitButton,
	cancelButton,
} from './styles'

const DetailCategory = ({ detail }) => {
	const [isAdding, setIsAdding] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [detailItems, setDetailItems] = useState(
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quidem qui repudiandae blanditiis impeditdelectus? Odio saepe a, obcaecati sed quam soluta quos, fuga nihil pariatur molestiae, reiciendis exercitationem.'
	)
	const [proficiencies, setProficiencies] = useState([
		'Armor',
		'Weapons',
		'Tools',
		'Languages',
	])

	const [detailContent, setDetailContent] = useState('')

	const handleIsEditing = (e) => {
		setDetailItems(e.target.value)
	}

	const submitDetailItemEdit = () => {
		setIsEditing(false)
	}

	const cancelEditing = () => {
		setIsEditing(false)
	}

	const handleIsAdding = () => {
		setIsAdding(!isAdding)
	}

	const submitDetails = (e) => {
		e.preventDefault()
		setIsAdding(!isAdding)
		setDetailContent('')
	}

	const cancelAdding = () => {
		setIsAdding(!isAdding)
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
				{detail === 'Proficiencies and Languages' ? (
					proficiencies.map((proficiency) => {
						return (
							<Accordion key={proficiency}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography variant='subtitle1' sx={detailTitleTypography}>
										{proficiency}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										{isEditing ? (
											<>
												<Grid item xs={12}>
													<TextField
														fullWidth
														multiline={true}
														rows={3}
														value={detailItems}
														onChange={handleIsEditing}
													/>
													<Button
														variant='contained'
														onClick={submitDetailItemEdit}
														sx={submitButton}
														// type='submit'
													>
														Submit
													</Button>

													<Button
														variant='contained'
														onClick={cancelEditing}
														sx={cancelButton}
													>
														Cancel
													</Button>
												</Grid>
											</>
										) : (
											<>
												<Grid item xs={11}>
													<Typography variant='body2' sx={detailTypography}>
														{detailItems}
													</Typography>
												</Grid>
												<Grid item>
													<Grid item xs={1}>
														<IconButton onClick={() => setIsEditing(true)}>
															<EditIcon />
														</IconButton>
													</Grid>
												</Grid>
											</>
										)}
										{isAdding ? (
											<>
												<TextField
													fullWidth
													multiline={true}
													rows={3}
													sx={detailTextField}
													value={detailContent}
													onChange={(e) => setDetailContent(e.target.value)}
												></TextField>
												<Button
													variant='contained'
													onClick={submitDetails}
													sx={submitButton}
													type='submit'
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
										) : (
											<IconButton sx={addButton} onClick={handleIsAdding}>
												<AddIcon />
											</IconButton>
										)}
									</Grid>
								</AccordionDetails>
							</Accordion>
						)
					})
				) : (
					<Grid container>
						{isEditing ? (
							<>
								<Grid item xs={12}>
									<TextField
										fullWidth
										multiline={true}
										rows={3}
										value={detailItems}
										onChange={handleIsEditing}
									/>
									<Button
										variant='contained'
										onClick={submitDetailItemEdit}
										sx={submitButton}
										// type='submit'
									>
										Submit
									</Button>

									<Button
										variant='contained'
										onClick={cancelEditing}
										sx={cancelButton}
									>
										Cancel
									</Button>
								</Grid>
							</>
						) : (
							<>
								<Grid item xs={11}>
									<Typography variant='body2' sx={detailTypography}>
										{detailItems}
									</Typography>
								</Grid>
								<Grid item>
									<Grid item xs={1}>
										<IconButton onClick={() => setIsEditing(true)}>
											<EditIcon />
										</IconButton>
									</Grid>
								</Grid>
							</>
						)}
					</Grid>
				)}
			</AccordionDetails>
		</Accordion>
	)
}

export default DetailCategory
