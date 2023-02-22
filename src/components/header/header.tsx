import React, { FC } from 'react';
import styles from './header.module.css';
import logo2 from '../../images/logo2.png';
import SearchBar from '../searchBar/searchBar';
import NavbarMenu from '../navbarMenu/navbarMenu';


interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header} data-testid="Header">
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <NavbarMenu />
          <div className={styles.logo}>
            <img alt="logo" src={logo2} />
          </div>
          <SearchBar />
        </div>
      </nav>
    </div>
  )
};

export default Header;
