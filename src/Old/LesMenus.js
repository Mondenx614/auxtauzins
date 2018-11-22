import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuRestau from './MenuRestau';
import TopBarRestaurant from '../Restaurant/TopBarRestaurant';
import InfosRestau from './InfosRestau';

import dessert_menu_terroir from '../images/menus/dessert_menu_terroir.jpg';
import salade_landaise from '../images/menus/salade_landaise.jpg';
import mousse_au_grand_marnier from '../images/menus/mousse_au_grand_marnier.jpg';
import tournedos_landais from '../images/menus/tournedos_landais.jpg';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
}

class LesMenus extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  render() {
    const { classes } = this.props;
    return(
      <div>
        <TopBarRestaurant />
        <div className={classes.root}>
          <MenuRestau content={terroir} imgs={imgs_terroir} color='0' pair />
          <MenuRestau content={chalossais} imgs={imgs_chalossais} color='#FAFAFA' pair />
          <MenuRestau content={gourmand} imgs={imgs_gourmand} color='0' pair />
          <MenuRestau content={gastro} imgs={imgs_gastro} color='#FAFAFA' pair/>
        </div>
        <InfosRestau />
      </div>
    )
  }
}

export default withStyles(styles)(LesMenus);

const terroir = {
  name: 'Menu du terroir',
  entree: 'Assiette du terroir / Garbure Landaise',
  plat: 'Coq fermier sauce Madiran / Brochette de coeurs de canard',
  dessert: 'Pâtisserie maison / Glace',
  prix: 26,
}

const chalossais = {
  name: 'Menu Chalossais',
  entree: 'Magret froid fourré au foie gras sur lit de salade',
  plat: 'Confit de canard Chalossais, pommes-frites',
  dessert: 'Assiette de sorbets',
  prix: 32,
}

const gourmand = {
  name: 'Menu Gourmand',
  entree: 'Poisson de la marée / Omelette aux cèpes',
  plat: 'Civet de gibier façon grand-mère / Magret de canard sauce au poivre',
  dessert: 'Coupe Melba',
  prix: 36,
}

const gastro = {
  name: 'Menu Gastronomique',
  entree: 'Salade de gésiers d\'oie',
  plat: 'Foie gras chaud aux raisins / Tournedos de boeuf',
  dessert: 'Coupe Melba',
  prix: 36,
}

const imgs_terroir = [
  {
    label: 'assiette terroir',
    imgPath:
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const imgs_chalossais = [
  {
    label: 'salade landaise',
    imgPath:
    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  }
];

const imgs_gourmand = [
  {
    label: 'coupe Melba',
    imgPath:
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  }
];

const imgs_gastro = [
  {
    label: 'tournedos boeuf',
    imgPath:
      tournedos_landais
  },
];