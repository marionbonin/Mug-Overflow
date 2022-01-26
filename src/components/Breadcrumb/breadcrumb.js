import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Accueil
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/categories/"
        >
          Catégories
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/categories/categorie1/"
          aria-current="page"
        >
          Catégorie 1
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/categories/categorie1/produit1"
          aria-current="page"
        >
          Produit 1
        </Link>
      </Breadcrumbs>
    </div>
  );
}
