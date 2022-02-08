import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../App/Loading';

import { fetchProfileProducts } from '../../actions/products';
import {
  saveSlug,
  saveUserEdit,
  changeValue,
  getUserData,
  fetchPromoNames,
  fetchStatusNames,
  updatePassword,
  deleteAccount,
} from '../../actions/user';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile() {
  // handle user states
  const userEmail = useSelector((state) => state.user.email);
  const newPassword = useSelector((state) => state.user.password);
  const checkPassword = useSelector((state) => state.user.checkPassword);
  const userFirstName = useSelector((state) => state.user.firstname);
  const userLastName = useSelector((state) => state.user.lastname);
  const currentPromo = useSelector((state) => state.user.promo.name);
  const currentStatus = useSelector((state) => state.user.status.name);
  const promoLoader = useSelector((state) => state.user.loadingSupOne);
  const statusLoader = useSelector((state) => state.user.loadingSupTwo);
  const allPromos = useSelector((state) => state.user.promoNames);
  const allStatus = useSelector((state) => state.user.statusNames);
  const currentPassword = useSelector((state) => state.user.currentPassword);

  // handle products state
  
  const displayError = useSelector((state) => state.user.loginError);
  const products = useSelector((state) => state.products.profileProductsList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const parameters = useParams();
  const currentSlug = parameters.slug;

  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  const handleChangePromo = (event) => {
    const currentPromoObject = allPromos.find((promo) => promo.name === event.target.value);
    dispatch(changeValue(event.target.name, currentPromoObject));
  };

  const handleChangeStatus = (event) => {
    const currentStatusObject = allStatus.find(
      (singleStatus) => singleStatus.name === event.target.value,
    );
    dispatch(changeValue(event.target.name, currentStatusObject));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveUserEdit());
    dispatch(getUserData());
    if (currentPassword && newPassword && (newPassword === checkPassword)) {
      dispatch(updatePassword());
    }
  };

  // handling opening/closingthe modal for account deletion
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(saveSlug(currentSlug));
    dispatch(fetchProfileProducts());
    dispatch(fetchPromoNames());
    dispatch(fetchStatusNames());
  }, []);

  const handleSubmitModal = (event) => {
    event.preventDefault();
    dispatch(deleteAccount());
    // navigate('/inscription');
  };

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
                  {allPromos.map((singlePromo) => (
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
                  {allStatus.map((singleStatus) => (
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
                name="currentPassword"
                id="pi-4"
                autoComplete="current-password"
                label="Mot de passe"
                type="password"
                variant="outlined"
                onChange={handleChange}
              >
                {currentPassword}
              </TextField>
              <TextField
                className="profile-input"
                name="password"
                id="pi-5"
                autoComplete="new-password"
                label="Nouveau mot de passe"
                type="password"
                variant="outlined"
                onChange={handleChange}
              >
                {newPassword}
              </TextField>
              <TextField
                className="profile-input"
                name="checkPassword"
                id="pi-6"
                autoComplete="new-password"
                label="Confirmer nouveau mot de passe"
                type="password"
                variant="outlined"
                onChange={handleChange}
              >
                {checkPassword}
              </TextField>
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
          <Button
            onClick={handleOpen}
            id="button-delete"
            type="click"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Supprimer le compte
          </Button>
          <h2> Tes mugs favoris </h2>
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
      <Modal
        id="delete-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <form id="modal-form" onSubmit={handleSubmitModal} noValidate>
            <div id="modal-textfield">
              <p className="modal-text-content">
                Tu auras besoin de ton mot de passe pour pouvoir supprimer
                ton compte.
              </p>
              <p className="modal-text-content">
                Juste là...
              </p>
              <TextField
                className="delete-input"
                name="currentPassword"
                // id="delete-input"
                autoComplete="current-password"
                label="Mot de passe"
                type="password"
                variant="outlined"
                error={displayError}
                helperText={displayError ? 'Mot de passe incorrect' : ''}
                onChange={handleChange}
              >
                {currentPassword}
              </TextField>
            </div>
            <Button
              id="button-modal"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Confirmer la suppression
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
