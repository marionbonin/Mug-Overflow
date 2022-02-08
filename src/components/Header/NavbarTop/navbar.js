import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import logo from 'src/assets/images/logo-mugoverflow.svg';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { cleanState, changeValue } from '../../../actions/user';
import { fetchSearchedProducts } from '../../../actions/products';

import './style.scss';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fffdd8',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '16ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch(cleanState());
    localStorage.removeItem('token');
    navigate('/connexion');
  };

  const isLogged = useSelector((state) => state.user.logged);
  const searchValue = useSelector((state) => state.user.searchValue);

  // handling search in searchbar

  const handleSubmit = () => {
    dispatch(fetchSearchedProducts(searchValue));
    navigate(`/recherche/${searchValue}`);
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    dispatch(changeValue(event.target.name, event.target.value));
  };

  return (
    <Box
      id="top-menu-box"
    >
      <AppBar
        position="static"
        id="top-menu-appbar"
      >
        <Toolbar
          id="top-menu-toolbar"
        >
          <Search
            sx={{
              order: { xs: 3, sm: 1 },
              mt: { xs: '20px', sm: 0 },
              mb: { xs: '20px', sm: 0 },
              ml: { xs: 0 },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Rechercher..."
              inputProps={{ 'aria-label': 'search' }}
              name="searchValue"
              onChange={handleChange}
              onKeyPress={pressEnter}
            >
              {searchValue}
            </StyledInputBase>

          </Search>
          <Link
            to="/"
            // sx={{ order: { xs: 1, sm: 2 } }}
            id="link-logo-image"
          >
            <img src={logo} alt="logo Mug Overflow" id="logo-image" />
          </Link>
          <Box
            sx={{
              flexGrow: 0,
              order: { xs: 2, sm: 3 },
            }}
          >
            <Tooltip id="icon-button" title="profil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  id="avatar-img"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              { (isLogged)
                ? (
                  <div>
                    <MenuItem
                      onClick={() => {
                        navigate('/profil');
                      }}
                    >
                      <Typography id="menu-typo" textAlign="center">Profil</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        logout();
                      }}
                    >
                      <Typography id="menu-typo" textAlign="center">
                        Déconnexion
                      </Typography>
                    </MenuItem>
                  </div>
                )
                : (
                  <div>
                    <MenuItem
                      onClick={() => {
                        navigate('/connexion');
                      }}
                    >
                      <Typography id="menu-typo" textAlign="center">
                        Connexion
                      </Typography>
                    </MenuItem>
                  </div>
                )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
