import React, { FC } from 'react';
import styles from './sectionTypes.module.css';
import cat2 from '../../images/cat2.png';


interface SectionTypesProps {
  onCategory: (e: any) => void
}
const SectionTypesCopy: FC<SectionTypesProps> = (props: SectionTypesProps) => {

  return (
    <button onClick={props.onCategory}>
      <img src={cat2} alt="nature" className={styles.category} />
      <figcaption>Nature</figcaption>
    </button>
  )
}

export default SectionTypesCopy;
