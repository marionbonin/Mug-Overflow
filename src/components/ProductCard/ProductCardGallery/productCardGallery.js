import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import { cleanListState } from '../../../actions/products';
import loadingMugSvg from '../../../assets/images/mug-to-spill.svg';

import './style.scss';

export default function ProductCardGallery(product) {
  const base = `/produit/${product.props.slug}`;
  const thumbnail = product.props.mockupFront;

  const dispatch = useDispatch();
  // si on veut précharger les images
  // on gère un state pour représenter si l'image est chargée ou non
  const [isLoaded, setIsLoaded] = useState(false);
  // on pose un effet chaque fois que l'image change
  useEffect(() => {
    if (thumbnail) {
      // on la considère comme non chargé
      setIsLoaded(false);
      // on crée une image sans l'afficher
      const image = new Image();
      // à la bonne adresse
      image.src = thumbnail;
      // et on dit quoi faire quand elle sera chargée
      image.onload = function () {
        // on change d'état
        setIsLoaded(true);
      };
    }
  }, [thumbnail]);
  // console.log(product.props);
  const navigate = useNavigate();
  const handleClick = (() => {
    dispatch(cleanListState());
    navigate(base);
  });

  return (
    <Card
      // sx={{ borderRadius: 4 }}
      id="mug-card"
    >
      <CardMedia
        component="img"
        className="cardMugMedia"
        id={!isLoaded ? 'svg' : ''}
        image={isLoaded ? thumbnail : loadingMugSvg}
        alt="photo du produit"
      />
      <CardContent>
        <Box className="card-content">
          <div className="card-mug-props">
            <div className="card-mug-name">
              {product.props.name}
            </div>
            <div className="card-mug-categ">
              {product.props.category[0].name}
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

// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Link from '@mui/material/Link';
// import { cleanListState } from '../../../actions/products';
// import imageMug from '../../../assets/images/mug-mockups/CSS_IS_AWESOME_front.png';

// import './style.scss';

// export default function ProductCardGallery(product) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const base = `/produit/${product.props.slug}`;

//   const handleClick = (() => {
//     dispatch(cleanListState());
//     navigate(base);
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//   });

//   // console.log(product.props);
//   return (
//     <Card
//       // sx={{ borderRadius: 4 }}
//       id="mug-card"
//     >
//       <CardMedia
//         component="img"
//         className="cardMugMedia"
//         image={product.props.mockupFront}
//         alt="photo du produit"
//       />
//       <CardContent>
//         <Box className="card-content">
//           <div className="card-mug-props">
//             <div className="card-mug-name">
//               {product.props.name}
//             </div>
//             <div className="card-mug-categ">
//               {product.props.category[0].name}
//             </div>
//           </div>
//           <IconButton
//             aria-label="add to favorites"
//             className="favourite-button"
//           >
//             <FavoriteIcon />
//           </IconButton>
//         </Box>
//       </CardContent>
//       <CardActions disableSpacing>
//         <Link
//           to={base}
//         >
//           <Button
//             id="card-button"
//             type="button"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             onClick={handleClick}
//           >
//             Détails PCG
//           </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }
