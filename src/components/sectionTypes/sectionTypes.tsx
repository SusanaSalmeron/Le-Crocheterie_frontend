import React, { FC } from 'react';
import styles from './sectionTypes.module.css';
import cat1 from '../../images/cat1.png';
import cat2 from '../../images/cat2.png';
import cat3 from '../../images/cat3.png';
import cat4 from '../../images/cat4.png';
import cat5 from '../../images/cat5.png';
import cat6 from '../../images/cat6.png';


interface SectionTypesProps {
  onCategory: (e: any) => void
}


const SectionTypes: FC<SectionTypesProps> = (props: SectionTypesProps) => {


  return (
    <div className={styles.sectionTypes} data-testid="sectionTypes">
      <div className={styles.title}>
        <h2>Category products</h2>
      </div>
      <div className={styles.categories}>
        <figure>
          <button onClick={props.onCategory} >
            <img src={cat1} alt="animals" className={styles.category} />
            <figcaption>Animals</figcaption>
          </button>
        </figure>
        <figure>
          <button onClick={props.onCategory}>
            <img src={cat2} alt="nature" className={styles.category} />
            <figcaption>Nature</figcaption>
          </button>
        </figure>
        <figure>
          <button onClick={props.onCategory}>
            <img src={cat3} alt="movies" className={styles.category} />
            <figcaption>Movies</figcaption>
          </button>
        </figure>
        <figure>
          <button onClick={props.onCategory}>
            <img src={cat4} alt="people" className={styles.category} />
            <figcaption>People</figcaption>
          </button>
        </figure>
        <figure>
          <button onClick={props.onCategory}>
            <img src={cat5} alt="fantasy" className={styles.category} />
            <figcaption>Fantasy</figcaption>
          </button>
        </figure>
        <figure>
          <button onClick={props.onCategory}>
            <img src={cat6} alt="misc" className={styles.category} />
            <figcaption>Misc</figcaption>
          </button>
        </figure>
      </div>
    </div>
  )
};

export default SectionTypes;
