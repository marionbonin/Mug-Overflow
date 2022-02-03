import React from 'react';
import { useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCardGallery from '../ProductCard/productCardGallery';

import './styleAlice.scss';

// const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};


export default function Gallery({ title, ...homepageProducts }) {
  const latestProducts = homepageProducts[0];
  const favoriteProducts = homepageProducts[1];
  const randomProducts = homepageProducts[2];
  let productsToDisplay = '';

  if (title === 'Les derniers en date') {
    productsToDisplay = latestProducts;
  }
  if (title === 'Les préférés de votre promo') {
    productsToDisplay = favoriteProducts;
  }
  if (title === 'Pas d\'inspiration ?') {
    productsToDisplay = randomProducts;
  }

  return (
    <>
      <h2 id="category-title">{title}</h2>
      <AliceCarousel
        mouseTracking
        key={title}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}
      >
        {productsToDisplay.map((productToDisplay) => (
          <ProductCardGallery className="item" key={productToDisplay.id} props={productToDisplay} />
        ))}

      </AliceCarousel>
    </>
  );
}
