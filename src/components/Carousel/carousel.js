import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logoOclock from 'src/assets/images/logo-oclock.svg';
// import MediaCard from '../ProductCard/productCard';

import './style.scss';

export default function CarouselElement() {
  const theme = useTheme();
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  // console.log(smallerThanSm);
  return (
    <Container>
      <h2 id="categoryTitle">catégorie à dynamiser</h2>
      <Carousel
      /* to display more than 1 card in the carousel:
      edit centerSlidePercentage prop to 33.3 and set centerMode prop as "true"
      */
        className="carouselBreak"
        centerMode={smallerThanSm ? 'false' : 'true'}
        centerSlidePercentage={smallerThanSm ? '100' : '33.3'}

      >
        <div>
          <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    </Container>
  );
}
