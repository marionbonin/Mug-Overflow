// == Import
import ResponsiveAppBarTop from './NavbarTop/navbar';
import ResponsiveAppBar from './NavbarBottom/navbar';

import './style.scss';

// == Composant
const Header = () => (
  <header id="header-container">
    <ResponsiveAppBarTop />
    <ResponsiveAppBar />
  </header>
);

// == Export
export default Header;
