// == Import
import ResponsiveAppBarTop from './NavbarTop/navbar';
// old navbar bottom made with mui
//import ResponsiveAppBar from './NavbarBottom/navbar';

// new one started from scratch
//import Navbar from './NavbarBottomNew/navbar';

// best one
import NavbarMenu from './V2NavbarBottom/Navbarmenu';


import './style.scss';

// == Composant
const Header = () => (
  <header id="header-container">
    <ResponsiveAppBarTop />
    <NavbarMenu />
  </header>
);

// == Export
export default Header;
