import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Page from '../Page/page';
import homeCarouselsData from './homeCarouselsData';

import { fetchRandomProducts, fetchFavoriteProducts, fetchLatestProducts } from '../../actions/products';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Gallery from '../Carousel/aliceCarousel';

import './style.scss';

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  // const randomProducts = useSelector((state) => state.products.randomList);
  // console.log(randomProducts);
  // const randomProducts =useSelector((state))

  // useEffect(() => {
  //   dispatch(fetchRandomProducts());
  // }, []);

  useEffect(() => {
    dispatch(fetchRandomProducts());
    dispatch(fetchFavoriteProducts());
    dispatch(fetchLatestProducts());
  }, []);

  const randomProducts = useSelector((state) => state.products.randomList);
  const favoriteProducts = useSelector((state) => state.products.favoriteList);
  const latestProducts = useSelector((state) => state.products.lastList);
  // console.log(randomProducts)
  const homepageProducts = [
    latestProducts,
    favoriteProducts,
    randomProducts,
  ];
  return (
    <>
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
          {homeCarouselsData.map(({ key, title }) => (
            <Box className="alice-carousel-box">
              <Gallery
                key={key}
                title={title}
                {...homepageProducts}
              />
            </Box>
          ))}

          {/* ICI NOUVEAU MAP DES 3 CAROUSELS
          {HomeCarouselsData.map(({ key, id, title }) => (
            <Box
              className="carousel-box"
              id={id}
              key={key}
            >
              <AliceCarousel
                key={key}
                title={title}
              />
            </Box>
          ))}
          */}

          {/* ICI ANCIEN MAP DES 3 CAROUSELS
          {HomeCarouselsData.map(({ key, id, title }) => (
            <Box
              className="carousel-box"
              id={id}
              key={key}
            >
              <CarouselElement
                key={key}
                title={title}
              />
            </Box>
          ))}
          */}

          <Box id="categories-box">
            <h2>Retrouvez tous nos mugs par catégorie</h2>
            <div id="category-cards">
              {categories.map(({
                id, name, slug, image,
              }) => {
                const imageUrl = `http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/uploads/images_categories/${image}`;
                return (
                  <Link
                    key={id}
                    className="category-card"
                    id={slug}
                    to={`/categories/${slug}`}
                  >
                    <img
                      alt=""
                      src={imageUrl}
                      className="category-card-img"
                    />
                    <p
                      className="category-card-name"
                    >
                      {name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </Box>
        </div>
      </Page>
      <Footer />
    </>
  );
}
