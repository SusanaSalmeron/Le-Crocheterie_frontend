import React, { FC } from 'react';
import styles from './header.module.css';
import logo from '../../images/logo.png';
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
            <img alt="logo" src={logo} />
          </div>
          <SearchBar />
        </div>
      </nav>
    </div>
  )
};

export default Header;
