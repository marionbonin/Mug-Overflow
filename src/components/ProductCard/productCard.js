import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import frontMockup from 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front.png';

import './style.scss';

export default function MediaCard(randomProduct) {
  // console.log(randomProduct);
  return (
    <Card
      // sx={{ borderRadius: 4 }}
      id="mug-card"
    >
      <CardMedia
        component="img"
        className="cardMugMedia"
        image={`http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/uploads/images/${randomProduct.mockup_front}`}
        alt="photo du produit"
      />
      <CardContent>
        <Box className="card-content">
          <div className="card-mug-props">
            <div className="card-mug-name">
              {randomProduct.name}
            </div>
            <div className="card-mug-categ">
              {/* {randomProduct.category} */}
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
          to=""
        >
          <Button
            id="card-button"
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Détails
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
