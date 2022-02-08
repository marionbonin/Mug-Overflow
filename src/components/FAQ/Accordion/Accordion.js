import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import './style.scss';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="container-accordion">
      <h1> What the FAQ ?!</h1>
      {/* Accordion panel 1 */}
      <Accordion className="faq-accordeon" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="faq-accordion-text question">
            Le mug arrivera-t-il avant la fin du socle ?
          </Typography>
          <div className={expanded === 'panel1' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="faq-accordion-text answer"
          >
            Oui, si tu l'achètes maintenant.
            Double tes chances en envoyant des sous sur notre cagnotte leetchi !
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion panel 2 */}
      <Accordion className="faq-accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="faq-accordion-text question">
            Bientôt les sweats de promos ?
          </Typography>
          <div className={expanded === 'panel2' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq-accordion-text answer">
            Le concept est déjà dans les cartons ! Et qué s'appélério...
            <span className="bold">"Pull-Over Flow" !</span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion panel 3 */}
      <Accordion className="faq-accordeon" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="faq-accordion-text question">
            Vais-je trouver un travail après la formation ?
          </Typography>
          <div className={expanded === 'panel3' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq-accordion-text answer">
            En tant que grossiste imprimeur de mug ? Certainement.
            <br />
            En tant que développeur.se ? On espère, ne lâche rien ! Et ne fais
            jamais confiance à Ben...
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion panel 4 */}
      <Accordion className="faq-accordeon" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="faq-accordion-text question">
            Est-ce que tu m'entends && || ?
          </Typography>
          <div className={expanded === 'panel4' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq-accordion-text answer">
            Est-ce que tu me sens && ||, ||, ||, ouhouhouhouh!
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion panel 5 */}
      <Accordion className="faq-accordeon" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className="faq-accordion-text question">
            Mon mug est-il garanti ?
          </Typography>
          <div className={expanded === 'panel5' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq-accordion-text answer">
            Aliquid, ab laudantium aut quasi quas deserunt quibusdam quos, minus
            quisquam corporis quae unde ratione necessitatibus facere voluptas ad
            recusandae laborum qui magnam voluptatum optio voluptatibus? Impedit sequi,
            ratione omnis quod nam, voluptatibus dolorem esse sed dolore, veritatis voluptate!
            <br />
            Ca veut dire <span className="bold">non</span>, en latin. Donc prends-en soin !
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion panel 6 */}
      <Accordion className="faq-accordeon" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className="faq-accordion-text question">
            Comment dois-je utiliser mon mug ?
          </Typography>
          <div className={expanded === 'panel6' ? 'faq-animate rotate' : 'faq-animate'}> </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq-accordion-text answer">
            Il doit y avoir un sacré nombre d'issues sur Stack Overflow à ce sujet, Donc RTFM !
            <br />
            Mais bon, on te l'accorde, boire au mug,
            c'est tout un art. Au bout d'un moment, tu tiendras 2 mugs dans une main
            tout en codant de l'autre !
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
