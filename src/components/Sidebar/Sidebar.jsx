import AppNav from '../AppNav/AppNav';
import styles from './Sidebar.module.css';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
