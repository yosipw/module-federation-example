// libs/web-components/src/stories/vanilla-counter.stories.ts
import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Vanilla Counter',
  component: 'vanilla-counter',
  parameters: {
    docs: {
      description: {
        component: 'A simple counter component built with vanilla JavaScript to demonstrate basic Web Component concepts: custom elements, lifecycle hooks, and event handling.',
      },
    },
  },
};

export const Default = () => {
  const container = document.createElement('div');
  container.innerHTML = '<vanilla-counter></vanilla-counter>';
  return container;
};

export const MultipleCounters = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '20px';
  container.style.flexWrap = 'wrap';
  
  for (let i = 0; i < 3; i++) {
    const counter = document.createElement('vanilla-counter');
    container.appendChild(counter);
  }
  
  return container;
};

export const WithDescription = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div style="max-width: 600px;">
      <h3>Interactive Counter Component</h3>
      <p>This component demonstrates:</p>
      <ul>
        <li>Custom element definition</li>
        <li>Internal state management</li>
        <li>Event listeners</li>
        <li>DOM manipulation</li>
      </ul>
      <vanilla-counter></vanilla-counter>
    </div>
  `;
  return container;
};