import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from 'src/assets/images/logo-mugoverflow.svg';
import { changeValue, submitLogin } from '../../actions/user';
import Footer from '../Footer/footer';

import './style.scss';

export default function Login() {
  // we get the initial email & password values from the state
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();

  // function that is triggered when form is sent.
  // It just prevents the reload for now.
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    dispatch(submitLogin());
  };

  const handleChange = (event) => {
    // check if we successfully targetting the right field + the right entered data
    // console.log(`Le champ ${event.target.name} vient de recevoir la
    // nouvelle valeur : ${event.target.value}`);

    // dispatch action
    dispatch(changeValue(event.target.name, event.target.value));

    // the output should be the updated values from state
    // Small lag so the console.log don't update the last character. No worries
    // he does fully update the store
    // console.log(`Store updated values: ${emailValue} / ${passwordValue}`);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      return navigate('/');
    }
  }, [localStorage.getItem('token')]);

  return (
    <>
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
            {!(isLogged) ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon /> }
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
              onChange={handleChange}
              value={passwordValue}

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
    </>
  );
}
