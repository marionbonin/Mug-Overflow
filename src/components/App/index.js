// == Import
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import FAQ from '../FAQ/faq';
import LegalNotice from '../MentionsLegales/mentionsLegales';
import CGU from '../CGU/cgu';

import Contact from '../Contact/contact';
import ProtectedRoutes from './protectedRoutes';
import LoggedRoute from './loggedRoute';
import Concept from '../Concept/concept';
import Product from '../Product/product';
import Profile from '../Profile/profile';
import Category from '../Categories/categories';
import { getUserData, GET_USER_DATA } from '../../actions/user';

import './styles.scss';

// == Composant
function App() {
  const isLogged = useSelector((state) => state.user.logged);
  console.log(isLogged);

  const dispatch = useDispatch();

  // const token = localStorage.getItem('token');
  // console.log(`token récupéré du localStorage: ${token}`);
  dispatch(getUserData());  
  
  return (
    <div className="app">
 
      <Routes>
      {/* Logged routes. When you're logged, you have no longer access to those routes */}
        <Route path="/connexion" element={
          <LoggedRoute>
          <Login />
          </LoggedRoute>
        } />
        <Route path="/inscription" element={
          <LoggedRoute>
          <CreateAccount />
          </LoggedRoute>
        } />
      {/* Protected routes. You need to be logged to access those routes */}
        <Route path="/" element={
          <ProtectedRoutes>
            {<Home />} 
          </ProtectedRoutes>
        }/>
      
        <Route path="/contact" element={
         <ProtectedRoutes>
            {<Contact />} 
          </ProtectedRoutes>
        } />

        <Route path="/produit" element={
         <ProtectedRoutes>
            {<Product />} 
          </ProtectedRoutes>
        } />

        <Route path="/profil" element={
         <ProtectedRoutes>
            {<Profile />} 
          </ProtectedRoutes>
        } />

        <Route path="/concept" element={
         <ProtectedRoutes>
            {<Concept />} 
          </ProtectedRoutes>
        } />

        <Route path="/categories" element={
         <ProtectedRoutes>
            {<Category />} 
          </ProtectedRoutes>
        } />

        {/* Unprotected routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
