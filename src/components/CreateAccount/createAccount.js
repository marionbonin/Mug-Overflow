import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import logo from 'src/assets/images/logo-mugoverflow.svg';
import Footer from '../Footer/footer';

import './style.scss';

const handleChange = () => {
  console.log("salut");
};

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
    <>
      <Container id="main-sign-in" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          id="main-box"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="logo Mug Overflow" id="logo-navbar" />
          <Typography id="typography-title" component="h1" variant="h5">
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="PROMO"
              label="Promo"
              onChange={handleChange}
            >
              <MenuItem value="Xandar">Xandar</MenuItem>
              <MenuItem value="XIII">Twenty</MenuItem>
              <MenuItem value="Tardis">Thirty</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="PROMO"
              label="Promo"
              onChange={handleChange}
            >
              <MenuItem value="Xandar">Staff</MenuItem>
              <MenuItem value="XIII">Etudiant</MenuItem>
              <MenuItem value="Tardis">Alumni</MenuItem>
            </Select>
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
              to="/connexion"
              sx={{
                color: '#234b78',
              }}
            >
              Déjà inscrit? Connecte-toi !
            </Link>

          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
