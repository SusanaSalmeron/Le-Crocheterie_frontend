import React, { FC } from 'react';
import './homeCarousel.css';
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';

interface HomeCarouselProps { }

const HomeCarousel: FC<HomeCarouselProps> = () => {
  return (
    <div className="Carousel" data-testid="Carousel">
      <Carousel autoPlay={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={100}
        showThumbs={false}>
        <div>
          <img src={banner1} alt="banner1" />
        </div>
        <div>
          <img src={banner2} alt="banner2" />
        </div>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;
