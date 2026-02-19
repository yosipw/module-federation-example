import { Link, useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <h2 className={styles.navTitle}>React MFE</h2>
        <ul className={styles.navLinks}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? styles.active : ''}
            >
              Welcome
            </Link>
          </li>
          <li>
            <Link 
              to="/cards" 
              className={isActive('/cards') ? styles.active : ''}
            >
              Card Display
            </Link>
          </li>
          <li>
            <Link 
              to="/chart" 
              className={isActive('/chart') ? styles.active : ''}
            >
              Chart Demo
            </Link>
          </li>
          <li>
            <Link 
              to="/showcase" 
              className={isActive('/showcase') ? styles.active : ''}
            >
              Component Showcase
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;