import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import CardDisplay from './pages/card-display';
import ChartDemo from './pages/chart-demo';
import ComponentShowcase from './pages/component-showcase';
import NxWelcome from './pages/nx-welcome';

export function App() {
  return (
    <BrowserRouter>
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
