import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import logo from 'src/assets/images/logo-mugoverflow.svg';

import
{
  fetchPromoNames,
  fetchStatusNames,
  changeValue,
  createUserAccount,
} from '../../actions/user';

import Footer from '../Footer/footer';
import Loading from '../App/Loading';

import './style.scss';

export default function AccountCreation() {
  const dispatch = useDispatch();

  // This part let us get the dropdown content
  useEffect(() => {
    dispatch(fetchPromoNames());
    dispatch(fetchStatusNames());
  }, []);
  const promos = useSelector((state) => state.user.promoNames);
  const statusNames = useSelector((state) => state.user.statusNames);
  // End of the dropdown content part

  // set selected dropdown value
  // const [selectedValuePromo, setSelectedValuePromo] = React.useState('');
  // const [selectedValueStatus, setSelectedValueStatus] = React.useState('');
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setSelectedValuePromo(event.target.value);
  //   setSelectedValueStatus(event.target.value);
  // };

  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const promoValue = useSelector((state) => state.user.promo);
  const statusValue = useSelector((state) => state.user.status);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const checkPasswordValue = useSelector((state) => state.user.checkPassword);
  const isLoading = useSelector((state) => state.user.loadingSupOne);
  const isLoadingSup = useSelector((state) => state.user.loadingSupTwo);

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUserAccount());
  };

  if (isLoading || isLoadingSup) {
    return <Loading />;
  }
  return (
    <>
      <Container id="main-sign-in" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          id="main-box"
          sx={{
            // marginTop: 8,
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
              name="firstname"
              label="Prénom"
              id="first-name"
              onChange={handleChange}
            >
              {firstnameValue}
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Nom"
              id="last-name"
              onChange={handleChange}
            >
              {lastnameValue}
            </TextField>
            <FormControl className="register-box">
              <InputLabel id="demo-simple-select-label">Promotion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                className="register-select"
                id="demo-simple-select"
                name="promo"
                value={promoValue}
                label="Promotion"
                placeholder="Statut"
                onChange={handleChange}
              >
                {promos.map((promo) => (
                  <MenuItem
                    name="promo"
                    key={promo.id}
                    value={promo.id}
                  >
                    {promo.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="register-box">
              <InputLabel id="demo-simple-select-label">Statut</InputLabel>
              <Select
                className="register-select"
                id="demo-simple-select"
                value={statusValue}
                name="status"
                label="Statut"
                placeholder="Statut"
                onChange={handleChange}
              >
                {statusNames.map((singleStatus) => (
                  <MenuItem
                    name="status"
                    key={singleStatus.id}
                    value={singleStatus.id}
                  >
                    {singleStatus.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            >
              {emailValue}
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            >
              {passwordValue}
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="checkPassword"
              label="Verification du mot de passe"
              type="password"
              id="check-password"
              autoComplete="new-password"
              onChange={handleChange}
            >
              {checkPasswordValue}
            </TextField>

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
