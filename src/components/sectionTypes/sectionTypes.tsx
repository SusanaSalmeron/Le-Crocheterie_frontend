import React, { FC } from 'react';
import styles from './sectionTypes.module.css';
import cat1 from '../../images/cat1.png';
import cat2 from '../../images/cat2.png';
import cat3 from '../../images/cat3.png';
import cat4 from '../../images/cat4.png';
import cat5 from '../../images/cat5.png';


interface SectionTypesProps { }

const SectionTypes: FC<SectionTypesProps> = () => (
  <div className={styles.sectionTypes} data-testid="sectionTypes">
    <div className={styles.title}>
      <h2>Category products</h2>
    </div>
    <div className={styles.categories}>
      <figure>
        <img src={cat1} alt="animals" className={styles.category} />
        <figcaption>Animals</figcaption>
      </figure>
      <figure>
        <img src={cat2} alt="flowers" className={styles.category} />
        <figcaption>Natura</figcaption>
      </figure>
      <figure>
        <img src={cat3} alt="movies" className={styles.category} />
        <figcaption>Movies</figcaption>
      </figure>
      <figure>
        <img src={cat4} alt="people" className={styles.category} />
        <figcaption>People</figcaption>
      </figure>
      <figure>
        <img src={cat5} alt="objects" className={styles.category} />
        <figcaption>Objects</figcaption>
      </figure>
    </div>
  </div>
);

export default SectionTypes;
