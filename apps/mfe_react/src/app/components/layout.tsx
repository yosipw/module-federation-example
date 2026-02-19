import { Outlet } from 'react-router-dom';
import Navigation from './navigation';
import './layout.module.scss';

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