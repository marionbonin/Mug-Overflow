import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from 'src/assets/images/logo-mugoverflow.svg';
import Footer from '../Footer/footer';


import './style.scss';

function Copyright(props) {
  return (
    <Typography id="copyrightTypo" variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mug OverFlow
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme = createTheme();

export default function AccountCreation() {
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
    <ThemeProvider theme={theme} maxWidth="sm">
      <Container id="mainSignIn" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          id="mainBox"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="logo Mug Overflow" id="logo-navbar" />
          <Typography id="typographyTitle" component="h1" variant="h5">
            On n'attend plus que toi ! 
          </Typography>
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
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirmez votre mot de passe"
              type="password"
              id="password-verify"
              autoComplete="new-password"
            />
            <Button
              id="connexionButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Créer son compte
            </Button>

            <Link
              className="link"
              href="connexion"
              sx={{
                color: '#234b78',
              }}
            >
              Déjà inscrit? Connecte-toi !
            </Link>

          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
