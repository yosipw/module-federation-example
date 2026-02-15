// apps/mfe_react/src/app/pages/chart-demo.tsx
import { useEffect } from 'react';
import { registerElements } from '@module-federation-example/web-components';

export function ChartDemo() {
  useEffect(() => {
    registerElements();
  }, []);

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65000, 72000, 68000, 85000, 92000, 88000]
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Sales Dashboard</h1>
      {/* Pass as JSON string */}
      <wc-chart data={JSON.stringify(salesData)}></wc-chart>
    </div>
  );
}

export default ChartDemo;