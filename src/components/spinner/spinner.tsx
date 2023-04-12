import React, { FC, CSSProperties } from 'react';
import styles from './spinner.module.css';
import RiseLoader from "react-spinners/RiseLoader";

interface SpinnerProps {
  size: number
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div className={styles.Spinner} data-testid="spinner">
      <RiseLoader
        cssOverride={override}
        color={"#bb5644"}
        size={props.size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
};

export default Spinner;
