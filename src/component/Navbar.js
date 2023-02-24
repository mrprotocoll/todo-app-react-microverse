import { NavLink } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import styles from 'styles/Navbar.module.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen
        && ref.current
        && !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);
  return (
    <nav className={styles.navbar}>
      <button type="button" className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? (
          <MdClose style={{ width: '32px', height: '32px' }} />
        ) : (
          <FiMenu
            style={{
              width: '32px',
              height: '32px',
            }}
          />
        ) }
      </button>
      <ul className={`${styles['menu-nav']}${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
