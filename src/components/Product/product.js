import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import FaceIcon from '@mui/icons-material/Face';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import ActiveLastBreadcrumb from '../Breadcrumb/breadcrumb';
import ProductCarousel from './ProductCarousel/productCarousel';
import { fetchSingleProduct } from '../../actions/products';

// import ColorRadioButtons from './ColorPick/colorPick';

import './style.scss';

// return (
//   <Button onClick={onDownload} variant="contained" color="primary">
//     Download
//   </Button>
// );
// }

export default function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct());
  }, []);

  const product = useSelector((state) => state.products.list);
  console.log(product);

  const onDownloadRecto = () => {
    const link = document.createElement('a');
    link.download = 'nom_du_recto_au_telechargement.jpg';
    link.href = 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front.png';
    link.click();
  };

  const onDownloadVerso = () => {
    const link = document.createElement('a');
    link.download = 'nom_du_verso_au_telechargement.jpg';
    link.href = 'src/assets/images/mug-mockups/CSS_IS_AWESOME_back.png';
    link.click();
  };

  return (
    <>
      <Header />
      <Page>
        <ActiveLastBreadcrumb />
        <div id="product-container">
          <div id="product-details">
            <div className="product-title-box">
              <h1 className="product-title">
                {product.name}
              </h1>
            </div>
            <p className="product-description">
              {product.description}
            </p>
            <div id="product-actions">
              <ProductCarousel
                {...product}
              />
              <div id="buttons-group">
                <Button
                  variant="contained"
                  id="download-recto"
                  onClick={onDownloadRecto}
                  startIcon={<SaveAltIcon />}
                >
                  Télécharger le recto
                </Button>
                <Button
                  variant="contained"
                  id="download-verso"
                  onClick={onDownloadVerso}
                  startIcon={<SaveAltIcon />}
                >
                  Télécharger le verso
                </Button>
                <Link
                  href="https://www.vistaprint.fr/cadeaux-photo/mugs-personnalises?xnav=__undefined_tile-shell_0_A0Y"
                  target="_blank"
                >
                  <Button
                    variant="contained"
                    id="send-to-printer"
                  >
                    Direction l'imprimeur !
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="feedbacks-container">
          <Container id="feedback-container" key="1">
            <div id="feedback-content">
              <h2 className="feedback-title"> Ils ont commandé ce mug (ou pas)... </h2>
              <FaceIcon id="user-feedback-icon" />
              <p id="feedback-author"> John D'Oeuf </p>
              <p id="user-promo"> Promo Sion </p>
              <p id="feedback-message"> "J'adore les mugs, dans 20 ou 30 ans, y'en aura plus." </p>
            </div>
          </Container>
          <Container id="feedback-container" key="2">
            <div id="feedback-content">
              <FaceIcon id="user-feedback-icon" />
              <p id="feedback-author"> Anne Anas </p>
              <p id="user-promo"> Promo Tusse </p>
              <p id="feedback-message"> " Depuis que j'ai ce mug, je n'ai plus aucun bug. Et j'apprends encore plus vite" </p>
            </div>
          </Container>
        </div>
      </Page>
      <Footer />
    </>
  );
}
