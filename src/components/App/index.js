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
        <Route path="/" element={
          <ProtectedRoutes>
            {<Home />} 
          </ProtectedRoutes>
        }/>
        <Route path="/connexion" element={
          <LoggedRoute>
          <Login />
          </LoggedRoute>
        } />
        <Route path="/inscription" element={<CreateAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/produit" element={<Product />} />
        <Route path="/profil" element={<Profile />} />       
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
