// apps/mfe_react/src/app/pages/chart-demo.tsx
import { useEffect } from 'react';
import { registerChartComponent } from '@module-federation-example/web-components/react';

export function ChartDemo() {
  useEffect(() => {
    registerChartComponent(); // ✅ Only register chart component
  }, []);

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65000, 72000, 68000, 85000, 92000, 88000]
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Sales Dashboard</h1>
      <wc-chart data={JSON.stringify(salesData)}></wc-chart>
      <wc-chart-lit data={salesData}></wc-chart-lit>
    </div>
  );
}

export default ChartDemo;