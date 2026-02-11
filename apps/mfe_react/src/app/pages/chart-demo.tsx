// apps/mfe_react/src/app/pages/chart-demo.tsx
import { registerElements } from '@module-federation-example/web-components';

registerElements();

export function ChartDemo() {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65000, 72000, 68000, 85000, 92000, 88000]
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Sales Dashboard</h1>
      <wc-chart data={JSON.stringify(salesData)}></wc-chart>
    </div>
  );
}