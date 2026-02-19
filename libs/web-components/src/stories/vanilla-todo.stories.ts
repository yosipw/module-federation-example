import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Vanilla Todo',
  component: 'vanilla-todo',
  parameters: {
    docs: {
      description: {
        component: 'A todo list component using Shadow DOM for style encapsulation. Demonstrates form handling, array manipulation, and event delegation.',
      },
    },
  },
};

export const Default = () => {
  const container = document.createElement('div');
  container.innerHTML = '<vanilla-todo></vanilla-todo>';
  return container;
};

export const PrePopulated = () => {
  const container = document.createElement('div');
  const todo = document.createElement('vanilla-todo') as any;
  
  container.appendChild(todo);
  
  setTimeout(() => {
    const input = todo.shadowRoot?.querySelector('input');
    const form = todo.shadowRoot?.querySelector('form');
    
    ['Learn Web Components', 'Build with Lit', 'Master Module Federation'].forEach(text => {
      if (input && form) {
        input.value = text;
        form.dispatchEvent(new Event('submit'));
      }
    });
  }, 100);
  
  return container;
};

export const WithInstructions = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div style="max-width: 600px;">
      <h3>Todo List with Shadow DOM</h3>
      <p><strong>Key Concepts:</strong></p>
      <ul>
        <li>Shadow DOM for style encapsulation</li>
        <li>Form submission handling</li>
        <li>Dynamic list rendering</li>
        <li>Event delegation</li>
      </ul>
      <p><strong>Try it:</strong> Add some tasks and delete them!</p>
      <vanilla-todo></vanilla-todo>
    </div>
  `;
  return container;
};