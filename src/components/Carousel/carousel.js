import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Card from '../ProductCard/productCard';

// import MediaCard from '../ProductCard/productCard';

import './style.scss';

export default function CarouselElement() {
  const theme = useTheme();
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  // Retirer % au besoin si ca skip une card
  let centerSlidePercentageRatio = '50.05%';

  if (smallerThanSm) {
    centerSlidePercentageRatio = '100';
  }
  else if (smallerThanMd) {
    centerSlidePercentageRatio = '50';
  }
  else if (largerThanMd) {
    centerSlidePercentageRatio = '33.3';
  }

  // console.log(smallerThanSm);
  // console.log(centerSlidePercentageRatio);

  return (
    <Container>
      <h2 id="category-title">catégorie à dynamiser</h2>
      <Carousel
      /* to display more than 1 card in the carousel:
      edit centerSlidePercentage prop to 33.3 and set centerMode prop as "true"
      */
        className="carouselBreak"
        centerMode={smallerThanSm ? 'false' : 'true'}
        centerSlidePercentage={centerSlidePercentageRatio}
        infiniteLoop="true"
      >
        <Card key="1" className="carousel-white" />
        <Card key="2" className="carousel-color" />
        <Card key="3" className="carousel-white" />
        <Card key="4" className="carousel-color" />
        <Card key="5" className="carousel-white" />
      </Carousel>
    </Container>
  );
}
