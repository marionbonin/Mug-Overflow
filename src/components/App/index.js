// == Import
import {
  Routes, Route, Navigate, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import FAQ from '../FAQ/faq';
import LegalNotice from '../MentionsLegales/mentionsLegales';
import CGU from '../CGU/cgu';

import Contact from '../Contact/contact';
import ProtectedRoutes from './protectedRoutes';
import Concept from '../Concept/concept';
import Product from '../Product/product';
import Profile from '../Profile/profile';
import Category from '../Categories/categories';
import { getUserData } from '../../actions/user';
import { fetchCategories } from '../../actions/categories';

import Loading from './Loading';

import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);
  const loading = useSelector((state) => state.user.loading);
  const token = localStorage.getItem('token');
  // console.log(`token récupéré du localStorage: ${token}`);

  useEffect(() => {
    if (token && !isLogged) {
      dispatch(getUserData());
    }
  }, []);

  // Desactivation pour travailler sur des bases

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="app">

      <Routes>
        {/* Logged routes. When you're logged, you have no longer access to those routes */}
        {isLogged && (
          <>
            <Route
              path="/connexion"
              element={<Navigate replace to="/" />}
            />
            <Route
              path="/inscription"
              element={<Navigate replace to="/" />}
            />
          </>
        )}
        <Route
          path="/connexion"
          element={<Login />}
        />
        <Route
          path="/inscription"
          element={<CreateAccount />}
        />
        {/* Protected routes. You need to be logged to access those routes */}
        <Route
          path="/"
          element={(
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          )}
        />
        <Route
          path="/contact"
          element={(
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          )}
        />
        {/* Route to delete. There is no "produit" route */}
        <Route
          path="/produit/:slug"
          element={(
            <ProtectedRoutes>
              <Product />
            </ProtectedRoutes>
          )}
        />
        {/* End of the Route to delete. */}
        <Route
          path="/profil"
          element={(
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          )}
        />

        <Route
          path="/concept"
          element={(
            <ProtectedRoutes>
              <Concept />
            </ProtectedRoutes>
          )}
        />

        <Route
          path="/categories/:slug"
          element={(
            <ProtectedRoutes>
              <Category />
            </ProtectedRoutes>
          )}
        />

        {/* Unprotected routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

// == Export
export default App;
