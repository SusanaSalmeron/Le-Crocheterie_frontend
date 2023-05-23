import React, { FC } from 'react';
import styles from '../../styles/sectionTypes.module.css';
import Image from 'next/image';


interface SectionTypesProps {
  onCategory: (e: any) => void
}

interface Category {
  name: string,
  image: string
}
const cats: Category[] = [
  { name: "animals", image: "/cat1" },
  { name: "nature", image: "/cat2" },
  { name: "movies", image: "/cat3" },
  { name: "people", image: "/cat4" },
  { name: "fantasy", image: "/cat5" },
  { name: "misc", image: "/cat6" }
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
              <Image src={cat.image} alt={cat.name} width={50} height={50} className={styles.category} />
              <figcaption>{cat.name}</figcaption>
            </button>
          </figure>
        })}
      </div>
    </div>
  )
};

export default SectionTypes;
