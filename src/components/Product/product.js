import ActiveLastBreadcrumb from '../Breadcrumb/breadcrumb';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import CarouselElement from '../Carousel/carousel';
import Page from '../Page/page';
import Button from '@mui/material/Button';
import FeedbackCard from './FeedbackCard/feedbackCard';

import './style.scss';

export default function Product() {
  return (
    <>
      <Header />
      <Page>
        <ActiveLastBreadcrumb />
        <div>
          <h1>Nom du Produit (titre)</h1>
          <div>
            Pour tous ceux qui cherchent la petite bête ! Le mug Keep Calm and var_dump();
            est disponible pour les amoureux de PHP !
            Alors, plutôt #TeamBackeux ou #TeamFront? Choisir ce mug, c'est choisir son camp.
          </div>
          <div><CarouselElement /></div>
          <div id="download-buttons">
            <Button variant="contained">Télécharger le recto</Button>
            <Button variant="contained">Télécharger le verso</Button>
            <Button variant="contained">Direction l'imprimeur !</Button>
          </div>
        </div>
        <div><FeedbackCard /></div>
      </Page>
      <Footer />
    </>
  );
}
