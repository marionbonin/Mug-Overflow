import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchRandomProducts, fetchFavoriteProducts, fetchLatestProducts } from '../../actions/products';

import Card from '../ProductCard/productCard';

// import MediaCard from '../ProductCard/productCard';

import './style.scss';

export default function CarouselElement({ title }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomProducts());
    dispatch(fetchFavoriteProducts());
    dispatch(fetchLatestProducts());
  }, []);

  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  const randomProducts = useSelector((state) => state.products.randomList);
  const favoriteProducts = useSelector((state) => state.products.favoriteList);
  const latestProducts = useSelector((state) => state.products.lastList);
  // console.log(favoriteProducts);

  // Remove % if needed, in case it skips a card
  let centerSlidePercentageRatio = '50.05%';

  if (smallerThanSm) {
    centerSlidePercentageRatio = '100';
  }
  else if (smallerThanMd) {
    centerSlidePercentageRatio = '50';
  }
  else if (largerThanMd) {
    centerSlidePercentageRatio = '33.33';
  }

  // console.log(smallerThanSm);
  // console.log(centerSlidePercentageRatio);

  return (
    <Container>
      <h2 id="category-title">{title}</h2>
      <Carousel
      /* to display more than 1 card in the carousel:
      edit centerSlidePercentage prop to 33.3 and set centerMode prop as "true"
      */
        className="carousel-break"
        centerMode={smallerThanSm ? 'false' : 'true'}
        centerSlidePercentage={centerSlidePercentageRatio}
        infiniteLoop="true"
        showThumbs={false}
      >
        {(title === 'Les derniers en date') && (
          latestProducts.map((latestProduct) => (
            <Card
              key={latestProduct.slug}
              {...latestProduct}
            />
          ))
        )}
        {(title === 'Les préférés de votre promo') && (
          favoriteProducts.map((favoriteProduct) => (
            <Card
              key={favoriteProduct.slug}
              {...favoriteProduct}
            />
          ))
        )}
        {(title === 'Pas d\'inspiration ?') && (
          randomProducts.map((randomProduct) => (
            <Card
              key={randomProduct.slug}
              {...randomProduct}
            />
          ))
        )}
      </Carousel>
    </Container>
  );
}
