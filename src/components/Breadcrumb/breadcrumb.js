import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

import './style.scss';

function handleClick(event) {
  event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" id="breadcrumb-global">
        <Link underline="hover" color="inherit" to="/">
          Accueil
        </Link>
        <Link
          underline="hover"
          to="/categories/"
        >
          Catégories
        </Link>
        <Link
          underline="hover"
          to="/categories/categorie1/"
          aria-current="page"
        >
          Catégorie 1
        </Link>
        <Link
          underline="hover"
          to="/categories/categorie1/produit1"
          aria-current="page"
        >
          Produit 1
        </Link>
      </Breadcrumbs>
    </div>
  );
}
