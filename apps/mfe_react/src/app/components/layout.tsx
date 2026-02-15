import { Outlet } from 'react-router-dom';
import Navigation from './navigation';
import './layout.scss';

export function Layout() {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;