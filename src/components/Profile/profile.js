import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'; 

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfileProducts } from '../../actions/products';
import {
  saveSlug,
  saveUserEdit,
  changeValue,
  getUserData,
  fetchPromoNames,
  fetchStatusNames,
} from '../../actions/user';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile() {
  const userFirstName = useSelector((state) => state.user.firstname);
  const userLastName = useSelector((state) => state.user.lastname);
  const userPromos = useSelector((state) => state.user.promoNames);
  const userStatus = useSelector((state) => state.user.statusNames);
  const userEmail = useSelector((state) => state.user.email);
  const userPass = useSelector((state) => state.user.password);
  const products = useSelector((state) => state.products.profileProductsList);
  const currentPromo = useSelector((state) => state.user.promo.name);
  const currentStatus = useSelector((state) => state.user.status.name);
  const dispatch = useDispatch();
  const parameters = useParams();
  const currentSlug = parameters.slug;

  console.log(userPromos);

  // console.log(currentSlug);
  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    dispatch(changeValue(event.target.name, { id: event.target.id, name: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveUserEdit());
    dispatch(getUserData());
    // console.log('o');
  };

  useEffect(() => {
    dispatch(saveSlug(currentSlug));
    dispatch(fetchProfileProducts());
    dispatch(fetchPromoNames());
    dispatch(fetchStatusNames());
  }, []);

  // console.log(products);

  return (
    <>
      <Header />
      <Page>
        <Container>
          <h1> Bonjour {userFirstName} </h1>

          <div id="favorite-form">
            <form id="profile-form" onSubmit={handleSubmit}>
              <TextField
                className="profile-input"
                id="pi-1"
                name="firstname"
                defaultValue={userFirstName}
                label="Prénom"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                id="pi-2"
                name="lastname"
                defaultValue={userLastName}
                label="Nom"
                variant="outlined"
                onChange={handleChange}
              />
              <FormControl className="profile-select">
                <InputLabel id="demo-simple-select-label">Promotion</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  className="register-select"
                  id="demo-simple-select"
                  name="promo"
                  value={currentPromo}
                  label="Promotion"
                  placeholder="Statut"
                  onChange={handleChange}
                >
                  {userPromos.map((singlePromo) => (
                    <MenuItem
                      name="promo"
                      id={singlePromo.id}
                      key={singlePromo.id}
                      value={singlePromo.name}
                    >
                      {singlePromo.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className="profile-select">
                <InputLabel id="demo-simple-select-label">Statut</InputLabel>
                <Select
                  className="register-select"
                  id="demo-simple-select"
                  value={currentStatus}
                  name="status"
                  label="Statut"
                  placeholder="Statut"
                  onChange={handleChange}
                >
                  {userStatus.map((singleStatus) => (
                    <MenuItem
                      name="status"
                      id={singleStatus.id}
                      key={singleStatus.id}
                      value={singleStatus.name}
                    >
                      {singleStatus.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                className="profile-input"
                id="pi-3"
                defaultValue={userEmail}
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                name="password"
                id="pi-4"
                label="Mot de passe"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
              <Button
                id="button-profile"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sauvegarder
              </Button>
            </form>
          </div>
          <h2> Tes Mugs Favoris </h2>
          <div id="favorite-cards">
            {products.map((product) => (
              <FavoriteCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
