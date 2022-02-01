import { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser';

import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';

import './style.scss';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5mpbk7u', 'template_6zydwci', e.target,
      'user_YvQF6GDHWrPDPIOH5ohwx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <Header />
      <Page>
        <Container id="main-contact" component="main" maxWidth="xs">
          <CssBaseline />
          <h2 id="contact-title"> Un souci de mug ou un désir incontrôlable de nous écrire ?
            Dans ce cas cette page est faite pour toi !
          </h2>
          <Box
            id="main-box"
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <input className="contact-input" type="text" name="user_name" placeholder="Prénom" />
              <input className="contact-input" type="email" name="user_email" placeholder="Email" />
              <textarea id="text-area" name="message" placeholder="Ton message" />
              <input id="button-contact" type="submit" value="Envoies ton message" />
            </form>
          </Box>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
