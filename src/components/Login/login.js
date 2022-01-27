import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeEmailValue } from '../../actions/user';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from 'src/assets/images/logo-mugoverflow.svg';
import Footer from '../Footer/footer';

import './style.scss';


const theme = createTheme();

export default function Login() {

  // function that is triggered when form is sent.
  // It just prevent the reload for now.
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // we get the initial value of email from the state
  const emailValue = useSelector((state) => state.user.email);
  //console.log(emailValue);
  console.log(`premiere value: ${emailValue}`);
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // check if we successfully targetting the right field + the right entered data 
    console.log(`nom du champ: ${event.target.name}, nouvelle valeur: ${event.target.value}`);

    // dispatch action
    const action = changeEmailValue(event.target.name, event.target.value); 
    console.log(event.target.value);
    dispatch(action);
    
    console.log(event.target.value);
    // the output should be the updated email value from state
    console.log(`updated value: ${emailValue}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container id="main-sign-in" component="main" maxWidth="sm">
        <img src={logo} alt="logo Mug Overflow" id="logo-navbar" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar id="lock-avatar" sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography id="typography-title" component="h1" variant="h5">
            Connecte-toi à la boutique officielle O'Clock
          </Typography>
          <Box id="box" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={emailValue}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              id="connexion-button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
            <Grid
              container
              sx={
                {
                  display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center',
                }
              }
            >
              <Link
                className="link"
                href="#"
                sx={{
                  mt: 2,
                  mb: 1.5,
                  color: '#234b78',
                }}
              >
                Mot de passe oublié ?
              </Link>
              <Link
                className="link"
                href="/inscription"
                sx={{
                  color: '#234b78',
                }}
              >
                Pas de compte pas de mug !
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
