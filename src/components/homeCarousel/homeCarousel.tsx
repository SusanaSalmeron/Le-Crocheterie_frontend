import React, { FC } from 'react';
import styles from './homeCarousel.module.css';
import Carousel from 'nuka-carousel';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';

interface HomeCarouselProps { }

const HomeCarousel: FC<HomeCarouselProps> = () => {
  const controls = {
    nextButtonText: <i className="fa-solid fa-arrow-right"></i>,
    prevButtonText: <i className="fa-solid fa-arrow-left"></i>,
    pagingDotsStyle: {
      fill: '#bb5644'
    },
  }

  return (<div className={styles.Carousel} data-testid="Carousel">
    <Carousel animation="fade" autoplay={true} autoplayInterval={5000} wrapAround={true} defaultControlsConfig={controls}>
      <img src={banner1} alt="banner1" />
      <img src={banner2} alt="banner2" />
    </Carousel>
  </div>
  )
};

export default HomeCarousel;
