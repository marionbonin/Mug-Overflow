import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { cleanListState } from '../../../actions/products';

import './style.scss';

export default function FavoriteCard(product) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const base = `/produit/${product.slug}`;

  const handleClick = (() => {
    dispatch(cleanListState());
    navigate(base);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  return (
    <Card
    // sx={{ borderRadius: 4 }}
      id="mug-card"
    >
      <CardMedia
        component="img"
        className="cardMugMedia"
        image={product.mockupFront}
        alt="photo du produit"
      />
      <CardContent>
        <Box className="card-content">
          <div className="card-mug-props">
            <div className="card-mug-name">
              {product.name}
            </div>
            <div className="card-mug-categ">
              {product.category[0].name}
            </div>
          </div>
          <IconButton
            aria-label="add to favorites"
            className="favourite-button"
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          to={base}
        >
          <Button
            id="card-button"
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            Détails
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
