import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

import DropdownMenu from './Dropdown/dropdown';

import './style.scss';

const pages = [
  {
    path: '/',
    routeName: 'Accueil',
  },
  {
    path: '/categories',
    routeName: 'Catégories',
  },
  {
    path: '/concept',
    routeName: 'Concept',
  },
  {
    path: '/contact',
    routeName: 'Contact',
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id="navbar" position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ routeName, path }) => (
                <MenuItem
                  key={routeName}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    to={path}
                    key={routeName}
                    underline="none"
                  >
                    <Typography
                      id="menu-item"
                      textAlign="center"
                      key={routeName}
                    >
                      {routeName}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            id="menu-appbar"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {/* Navlink 1 - homepage */}
            <NavLink
              to="/"
              key="Accueil"
              underline="none"
              className="navbar-bottom-link"
            >
              <Button
                className="nav-buttons"
                key="Accueil"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Accueil
              </Button>
            </NavLink>

            {/* Navlink 2 - categories */}
            <DropdownMenu />

            {/* Navlink 3 - Concept */}
            <NavLink
              to="/concept"
              key="Concept"
              underline="none"
              className="navbar-bottom-link"
            >
              <Button
                className="nav-buttons"
                key="Concept"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Concept
              </Button>
            </NavLink>

            {/* Navlink 4 - Contact */}
            <NavLink
              to="/contact"
              key="Contact"
              underline="none"
              className="navbar-bottom-link"
            >
              <Button
                className="nav-buttons"
                key="Contact"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
