import mug from 'src/assets/images/mug-concept.svg';
import printer from 'src/assets/images/printer-concept.svg';
import Andrei from 'src/assets/images/trombi/mug_trombinoscope_Andrei.png';
import Marion from 'src/assets/images/trombi/mug_trombinoscope_Marion.png';
import Nicolas from 'src/assets/images/trombi/mug_trombinoscope_Nicolas.png';
import ErwanAlbert from 'src/assets/images/trombi/mug_trombinoscope_Erwan_Albert.png';
import Container from '@mui/material/Container';

import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';

import './style.scss';
// import { Link } from '@mui/material';

export default function Product() {
  return (
    <>
      <Header />
      <Page>
        <Container id="concept-container">
          <h1 className="concept-title">MUG OVERFLOW...</h1>
          <h2 className="concept-subtitle">C'est quoi ? Par qui ? Et pour qui ? A quel prix ?</h2>
          <h3 className="concept-subsubtitle"> Promis, on vous dit TOUT ! Et c'est parti !</h3>
          <p className="concept-text">
            Mug Overflow, c'est la boutique de mug (presque officielle de O'Clock!
            Si vous vous dites que vous déjà entendu ça quelque part, c'est normal,
            c'est marqué en grand sur la page d'accueil !
          </p>
          <img src={mug} alt="mug svg" className="svg-concept" />
          <p className="concept-text">
            A ce jour, O'clock ne dispose pas de boutique de goodies, encore moins de mugs.
            En début de formation, les étudiants reçoivent un mug unique au design aléatoire.
            Mais face aux aléas de la vie (mug abîmé, fêlé, cassé, oublié...), nous souhaitons
            donner aux étudiants, alumnis et staff O'Clock la possibilité d'en recommander un
            ou plusieurs, et à leur goût : un mug qui reflète encore davantage leur techno de
            prédilection, les punchlines entendues en cours, leur appartenance à leur promo...
          </p>
          <h2 className="concept-question" id="what-is-it">
            Et du coup... C'est quoi ?
          </h2>
          <p className="concept-text">
            Alors, Mug Overflow, c'est ce qu'on appelle dans le jargon... Une pseudo-boutique.
            <br />
            Non, en vrai, personne ne dit ça. Mais ça colle plutôt bien au thème. <br /> Vu qu'une
            pseudo-boutique, ca n'existe pas, on va tenter de lui trouver un sens.
            Une pseudo-boutique, c'est finalement presque une vraie boutique en ligne, sauf que ce
            n'est pas une boutique en ligne.
          </p>
          <p className="concept-quote">
            "On gère presque tout, sauf la fin."
          </p>
          <p className="concept-text">
            Vous pouvez naviguer comme dans une vraie boutique, faire votre shopping parmi de très
            nombreux mugs, personnalisés pour vous ressembler. Et au moment ou votre coeur s'emballe
            sur le mug de vos rêves, il ne vous reste plus qu'à télécharger le(s) visuel(s)
            souhaité(s), puis cliquer sur un lien pour vous emmener vers un imprimeur.
          </p>
          <img src={printer} alt="mug svg" className="svg-concept" />
          <p className="concept-text">
            Une fois chez l'imprimeur, vous redisposez les éléments téléchargés sur votre mug, vous
            payez, et PAF ! Vous avez votre mug. Le concept peut paraitre farfelu, mais on s'est dit
            que chez O'Clock, on apprenait à devenir dev. Pas imprimeur. Donc on a fait ce qu'on sait
            faire de mieux, un site internet.
            Et pour le moment, on laisse le côté impression aux pros. <br />
            Parce que oui, c'est un secret bien gardé, mais en V2 de ce projet, on adorerait pouvoir
            passer par un service de POD, le futur de l'impression personnalisée, et vous proposer les
            mêmes mugs, mais à un bien meilleur prix !
          </p>
          <h2 className="concept-question" id="who-is-it">
            Ok mais... Qui est derrière tout ça ?!
          </h2>
          <p className="concept-text">
            Comme une image vaut mieux qu'un long discours, peut-on dire que cette partie vaut cinq
            longs discours ? Vous êtes gâtés !
          </p>
          <div id="trombi-container">
            <img src={Andrei} alt="trombinoscope andrei" className="trombi-concept" />
            <img src={Marion} alt="trombinoscope marion" className="trombi-concept" />
            <img src={ErwanAlbert} alt="trombinoscope Erwan & Albert" className="trombi-concept" />
            <img src={Nicolas} alt="trombinoscope Nicolas" className="trombi-concept" />
          </div>
          <h2 className="concept-question" id="who-is-this-for">
            C'est bien gentil, mais... C'est pour qui?
          </h2>
          <p className="concept-text">
            Pour les étudiants, futurs étudiants, alumnis, et le staff O'clock. C'est un projet fait
            pour O'Clock, par O'Clock (enfin, par nous). Du coup pas de conquête du marché
            international du Mug et ses grandes sociétés. Juste, toi, nous, ton mug, et un bon café.
          </p>
          <h2 className="concept-question" id="how-much">
            Et ça coûte combien ?
          </h2>

          <h3 className="concept-price">
            13,5€!
          </h3>

          <p className="concept-text">
            Ce prix, ce n'est pas nous qui le fixons. Il inclut 7,99€ de mug, et 5,39€ de livraison
            (ça pique un peu, je vous l'accorde), ce qui nous donne un prix exact de 13,38€.
          </p>
          <p className="concept-text">
            Et comme vous avez pu le voir en naviguant, il s'agit d'une pseudo-boutique, et non d'un
            e-shop. Déjà, parce que n'avons pas encore les moyens de développer un e-shop propre,
            et surtout parce que nous ne cherchons pas à développer une activité lucrative.
            On cherche avant tout à se faire plaisir, à vous faire plaisir, et s'exercer à pratiquer
            ce qui en quelques mois est devenu pour chacun une passion.
          </p>
          <p className="concept-text">
            Si besoin est de le préciser, nous n'avons aucun accord commercial ou autre avec
            VistaPrint. Le bouton sur les pages produit vous redirige vers eux, mais une fois vos
            visuels téléchargés, vous pouvez aller les faire imprimer où bon vous semble !
            Après tout, on est développeurs, pas policiers.
          </p>
          <p className="concept-text">
            Bon shopping !
          </p>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
