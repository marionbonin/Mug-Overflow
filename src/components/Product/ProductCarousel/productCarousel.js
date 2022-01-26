import { Carousel } from 'react-carousel-minimal';
import frontBackMockup from 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front_back.png';
import frontMockup from 'src/assets/images/mug-mockups/CSS_IS_AWESOME_front.png';
import backMockup from 'src/assets/images/mug-mockups/mug_solo_back_logo_oclock.png';

import './style.scss';


 export default function ProductCarousel() {
 const data = [
    {
      image: frontMockup,
      caption: "Recto"
    },
    {
      image: backMockup,
      caption: "Verso"
    },
    {
      image: frontBackMockup,
      caption: "Recto & verso"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="product-carousel-parent">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel 
            data={data}
            time={10000}
            captionStyle={captionStyle}
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            className="product-carousel"
          />
        </div>
      </div>
    </div>
  );
}
