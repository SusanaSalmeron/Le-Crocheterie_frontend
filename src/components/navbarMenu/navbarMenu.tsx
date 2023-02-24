import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbarMenu.module.css';

interface NavbarMenuProps { }

const NavbarMenu: FC<NavbarMenuProps> = () => {
  return (
    <div className={styles.NavbarMenu} data-testid="NavbarMenu">
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
    </div>
  )
};

export default NavbarMenu;
