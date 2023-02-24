import React, { FC } from 'react';
import styles from './footer.module.css';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
  const year: number = new Date().getFullYear();
  return (
    <div className={styles.footer} data-testid="footer">
      <footer>{`Copyright © Le Crocheterie ${year}`}</footer>
    </div>
  )
};

export default Footer;
