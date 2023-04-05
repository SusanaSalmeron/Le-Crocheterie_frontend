import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbarMenu.module.css';
import useMedia from '../../hooks/useMedia'

interface NavbarMenuProps { }

const NavbarMenu: FC<NavbarMenuProps> = () => {
  const isMobile = useMedia('(max-width: 500px)')
  return (

    <nav className={styles.navbar} data-testid="NavbarMenu">
      <div className={styles.menu} >
        <ul className={styles.menu}>
          <li>
            <Link to="home">
              <i className="fa-solid fa-house" />
            </Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="home">about</Link>
          </li>
          {!isMobile ? <li>
            <Link to="/contact">contact</Link>
          </li> : null}
        </ul>
      </div>
    </nav>
  )
};

export default NavbarMenu;
