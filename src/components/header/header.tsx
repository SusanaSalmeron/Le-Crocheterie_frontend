import React, { FC } from 'react';
import styles from './header.module.css';
import SearchBar from '../searchBar/searchBar';
import NavbarMenu from '../navbarMenu/navbarMenu';
import logo from '../../images/logo.png';



interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header} data-testid="Header">
      <NavbarMenu />
      <figure className={styles.logo}>
        <img alt="logo" src={logo} />
      </figure>
      <SearchBar />
    </header>
  )
};

export default Header;
