import React, { FC } from 'react';
import HomeCarousel from '../homeCarousel/homeCarousel';

import styles from './home.module.css';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div className={styles.home} data-testid="home">
    <div className={styles.carousel}>
      <HomeCarousel />
    </div>
    <div className={styles.section}>
      <section>
        <h3>100%
        </h3>
        <h4>handmande</h4>
      </section>
      <section>
        <h3>
          100%
        </h3>
        <h4>made with love</h4>
      </section>
      <section>
        <h3>
          100%
        </h3>
        <h4>
          beneficent
        </h4>
      </section>
    </div>
    <div className={styles.types}>

    </div>
  </div>
);

export default Home;
