// == Import
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/login';
import CreateAccount from '../CreateAccount/createAccount';
import Home from '../Home/home';
import Error from '../Error/error';
import ProductCard from '../ProductCard/productCard';

import './styles.scss';

// == Composant
function App() {
  //   const routes = [{
  //     path: '/',
  //     component: Home,
  //   }, {
  //     path: '/connexion',
  //     component: Login,
  //   }, {
  //     path: '/inscription',
  //     component: CreateAccount,
  //   }, {
  //     path: '/card',
  //     component: ProductCard,
  //   }, {
  //     path: '/*',
  //     component: Error,
  //   },
  //   ];

  //   function routeComponents() {
  //     const mappedRoutes = routes.map(
  //       ({ path, component }, key) => <Route exact path={path} element={component} key={key} />,
  //     );
  //     console.log(mappedRoutes);
  //     return (mappedRoutes);
  //   }

  //   console.log(routeComponents());

  //   return (
  //     <div className="app">
  //       <Routes>
  //         {routeComponents.props.element}
  //       </Routes>
  //     </div>
  //   );
  return (
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
}

// == Export
export default App;
