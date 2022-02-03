import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCardGallery from '../ProductCard/productCardGallery';

import './styleAlice.scss';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
  <ProductCardGallery className="item" />,
];

export default function Gallery() {
  return (
    <>
      <h2 id="category-title">Titre du carousel</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite={true}
      />
    </>
  );
}
