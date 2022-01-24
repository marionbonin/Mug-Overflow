// == Import
import {Routes, Route} from 'react-router-dom';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import ProductCard from '../ProductCard/productCard';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<CreateAccount />} />
      <Route path="/*" element={<Error />} />
      <Route path="/card" element={<ProductCard />} />
    </Routes>
  </div>
);

// == Export
export default App;
