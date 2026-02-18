import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import CardDisplay from './pages/card-display';
import ChartDemo from './pages/chart-demo';
import ComponentShowcase from './pages/component-showcase';
import NxWelcome from './pages/nx-welcome';

interface AppProps {
  basename?: string;
}

function RouteDebugger() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Current route:', location.pathname);
    console.log('Full location:', location);
  }, [location]);
  
  return null;
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
    const detectedBasename = `/${segments[0]}`;
    console.log('Auto-detected basename:', detectedBasename);
    return detectedBasename;
  }
  
  return '/';
};

export function App({ basename }: AppProps = {}) {
  const routerBasename = basename || getBasename();
  
  console.log('App initialized with basename:', routerBasename);

  return (
    <BrowserRouter basename={routerBasename}>
      <RouteDebugger />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardDisplay />} />
          <Route path="chart" element={<ChartDemo />} />
          <Route path="showcase" element={<ComponentShowcase />} />
          <Route path="welcome" element={<NxWelcome />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
