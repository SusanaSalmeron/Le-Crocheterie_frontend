import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image';


interface HomeCarouselProps { }

const HomeCarousel: FC<HomeCarouselProps> = () => {
  return (
    <div className="Carousel" data-testid="Carousel">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        showThumbs={false}>
        <div>
          <Image
            src="/banner1"
            alt="banner1"
            width={500}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/banner2"
            alt="banner2"
            width={500}
            height={600}
          />
        </div>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;
