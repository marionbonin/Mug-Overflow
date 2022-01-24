import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Page from '../Page/page';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import CarouselElement from '../Carousel/carousel';

import './style.scss';

export default function Home() {
  return (
    < >
      <Header />
      <Page>
        <div id="page-container">
          <h1>Bienvenue sur Mug Overflow </h1>
          <div>
            <h2 id="easter-home">La boutique<span> (presque) </span> officielle des mugs O'Clock </h2>
          </div>
          <Box
            id="infoDisclaimer"
            sx={{ width: { xs: '90%', md: '50%', lg: '40%' } }}
          >
            <p>
              Tous les mugs sont au prix unitaire de 12€.
            </p>
            <p>
              Sélectionnez, personnalisez,
              et recevez le mug de vos rêves directement chez vous !
            </p>
            <Link>
              En savoir plus
            </Link>
          </Box>
          <CarouselElement
            key="1"
          />
          <CarouselElement
            key="2"
          />
        </div>
      </Page>
      <Footer />
    </>
  )
}
