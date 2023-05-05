import React, { FC } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbarMenu.module.css';
import { useMedia } from '../../src/hooks/useMedia';
import Script from 'next/script';



interface NavbarMenuProps { }

const NavbarMenu: FC<NavbarMenuProps> = () => {
  const isMobile = useMedia('(max-width: 500px)')
  return (
    <>
      <Script src="https://kit.fontawesome.com/eea0ea8650.js" />
      <nav className={styles.navbar} data-testid="NavbarMenu">
        <div className={styles.menu} >
          <ul className={styles.menu}>
            <li>
              <Link href="/">
                <i className="fa-solid fa-house" />
              </Link>
            </li>
            <li>
              <Link href="/products">products</Link>
            </li>
            <li>
              <Link href="home">about</Link>
            </li>
            {!isMobile ? <li>
              <Link href="/contact">contact</Link>
            </li> : null}
          </ul>
        </div>
      </nav>
    </>
  )
};

export default NavbarMenu;
