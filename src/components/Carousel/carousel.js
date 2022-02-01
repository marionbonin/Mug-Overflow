import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Card from '../ProductCard/productCard';

// import MediaCard from '../ProductCard/productCard';

import './style.scss';

export default function CarouselElement({ title }) {
  const theme = useTheme();
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  // Remove % if needed, in case it skips a card
  let centerSlidePercentageRatio = '50.05';

  if (smallerThanSm) {
    centerSlidePercentageRatio = '100';
  }
  else if (smallerThanMd) {
    centerSlidePercentageRatio = '50';
  }
  else if (largerThanMd) {
    centerSlidePercentageRatio = '33.3333333';
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
        <Card key="1" />
        <Card key="2" />
        <Card key="3" />
        <Card key="4" />
        <Card key="5" />
      </Carousel>
    </Container>
  );
}
