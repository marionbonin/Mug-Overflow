import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Page from '../Page/page';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import CarouselElement from '../Carousel/carousel';

// categories images (to be replaced with correct ones)
import Andrei from 'src/assets/images/trombi/mug_trombinoscope_Andrei.png';
import Marion from 'src/assets/images/trombi/mug_trombinoscope_Marion.png';
import Nicolas from 'src/assets/images/trombi/mug_trombinoscope_Nicolas.png';
import ErwanAlbert from 'src/assets/images/trombi/mug_trombinoscope_Erwan_Albert.png';

import './style.scss';
import { SendAndArchiveOutlined } from '@mui/icons-material';

export default function Home() {

// array to test display / to be deleted
// categories will be fetched from API
const categories = [
  {
    path: '/css-puns',
    id: 'css-puns',
    name: 'CSS puns',
    image: Andrei
  },
  {
    path: '/blagues-de-dev',
    id: 'blagues-de-dev',
    name: 'Blagues de dev',
    image: Marion
  },
  {
    path: '/geek',
    name: 'Geek',
    id: 'geek',
    image: Nicolas
  },
  {
    path: '/oclock',
    name: 'OClock',
    id: 'oclock',
    image: Nicolas
  },
];

  return (
    < >
      <Header />
      <Page>
        <div id="page-container">
          <h1>Bienvenue sur Mug Overflow </h1>
          <div>
            <p id="easter-home">La boutique<span> (presque) </span> officielle des mugs O'Clock </p>
          </div>
          <Box
            id="info-disclaimer"
            sx={{ width: { xs: '90%', md: '60%', lg: '50%' }}}
          >
            <p>
              Tous les mugs sont au prix unitaire de <span className="disclaimer-bold">13,5€</span>.
            </p>
            <p>
              Sélectionnez, personnalisez,
              et recevez le mug de vos rêves directement chez vous !
            </p>
            <HashLink
              className="disclaimer-bold"
              to="/concept#how-much"
            >
              En savoir plus
            </HashLink>
          </Box>
          <Box className="carousel-box">
            <CarouselElement
              key="1"
            />
          </Box>
          <Box className="carousel-color carousel-box">
            <CarouselElement
              key="2"
            />
          </Box>
          <Box className="carousel-box">
            <CarouselElement
              key="3"
            />
          </Box>
          <Box id="categories-box">
            <h2>Retrouvez tous nos mugs par catégorie</h2>
            <div id="category-cards">
            {categories.map(({ name, path, id, image }) => (   
                <Link
                  key={id}
                  className="category-card"
                  id={id}
                  to=""
                >
                    <img
                      alt=""
                      src={image}
                      className="category-card-img"
                    />
                    <p  
                      className="category-card-name"
                    >
                    {name}
                    </p>
                </Link>
            ))}
            </div>
          </Box>
        </div>
      </Page>
      <Footer />
    </>
  );
}
