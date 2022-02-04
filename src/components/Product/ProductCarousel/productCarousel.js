import { Carousel } from 'react-carousel-minimal';
import frontBackMockup from 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front_back.png';
import frontMockup from 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front.png';
import backMockup from 'src/assets/images/mug-mockups/mug_solo_back_logo_oclock.png';

import './style.scss';

export default function ProductCarousel(product) {
  console.log(product);
  const data = [
    {
      image: `http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/uploads/images/${product.mockupFront}`,
      caption: 'Recto',
    },
    {
      image: backMockup,
      caption: 'Verso',
    },
    {
      image: `http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/uploads/images/${product.mockupOverview}`,
      caption: 'Recto verso',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    paddingTop: '20px',
    display: 'none',
  };

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="product-carousel-container">
      <div style={{ textAlign: 'center' }}>
        <div>
          <Carousel
            data={data}
            time={10000}
            captionStyle={captionStyle}
            slideNumber
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic // ={true} but ommited with Eslint
            dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="100px"
            className="product-carousel"
          />
        </div>
      </div>
    </div>
  );
}
