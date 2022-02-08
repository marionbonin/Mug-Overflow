import Container from '@mui/material/Container';

import Page from '../Page/page';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import ScrollToTop from '../ScrollToTop/scrollToTop';

import './style.scss';

export default function GeneralConditions() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Header />
      <Page>
        <Container id="cgu-container">
          <h1>Conditions Générales d'Utilisation</h1>

          <div id="cgu-content">
            <p className="cgu-p">
              Les présentes conditions générales régissent l’utilisation du site Mug Overflow.
              Ce site appartient et est géré par l’Ecole O’Clock.
              En utilisant ce site, vous indiquez que vous avez lu et compris les conditions
              d’utilisation et que vous acceptez de les respecter en tout temps.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p className="cgu-p">
              Tout contenu publié et mis à disposition sur ce site est la propriété de Mug Overflow
              et de ses créateurs. Cela comprend, mais n’est pas limité aux images, textes, logos,
              documents, fichiers téléchargeables et tout ce qui contribue à la composition de ce
              site.
            </p>

            <h2>Contributions d'utilisateur </h2>
            <p className="cgu-p">
              Les utilisateurs peuvent publier les informations suivantes sur notre site :
              fichiers photos (jpg, png, svp).
              En affichant publiquement sur notre site, vous acceptez de ne pas agir illégalement
              ou violer les conditions d’utilisation acceptable énumérées dans ce document.
            </p>

            <h2>Comptes</h2>
            <p className="cgu-p">
              Lorsque vous créez un compte sur notre site, vous acceptez ce qui suit :
            </p>
            <p className="cgu-p">
              1. que vous êtes seul responsable de votre compte et de la sécurité et la
              confidentialité de votre compte, y compris les mots de passe ou les renseignements
              de nature délicate joints à ce compte
            </p>
            <p className="cgu-p">
              2. que tous les renseignements personnels que vous nous
              fournissez par l’entremise de votre compte sont à jour, exacts et véridiques et
              que vous mettrez à jour vos renseignements personnels s’ils changent.
            </p>

            <p className="cgu-p">
              Nous nous réservons le droit de suspendre ou de résilier votre compte si vous utilisez
              notre site illégalement ou si vous violez les conditions d’utilisation acceptable.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p className="cgu-p">
              Mug Overflow ou l’un de ses créateurs sera tenu responsable de tout problème découlant
              de ce site. Néanmoins, ceux-ci ne seront pas tenus responsables de tout problème
              découlant de toute utilisation irrégulière de ce site.
            </p>

            <h2>Lois applicables</h2>
            <p className="cgu-p">
              Ce document est soumis aux lois applicables en France et vise à se conformer à ses
              règles et règlements nécessaires. Cela inclut la réglementation à l’échelle de
              l’UE énoncée dans le RGPD.
            </p>

            <h2>Divisibilité</h2>
            <p className="cgu-p">
              Si, à tout moment, l’une des dispositions énoncées dans le présent document est
              jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront
              considérées comme nulles et seront retirées du présent document. Toutes les autres
              dispositions ne seront pas touchées par les lois et le reste du document sera
              toujours considéré comme valide.
            </p>

            <h2>Modifications</h2>
            <p className="cgu-p">
              Ces conditions générales peuvent être modifiées de temps à autre afin de
              maintenir le respect de la loi et de refléter tout changement à la façon dont nous
              gérons notre site et la façon dont nous nous attendons à ce que les utilisateurs se
              comportent sur notre site. Nous recommandons à nos utilisateurs de vérifier ces
              conditions générales de temps à autre pour s’assurer qu’ils sont informés de toute
              mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements
              apportés à ces conditions ou nous afficherons un avis sur notre site.
            </p>

            <h2>Contact</h2>
            <p className="cgu-p">
              Veuillez communiquer avec nous si vous avez des questions ou des préoccupations.
              Nos coordonnées sont les suivantes : mugoverflow.contact@gmail.com
            </p>
            <p className="cgu-date">Date d'entrée en vigueur : le 26 janvier 2022.
            </p>
          </div>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
