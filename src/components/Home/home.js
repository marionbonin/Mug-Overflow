import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Page from '../Page/page';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import CarouselElement from '../Carousel/carousel';
import HomeCategoriesData from './homeCategoriesData';
import HomeCarouselsData from './homeCarouselsData';

import './style.scss';

export default function Home() {
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
            sx={{ width: { xs: '90%', md: '60%', lg: '50%' } }}
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
          {HomeCarouselsData.map(({ key, id, title }) => (
            <Box
              className="carousel-box"
              id={id}
            >
              <CarouselElement
                key={key}
                title={title}
              />
            </Box>
          ))}

          <Box id="categories-box">
            <h2>Retrouvez tous nos mugs par catégorie</h2>
            <div id="category-cards">
              {HomeCategoriesData.map(({
                name, path, id, image,
              }) => (
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
