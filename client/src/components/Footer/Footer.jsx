import {
	AppBar,
	Box,
	Container,
	Grid,
	Toolbar,
	Typography,
} from '@mui/material'

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import GitHubIcon from '@mui/icons-material/GitHub'

import {
	container,
	footerText,
	iconsContainer,
	icons,
	iconsTypography,
} from './styles'

const Footer = () => {
	return (
		<footer>
			<Box sx={container}>
				<Container>
					<Typography variant='h4' sx={footerText}>
						andrew tran
					</Typography>
					<Grid container sx={iconsContainer}>
						<Grid item sx={icons}>
							<div style={{ textAlign: 'center' }}>
								<LaptopChromebookIcon />
							</div>
							<Typography variant='body1' sx={iconsTypography}>
								Portfolio
							</Typography>
						</Grid>
						<Grid item sx={icons}>
							<div style={{ textAlign: 'center' }}>
								<GitHubIcon />
							</div>
							<Typography variant='body1' sx={iconsTypography}>
								GitHub
							</Typography>
						</Grid>
						<Grid item sx={icons}>
							<div style={{ textAlign: 'center' }}>
								<MenuBookIcon />
							</div>
							<Typography variant='body1' sx={iconsTypography}>
								Blog
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	)
}

export default Footer
