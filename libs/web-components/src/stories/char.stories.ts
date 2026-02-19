import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Chart',
  component: 'wc-chart',
  parameters: {
    docs: {
      description: {
        component: 'A bar chart component built with React and wrapped as a web component. Demonstrates cross-framework integration and Canvas API usage.',
      },
    },
  },
};

export const Default = () => {
  const container = document.createElement('div');
  const chart = document.createElement('wc-chart') as any;
  
  chart.data = JSON.stringify({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [30, 45, 60, 40, 70]
  });
  
  container.appendChild(chart);
  return container;
};

export const SalesData = () => {
  const container = document.createElement('div');
  
  const title = document.createElement('h3');
  title.textContent = 'Monthly Sales Report';
  title.style.marginBottom = '16px';
  container.appendChild(title);
  
  const chart = document.createElement('wc-chart-lit') as any;
  chart.data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    values: [125000, 150000, 180000, 220000]
  };
  
  container.appendChild(chart);
  return container;
};

export const WebsiteTraffic = () => {
  const container = document.createElement('div');
  
  const title = document.createElement('h3');
  title.textContent = 'Weekly Visitors';
  title.style.marginBottom = '16px';
  container.appendChild(title);
  
  const chart = document.createElement('wc-chart') as any;
  chart.data = JSON.stringify({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [1200, 1500, 1800, 1600, 2000, 2500, 2200]
  });

  container.appendChild(chart);
  return container;
};

export const ProductionMetrics = () => {
  const container = document.createElement('div');
  
  const title = document.createElement('h3');
  title.textContent = 'Production Units (Last 6 Months)';
  title.style.marginBottom = '16px';
  container.appendChild(title);
  
  const chart = document.createElement('wc-chart') as any;
  chart.data = JSON.stringify({
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [850, 920, 1050, 980, 1100, 1250]
  });

  container.appendChild(chart);
  return container;
};

export const Interactive = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  
  const title = document.createElement('h3');
  title.textContent = 'Interactive Chart Demo';
  container.appendChild(title);
  
  const description = document.createElement('p');
  description.textContent = 'Click the button to generate random data:';
  container.appendChild(description);
  
  const chart = document.createElement('wc-chart-lit') as any;
  chart.data = JSON.stringify({
    labels: ['A', 'B', 'C', 'D', 'E'],
    values: [50, 70, 60, 80, 90]
  });
  container.appendChild(chart);
  
  const button = document.createElement('button');
  button.textContent = 'Randomize Data';
  button.style.marginTop = '16px';
  button.style.padding = '8px 16px';
  button.style.background = '#0690de';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  
  button.addEventListener('click', () => {
    chart.data = {
      labels: ['A', 'B', 'C', 'D', 'E', "Fs"],
      values: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 20)
    };
  });
  
  container.appendChild(button);
  
  return container;
};