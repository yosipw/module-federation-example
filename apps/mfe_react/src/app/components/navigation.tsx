import { Link, useLocation } from 'react-router-dom';
import './navigation.scss';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="nav-title">React MFE</h2>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Card Display
            </Link>
          </li>
          <li>
            <Link 
              to="/chart" 
              className={isActive('/chart') ? 'active' : ''}
            >
              Chart Demo
            </Link>
          </li>
          <li>
            <Link 
              to="/showcase" 
              className={isActive('/showcase') ? 'active' : ''}
            >
              Component Showcase
            </Link>
          </li>
          <li>
            <Link 
              to="/welcome" 
              className={isActive('/welcome') ? 'active' : ''}
            >
              Welcome
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;