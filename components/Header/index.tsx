import React, { FC } from 'react';
import styles from '../../styles/header.module.css';
import SearchBar from '../SearchBar/index';
import NavbarMenu from '../NavbarMenu/index';
import Image from 'next/image';



interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header} data-testid="Header">
      <NavbarMenu />
      <figure className={styles.logo}>
        <Image alt="logo" src="/logo.png" width={150} height={80} />
      </figure>
      <SearchBar />
    </header>
  )
};

export default Header;
