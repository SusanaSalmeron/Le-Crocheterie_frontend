import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';


interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.elements}>
          <ul className={styles.menu}>
            <li>
              <Link to="home">
                <i className="fa-solid fa-house" />
              </Link>
            </li>
            <li>
              <Link to="home">products</Link>
            </li>
            <li>
              <Link to="home">about</Link>
            </li>
            <li>
              <Link to="home">contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <p>logo</p>
        </div>
        <div className={styles.search}>
          <label>Search</label>
          <input type='text' name='search' />
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
