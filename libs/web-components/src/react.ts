// Re-export everything from main entry
export * from './index';

// Add React-specific chart components
export { ChartComponent } from './lib/chart/chart-component';
export type { ChartComponentProps } from './lib/chart/chart-component';
export { WcChart } from './lib/chart/chart-wrapper';

// Separate registration function for chart
export function registerChartComponent(): void {
  if (typeof window !== 'undefined' && !customElements.get('wc-chart')) {
    const { WcChart } = require('./lib/chart/chart-wrapper');
    customElements.define('wc-chart', WcChart);
  }
}