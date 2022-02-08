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
import Loading from '../App/Loading';

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
  const products = useSelector((state) => state.products.profileProductsList);
  const currentPromo = useSelector((state) => state.user.promo.name);
  const currentStatus = useSelector((state) => state.user.status.name);
  const promoLoader = useSelector((state) => state.user.loadingSupOne);
  const statusLoader = useSelector((state) => state.user.loadingSupTwo);

  const dispatch = useDispatch();
  const parameters = useParams();
  const currentSlug = parameters.slug;

  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleChangePromo = (event) => {
    const currentPromoObject = userPromos.find((promo) => promo.name === event.target.value);
    dispatch(changeValue(event.target.name, currentPromoObject));
  };

  const handleChangeStatus = (event) => {
    const currentStatusObject = userStatus.find(
      (singleStatus) => singleStatus.name === event.target.value,
    );
    dispatch(changeValue(event.target.name, currentStatusObject));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveUserEdit());
    dispatch(getUserData());
  };

  useEffect(() => {
    dispatch(saveSlug(currentSlug));
    dispatch(fetchProfileProducts());
    dispatch(fetchPromoNames());
    dispatch(fetchStatusNames());
  }, []);

  if (promoLoader || statusLoader) {
    return (
      <>
        <Header />
        <Page>
          <Loading />
        </Page>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Page>
        <Container>
          <h1 className="profil-title"> Bonjour {userFirstName} </h1>
          <h2 className="profil-subtitle">Ici ton profil tu éditeras</h2>

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
                  // event.target.name here
                  name="promo"
                  value={!currentPromo ? '' : currentPromo}
                  defaultValue=""
                  label="Promotion"
                  placeholder="Statut"
                  onChange={handleChangePromo}
                >
                  {userPromos.map((singlePromo) => (
                    <MenuItem
                      name={singlePromo.id}
                      id={singlePromo.id}
                      key={singlePromo.id}
                      // event.target.value here
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
                  value={!currentStatus ? '' : currentStatus}
                  defaultValue=""
                  name="status"
                  label="Statut"
                  placeholder="Statut"
                  onChange={handleChangeStatus}
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
                autoComplete="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                name="password"
                id="pi-4"
                autoComplete="current-password"
                label="Nouveau mot de passe"
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
