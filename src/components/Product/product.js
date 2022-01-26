import ActiveLastBreadcrumb from '../Breadcrumb/breadcrumb';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FaceIcon from '@mui/icons-material/Face';
import ProductCarousel from './ProductCarousel/productCarousel';

import './style.scss';

export default function Product() {
  return (
    <>
      <Header />
      <Page>
        <ActiveLastBreadcrumb />
        <div id="product-container">
          <div id="product-details">
            <div className="product-title-box">
              <h1 
              className="product-title"
        >
                css is awesome
              </h1>
            </div>
            <p className="product-description">
              Pour tous ceux qui cherchent la petite bête ! Le mug Keep Calm and var_dump();
              est disponible pour les amoureux de PHP !
              Alors, plutôt #TeamBackeux ou #TeamFront? Choisir ce mug, c'est choisir son camp.
            </p>
            <div id="product-actions">
              <ProductCarousel />
              <div id="download-buttons">
                <Button variant="contained">Télécharger le recto</Button>
                <Button variant="contained">Télécharger le verso</Button>
                <Button variant="contained">Direction l'imprimeur !</Button>
              </div>
            </div>
          </div>
        </div>
        <Container id="feedbacks-container" key="1">
          <div id="feedbacks-content">
            <h1 className="feedbacks-title"> Ils ont commandé ce mug (ou pas)... </h1>
            <FaceIcon id="user-feedback-icon" />
            <p id="feedback-author" > John D'Oeuf </p>
            <p id="user-promo"> Promo Sion </p>
            <p id="feedback-message"> "J'adore les mugs, dans 20 ou 30 ans, y'en aura plus." </p>
          </div>
         </Container>
         <Container id="feedbacks-container" key="2" >
          <div id="feedbacks-content">
            <FaceIcon id="user-feedback-icon" />
            <p id="feedback-author" > Anne Anas </p>
            <p id="user-promo"> Promo Tusse </p>
            <p id="feedback-message"> " Depuis que j'ai ce mug, je n'ai plus aucun bug. Et j'apprends encore plus vite" </p>
          </div>
         </Container>
      </Page>
      <Footer />
    </>
  );
}
