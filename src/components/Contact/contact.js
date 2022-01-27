import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import './style.scss';


export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Header />
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
          <Box id="box" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="first-name"
              label="Prénom"
              id="first-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="last-name"
              label="Nom"
              id="last-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="promo"
              label="Promo"
              id="promo"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Ton message"
              type="text"
              id="message"
            />
            <Button
              id="connexionButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Envoyer ton message
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
