import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfileProducts } from '../../actions/products';
import { saveSlug, saveUserEdit, changeValue, getUserData } from '../../actions/user';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile() {
  const userFirstName = useSelector((state) => state.user.firstname);
  const userLastName = useSelector((state) => state.user.lastname);
  const userPromo = useSelector((state) => state.user.promo);
  // const userStatus = useSelector((state) => state.user.status.name);
 
  const userEmail = useSelector((state) => state.user.email);
  const userPass = useSelector((state) => state.user.password);

  const dispatch = useDispatch();
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // console.log(currentSlug);

  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    dispatch(changeValue(event.target.name, event.target.value));
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
  }, []);

  const products = useSelector((state) => state.products.profileProductsList);
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
              <TextField
                className="profile-input"
                name="promo"
                id="pi-3"
                label="Promo"
                defaultValue={userPromo}
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                id="pi-4"
                label="Statut"
                name="status"
                //defaultValue={userStatus}
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                id="pi-5"
                defaultValue={userEmail}
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                className="profile-input"
                name="password"
                id="pi-6"
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
