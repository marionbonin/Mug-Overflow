import mug from 'src/assets/images/mug-concept.svg';
import printer from 'src/assets/images/printer-concept.svg';
import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';

import './style.scss';

export default function Product() {
  return (
    <>
      <Header />
      <Page>
        <h1 className="concept-title">MUG OVERFLOW...</h1>
        <h2 className="concept-subtitle">C'est quoi? Par qui? Et pour qui? A quel prix?</h2>
        <h3 className="concept-subsubtitle"> Promis, on vous dit TOUT! Et c'est parti!</h3>
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
        <h2 className="concept-question">
          Et du coup... C'est quoi?
        </h2>
        <p className="concept-text">
          Alors, Mug Overflow, c'est ce qu'on appelle dans le jargon... Une pseudo-boutique.
          <br />
          Non, en vrai, personne ne dit ça. Mais ça colle plutôt bien au thème. <br /> Vu qu'une
          pseudo-boutique, ca n'existe pas, on va tenter de lui trouver un sens.
          Une pseudo-boutique, c'est finalement, presque une vraie boutique en ligne, sauf que ce
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
          payez, et PAF! Vous avez votre mug. Le concept peut paraitre farfelu, mais on s'est dit
          que chez O'Clock, on apprenait à devenir dev. Pas imprimeur. Donc on a fait ce qu'on sait
          faire de mieux, un site internet.
          Et pour le moment, on laisse le côté impression aux pros. <br />
          Parceque oui, c'est un secret bien gardé, mais en V2 de ce projet, on adorerais pouvoir
          passer par un service de POD, le futur de l'impression personnalisée, et vous proposer les
          mêmes mugs, mais à un bien meilleur prix!
        </p>
        <h2 className="concept-question">
          Ok mais... Qui est derrière tout ça?!
        </h2>
        <p className="concept-text">
          Comme une image vaut mieux qu'un long discours, peut-on dire que cette partie vaut cinq
          longs discours? Vous êtes gâtés !
          {/* Insérer 5 mockup de mug avec nos trombines */}
          <br />image 1 trombine de l'équipe
          <br />image 2 trombine de l'équipe
          <br />image 3 trombine de l'équipe
          <br />image 4 trombine de l'équipe
          <br />image 5 trombine de l'équipe
        </p>
        <h2 className="concept-question">
          C'est bien gentil, mais... C'est pour qui?
        </h2>
        <p className="concept-text">
          C'est pour toi, pour lui, pour tous ceux qui le veuuulent (il est tard je finirais 
          demain ca sent les burgers)
        </p>
        <h2 className="concept-question">
          Et ça coute combien?
        </h2>
        <p className="concept-text">
          Le prix blablabla
        </p>
      </Page>
      <Footer />
    </>
  );
}
