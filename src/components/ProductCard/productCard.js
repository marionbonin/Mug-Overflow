import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import logoOclock from 'src/assets/images/logo-oclock.svg';

import './style.scss';

export default function MediaCard() {
  return (
    <Card
      sx={{ maxWidth: 345, borderRadius: 4 }}
      className="mug-card"
    >
      <CardMedia
        component="img"
        className="cardMugMedia"
        image={logoOclock}
        alt="photo du produit"
      />
      <CardContent>
        <Box className="cardContent">
          <div className="cardMugProps">
            <div className="cardMugName">
              Nom du Mug
            </div>
            <div className="cardMugCateg">
              Catégorie
            </div>
          </div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          to=""
        >
          <Button
            id="cardButton"
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Voir plus
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
