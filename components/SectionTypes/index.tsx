import React, { FC } from 'react';
import styles from '../../styles/sectionTypes.module.css';
import cat1 from '../../public/cat1.png';
import cat2 from '../../public/cat2.png';
import cat3 from '../../public/cat3.png';
import cat4 from '../../public/cat4.png';
import cat5 from '../../public/cat5.png';
import cat6 from '../../public/cat6.png';
import Image, { StaticImageData } from 'next/image';



interface SectionTypesProps {
  onCategory: (e: any) => void
}

interface Category {
  name: string,
  image: StaticImageData
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
              <Image src={cat.image} alt={cat.name} className={styles.category} />
              <figcaption>{cat.name}</figcaption>
            </button>
          </figure>
        })}
      </div>
    </div>
  )
};

export default SectionTypes;
