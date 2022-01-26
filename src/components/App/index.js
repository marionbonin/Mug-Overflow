// == Import
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import FAQ from '../FAQ/faq';
import ProductCard from '../ProductCard/productCard';
import Product from '../Product/product';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<CreateAccount />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/*" element={<Error />} />
        <Route path="/card" element={<ProductCard />} />
        <Route path="/produit" element={<Product />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
