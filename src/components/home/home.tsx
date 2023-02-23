import React, { FC } from 'react';
import HomeCarousel from '../homeCarousel/homeCarousel';

import styles from './home.module.css';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <div className={styles.carousel}>
      <HomeCarousel />
    </div>
  </div>
);

export default Home;
