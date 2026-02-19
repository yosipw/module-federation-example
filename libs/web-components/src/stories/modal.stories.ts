import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Modal',
  component: 'wc-modal',
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A modal dialog component with backdrop. Demonstrates slots, event dispatching, and conditional rendering.',
      },
    },
  },
};

export const Default = () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  const modal = document.createElement('wc-modal') as any;
  
  button.textContent = 'Open Modal';
  button.style.padding = '12px 24px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  
  modal.title = 'Example Modal';
  modal.innerHTML = '<p>This is the modal content. You can put anything here!</p>';
  
  button.addEventListener('click', () => {
    modal.open = true;
  });
  
  modal.addEventListener('modal-close', () => {
    console.log('Modal closed!');
  });
  
  container.appendChild(button);
  container.appendChild(modal);
  
  return container;
};

export const WithForm = () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  const modal = document.createElement('wc-modal') as any;
  
  button.textContent = 'Open Form Modal';
  button.style.padding = '12px 24px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  
  modal.title = 'User Registration';
  modal.innerHTML = `
    <form style="display: flex; flex-direction: column; gap: 12px;">
      <input type="text" placeholder="Username" required style="padding: 8px;" />
      <input type="email" placeholder="Email" required style="padding: 8px;" />
      <input type="password" placeholder="Password" required style="padding: 8px;" />
      <button type="submit" style="padding: 12px; background: #0690de; color: white; border: none; cursor: pointer;">
        Submit
      </button>
    </form>
  `;
  
  button.addEventListener('click', () => {
    modal.open = true;
  });
  
  container.appendChild(button);
  container.appendChild(modal);
  
  return container;
};

export const ConfirmationDialog = () => {
  const container = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const modal = document.createElement('wc-modal') as any;
  
  deleteBtn.textContent = 'Delete Item';
  deleteBtn.style.padding = '12px 24px';
  deleteBtn.style.fontSize = '16px';
  deleteBtn.style.background = '#dc2626';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.cursor = 'pointer';
  deleteBtn.style.borderRadius = '4px';
  
  modal.title = 'Confirm Deletion';
  modal.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button id="cancel-btn" style="padding: 8px 16px; background: #e5e7eb; border: none; cursor: pointer; border-radius: 4px;">
          Cancel
        </button>
        <button id="confirm-btn" style="padding: 8px 16px; background: #dc2626; color: white; border: none; cursor: pointer; border-radius: 4px;">
          Delete
        </button>
      </div>
    </div>
  `;
  
  deleteBtn.addEventListener('click', () => {
    modal.open = true;
  });
  
  // Handle button clicks inside modal
  setTimeout(() => {
    modal.querySelector('#cancel-btn')?.addEventListener('click', () => {
      modal.open = false;
    });
    
    modal.querySelector('#confirm-btn')?.addEventListener('click', () => {
      alert('Item deleted!');
      modal.open = false;
    });
  }, 100);
  
  container.appendChild(deleteBtn);
  container.appendChild(modal);
  
  return container;
};

export const LongContent = () => {
  const container = document.createElement('div');
  const button = document.createElement('button');
  const modal = document.createElement('wc-modal') as any;
  
  button.textContent = 'Open Terms & Conditions';
  button.style.padding = '12px 24px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  
  modal.title = 'Terms and Conditions';
  modal.innerHTML = `
    <div style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
      <h4>1. Agreement to Terms</h4>
      <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h4>2. Use License</h4>
      <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.</p>
      
      <h4>3. Disclaimer</h4>
      <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
      
      <h4>4. Limitations</h4>
      <p>In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
      
      <h4>5. Revisions</h4>
      <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.</p>
    </div>
  `;
  
  button.addEventListener('click', () => {
    modal.open = true;
  });
  
  container.appendChild(button);
  container.appendChild(modal);
  
  return container;
};