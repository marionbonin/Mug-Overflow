import Container from '@mui/material/Container';
import Page from '../Page/page';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import './style.scss';

export default function LegalNotice() {
  return (
    <>
      <Header />
      <Page>
        <Container id="notice-container">
          <div id="notice-title">
            <h1> Mentions Légales </h1>
          </div>
          <div id="notice-content">
            <h2> Éditeur du Site </h2>
            <p className="notice"> Mug Overflow, une entreprise à votre écoute au capital de 0€. </p>
            <h2> Hébergement </h2>
            <p className="notice"> M-O est pour le moment hébergé dans vos coeurs... (et surtout sur nos VMs) </p>
            <h2> Développement </h2>
            <p className="notice"> Notre site est developpé par une équipe géniale composée de deux backeux et trois
              fronteux. RDV sur la page Concept pour plus de détails.
            </p>
            <h2> Conditions d'utilisation </h2>
            <p className="notice"> Avoir un pc et une connexion internet est un déjà un excellent début.
              A ne pas tester sur Interner Explorer.
            </p>
            <h2> Cookies </h2>
            <p className="notice"> Adoptez un wookie !! </p>
            <h2> Données personnelles  </h2>
            <p className="notice"> Nous savons déjà tout de vous mais on ne vous le dira pas.</p>
          </div>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
