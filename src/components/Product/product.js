import ActiveLastBreadcrumb from '../Breadcrumb/breadcrumb';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import CarouselElement from '../Carousel/carousel';
import Page from '../Page/page';
import Button from '@mui/material/Button';

import './style.scss';

export default function Product() {
  return (
    <>
      <Header />
      <Page>
        <ActiveLastBreadcrumb />
        <div>(Détails produit)
          <div>Nom du Produit (titre)</div>
          <div>Description</div>
          <div><CarouselElement /></div>
          <div id="download-buttons">
            <Button variant="contained">Télécharger le recto</Button>
            <Button variant="contained">Télécharger le verso</Button>
            <Button variant="contained">Direction l'imprimeur !</Button>
          </div>
        </div>
        <div>Avis utilisateurs</div>
      </Page>
      <Footer />
    </>
  );
}
