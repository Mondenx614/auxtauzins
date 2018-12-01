import React, { Component } from 'react';

import united_kingdom from '../images/logos/united_kingdom.png';
import chene from '../images/logos/chene.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import tripadvisor from '../images/logos/tripadvisor.png';
import logo_video from '../images/logos/video.png';

import { withStyles, Typography, Switch, Button, Dialog, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
	hundred: {
		height: '100%',
	},
	root: {
		height: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	contactElt: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: '10px',
	},
	titleElt: {
		textAlign: 'center',
		textShadow: '0 0 4px #000000',
	},
	contact: {
		textShadow: '0 0 2px #000000',
		padding: 5,
		border: '2px solid white',
		borderRadius: '10px',
		textTransform: 'none',
	},
	chene: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		height: '75px',
	},
	link: {
		textDecoration: 'none',
	},
	cliquable: {
		textDecoration: 'underline',
	},
	switchContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	reserver: {

	},
	socialMedia: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
}

class FirstLayer extends Component {
	state = {
    open: false,
  }

  handleOpen = () => {
      this.setState({open: true})
  }

  handleClose = () => {
      this.setState({open: false})
	}
	
  render() {
		const { classes, checked, link, image } = this.props;
    return(
    	<div className={classes.hundred}>
				<div className={classes.root} style={{backgroundImage:`url(${image})`}}>
					<div className={classes.contactElt}>
						<Link to='/' style={{textDecoration: 'none'}}>
							<img className={classes.chene} src={chene} alt='logo' />
						</Link>
						<Button className={classes.contact} color='secondary' href='#contact'>
							Nous contacter
						</Button>
						<Button>
							<img 
								src={united_kingdom}
								alt='English version'
								style={{height:'35px', padding:0}}/>
						</Button>
					</div>
					<div className={classes.titleElt}>
						<div className={classes.switchContainer}>
							<Link className={classes.link} to='/'>
								<Typography 
									className={classes.cliquable}
									color='secondary'
									variant='h5'
									style={{width:'120px'}}
								>
									Restaurant
								</Typography>
							</Link>
							<Link to={link}>
								<Switch
									checked={checked}
								/>   
							</Link>
							<Link className={classes.link} to='/hotel'>
								<Typography
									className={classes.cliquable}
									color='secondary'
									variant='h5'
									style={{width:'120px', textAlign:'justify'}}
								>
									Hôtel
								</Typography>
							</Link>
						</div>
						<Button 
							className={classes.reserver}
							href='https://www.logishotels.com/fr/tarifs-et-disponibilites-chambre?id=1516'
							color='secondary'
						>
							Réserver
						</Button>

					</div>
					<div className={classes.socialMedia}>
						<a href='https://www.facebook.com/auxtauzins'>
							<img style={{height:'50px', paddingRight:'10px'}} src={facebook} alt='Logo Facebook' />
						</a>
						<a href='https://www.instagram.com/auxtauzins/'>
							<img style={{height:'50px', paddingRight:'10px'}} src={instagram} alt='Logo Instagram' />
						</a>
						<a href='https://www.tripadvisor.fr/Restaurant_Review-g2068609-d3978484-Reviews-Aux_Tauzins-Montfort_en_Chalosse_Landes_Nouvelle_Aquitaine.html'>
							<img style={{height:'50px', paddingRight: '10px'}} src={tripadvisor} alt='Logo Instagram' />
						</a>
						<div>
							<Tooltip title="Visionnez la vidéo de l'établissement">
								<img 
									src={logo_video}
									alt='logo video'
									onClick={this.handleOpen}
									style={{height:'50px'}}
								/>
							</Tooltip>
           		<Dialog open={this.state.open} onClose={this.handleClose}>
              	<iframe title="presentation" src="https://player.vimeo.com/video/138057164?title=0&byline=0&portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                </iframe>
            	</Dialog>
        		</div>
					</div>
				</div>
			</div>
    );
  }
}

FirstLayer.propTypes = {
  classes: PropTypes.object.isRequired,
	checked: PropTypes.bool.isRequired,
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default withStyles(styles)(FirstLayer);