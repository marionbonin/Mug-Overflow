// == Import
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/header';
import Login from '../Login/login';
import Footer from '../Footer/footer';
import CreateAccount from '../CreateAccount/createAccount';


import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/creation-de-compte" element={<CreateAccount />} />  
    </Routes>
  </div>
);

// == Export
export default App;
