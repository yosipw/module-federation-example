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

const getBasename = () => {
  const path = window.location.pathname;
  console.log('Detecting basename from:', path);
  
  if (path.startsWith('/mfe_react_alternate')) {
    console.log('Using basename: /mfe_react_alternate');
    return '/mfe_react_alternate';
  }
  if (path.startsWith('/mfe_react')) {
    console.log('Using basename: /mfe_react');
    return '/mfe_react';
  }
  console.log('Using basename: / (standalone)');
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
