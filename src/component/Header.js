import logo from 'logo.png';
import styles from 'styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="logo" />
  </header>
);

export default Header;
