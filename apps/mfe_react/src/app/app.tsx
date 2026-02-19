import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import CardDisplay from './pages/card-display';
import ChartDemo from './pages/chart-demo';
import ComponentShowcase from './pages/component-showcase';
import NxWelcome from './pages/nx-welcome';

interface AppProps {
  basename?: string;
}

/**
 * Automatically detect basename from URL
 * Supports any path like /mfe_react, /mfe_react_alternate, /any-path
 * Returns '/' for standalone mode
 */
const getBasename = () => {
  const path = window.location.pathname;
  
  // If we're at root or just one level deep, use '/'
  if (path === '/' || !path.includes('/')) {
    return '/';
  }
  
  // Extract first path segment (everything before second /)
  const segments = path.split('/').filter(Boolean);
  
  // If there are segments, use the first one as basename
  if (segments.length > 0) {
    return `/${segments[0]}`;
  }
  
  return '/';
};

export function App({ basename }: AppProps = {}) {
  const routerBasename = basename || getBasename();
  
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NxWelcome />} />
          <Route path="cards" element={<CardDisplay />} />
          <Route path="chart" element={<ChartDemo />} />
          <Route path="showcase" element={<ComponentShowcase />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
