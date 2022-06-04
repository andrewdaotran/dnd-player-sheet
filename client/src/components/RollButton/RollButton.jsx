import React, { useState } from 'react'
import {
	Fab,
	Popper,
	Fade,
	Box,
	ClickAwayListener,
	MenuList,
	MenuItem,
	Paper,
	Divider,
	Container,
	Card,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Zoom from '@mui/material/Zoom'
import CasinoIcon from '@mui/icons-material/Casino'
import Dice from 'react-dice-roll'

import { fab } from './styles'
const RollButton = () => {
	const theme = useTheme()
	const [value, setValue] = useState(0)
	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const canBeOpen = open && Boolean(anchorEl)
	const id = canBeOpen ? 'transition-popper' : undefined

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
		setOpen((previousOpen) => !previousOpen)
	}

	const handleClose = (event) => {
		if (event.currentTarget !== anchorEl) {
			setOpen(false)
		} else {
			return
		}
	}

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	}

	const dice = [
		{ value: 'd20' },
		{ value: 'd12' },
		{ value: 'd10' },
		{ value: 'd8' },
		{ value: 'd6' },
		{ value: 'd4' },
		{ value: 'coin' },
	]
	return (
		<>
			<Zoom
				unmountOnExit
				timeout={transitionDuration}
				in={true}
				style={{
					transitionDelay: transitionDuration.exit,
				}}
			>
				<Fab color='primary' aria-label='add' sx={fab} onClick={handleClick}>
					<CasinoIcon />
				</Fab>
			</Zoom>
			<Popper
				id={id}
				open={open}
				anchorEl={anchorEl}
				transition
				placement='top-end'
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open}>
									{dice
										.slice(0)
										.reverse()
										.map((die, index) => {
											return (
												<Container
													key={die.value}
													sx={{ justifyContent: 'center' }}
												>
													<MenuItem>{die.value}</MenuItem>
													<Divider />
												</Container>
											)
										})}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Fade>
				)}
			</Popper>
			<Dice onRoll={(value) => console.log(value)} defaultValue={20} />
		</>
	)
}

export default RollButton
