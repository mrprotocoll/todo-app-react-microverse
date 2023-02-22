import logo from 'logo.png';
import styles from 'styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="logo" />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam officia, voluptatibus</p>
  </header>
);

export default Header;
