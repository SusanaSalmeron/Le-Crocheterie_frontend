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

interface Category {
  name: string,
  image: string
}
const cats: Category[] = [
  { name: "animals", image: cat1 },
  { name: "nature", image: cat2 },
  { name: "movies", image: cat3 },
  { name: "people", image: cat4 },
  { name: "fantasy", image: cat5 },
  { name: "misc", image: cat6 }
]

const SectionTypes: FC<SectionTypesProps> = (props: SectionTypesProps) => {
  return (
    <div className={styles.sectionTypes} data-testid="sectionTypes">
      <div className={styles.title}>
        <h2>Category products</h2>
      </div>
      <div className={styles.categories}>
        {cats.map((cat, i) => {
          return <figure key={i}>
            <button onClick={props.onCategory} >
              <img src={cat.image} alt={cat.name} className={styles.category} />
              <figcaption>{cat.name}</figcaption>
            </button>
          </figure>
        })}
      </div>
    </div>
  )
};

export default SectionTypes;
