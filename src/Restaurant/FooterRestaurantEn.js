import React, { Component } from 'react';

import tel_img from '../images/logos/tel.png';
import mail_img from '../images/logos/mail.png';
import position_img from '../images/logos/position.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import tripadvisor from '../images/logos/tripadvisor.png';
import logo_video from '../images/logos/video.png';
import logis from '../images/logos/logis.png';

import { withStyles, Typography, Grid, Button, Tooltip, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import { MobileView } from 'react-device-detect';

const styles = {
  backgroundColor: {
    backgroundColor: '#eceff1',
  },
  root: {
    margin: '30px 30px 0 30px',
    textAlign: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: '1.1em',
    color:'#01579b'
  },
  content: {
    textAlign: 'justify',
    margin: '10px',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    textTransform: 'none',
    textAlign: 'justify',
    fontStyle: 'normal',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
  picto: {
    height: '15px',
    paddingRight: '10px',
  },
  socialMedia: {
		paddingTop: '20px',
  },
	imgLogis: {
    height: '60px',
    paddingTop: '20px',
  },
  copyright: {
    marginLeft: '10px',
    fontSize: '0.8em'
  }
}

class FooterRestaurant extends Component {
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
    const { classes } = this.props;
    return(
			<div className={classes.backgroundColor}>
        <div className={classes.root}>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              className={classes.title}
              gutterBottom>
              About the restaurant
            </Typography>
            <Typography className={classes.content}>
              <ul style={{paddingLeft:0}}>
                <li>The restaurant welcomes you from midday to 1:45pm and from 7:30pm to 9pm</li>
                <li>Restaurant closed on <strong>Fridays</strong> (except group booking), on <strong>Sundays' dinner</strong> and on <strong>Mondays</strong></li>
                <li>From <strong>July 11 to August 20</strong>, the restaurant is open every day (except Monday lunch)</li>
                <li>The restaurant is <strong>fully accessible to persons with disabilities</strong></li>
                <li>Holliday and luncheon vouchers accepted</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              className={classes.title}
              gutterBottom>
              Our services
            </Typography>
            <Typography className={classes.content}>
              <ul style={{paddingLeft:0}}>
                <li>Free <strong>Wifi</strong> connection in the restaurant</li>
                <li>You can book the restaurant for birthdays, weddings, workshops…</li>
              </ul>
            </Typography>
          </Grid>

          <Grid className={classes.contact} id='contact' item xs={12} sm={12} md={4}>
            <Typography 
              className={classes.title} 
              gutterBottom>
              Reach us
            </Typography>
            <Button className={classes.button} href="tel:0558986022">
              <img className={classes.picto} src={tel_img} alt='tel' />05 58 98 60 22
            </Button>
            <Button className={classes.button} href="mailto:auxtauzins@wanadoo.fr">
              <img className={classes.picto} src={mail_img} alt='mail' />auxtauzins@wanadoo.fr
            </Button>
            <Button className={classes.button} target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/hotel+restaurant+AUX+TAUZINS/@43.709234,-0.8244906,18z/data=!3m1!4b1!4m5!3m4!1s0xd569bf8e0c594bf:0xdf3569df98d76aa8!8m2!3d43.709234!4d-0.8233963">
              <img className={classes.picto} src={position_img} alt='position' />547 route Raphael Lonné 40380, Montfort-en-Chalosse
            </Button>
          </Grid>
        </Grid>
        <MobileView>
						<div className={classes.socialMedia}>
							<a href='https://www.facebook.com/auxtauzins' target='_blank' rel="noopener noreferrer">
								<img style={{height:'40px', paddingRight:'10px'}} src={facebook} alt='Logo Facebook' />
							</a>
							<a href='https://www.instagram.com/auxtauzins/' target='_blank' rel="noopener noreferrer">
								<img style={{height:'40px', paddingRight:'10px'}} src={instagram} alt='Logo Instagram' />
							</a>
              <a href='https://www.tripadvisor.fr/Restaurant_Review-g2068609-d3978484-Reviews-Aux_Tauzins-Montfort_en_Chalosse_Landes_Nouvelle_Aquitaine.html' target='_blank' rel="noopener noreferrer">
                <img style={{height:'40px', paddingRight: '10px'}} src={tripadvisor} alt='Logo Tripadvisor' />
              </a>
							<Tooltip title="Visionnez la vidéo de l'établissement">
								<img 
									src={logo_video}
									alt='logo video'
									onClick={this.handleOpen}
									style={{height:'40px'}}
								/>
							</Tooltip>
							<Dialog open={this.state.open} onClose={this.handleClose}>
								<iframe title="presentation" src="https://player.vimeo.com/video/138057164?title=0&byline=0&portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
								</iframe>
							</Dialog>
						</div>
            <div>
							<a href='https://www.logishotels.com/fr' target='_blank' rel="noopener noreferrer">
								<img className={classes.imgLogis} src={logis} alt='logis hotel' />
							</a>
					</div>
					</MobileView>
        </div>
        <Typography className={classes.copyright} variant='body'>©Rémi Mondenx</Typography>
			</div>
    );
  }
}

FooterRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FooterRestaurant);
