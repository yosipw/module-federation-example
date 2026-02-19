import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Input',
  component: 'wc-input',
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    required: { control: 'boolean' },
    pattern: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A validated input component with real-time validation feedback. Demonstrates form validation, custom events, and two-way binding.',
      },
    },
  },
};

export const TextInput = () => {
  const container = document.createElement('div');
  const input = document.createElement('wc-input') as any;
  
  input.label = 'Username';
  input.type = 'text';
  input.required = true;
  
  input.addEventListener('input-change', (e: any) => {
    console.log('Value changed:', e.detail.value);
  });
  
  container.appendChild(input);
  return container;
};

export const EmailValidation = () => {
  const container = document.createElement('div');
  const input = document.createElement('wc-input') as any;
  
  input.label = 'Email Address';
  input.type = 'email';
  input.required = true;
  input.pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  
  container.appendChild(input);
  return container;
};

export const PasswordInput = () => {
  const container = document.createElement('div');
  const input = document.createElement('wc-input') as any;
  
  input.label = 'Password';
  input.type = 'password';
  input.required = true;
  input.pattern = '.{8,}';
  
  const hint = document.createElement('small');
  hint.textContent = 'Password must be at least 8 characters';
  hint.style.display = 'block';
  hint.style.marginTop = '-12px';
  hint.style.color = '#666';
  hint.style.fontSize = '14px';
  
  container.appendChild(input);
  container.appendChild(hint);
  
  return container;
};

export const CompleteForm = () => {
  const container = document.createElement('div');
  container.style.maxWidth = '400px';
  container.style.padding = '20px';
  container.style.border = '1px solid #ddd';
  container.style.borderRadius = '8px';
  
  const title = document.createElement('h3');
  title.textContent = 'Registration Form';
  container.appendChild(title);
  
  // Name input
  const nameInput = document.createElement('wc-input') as any;
  nameInput.label = 'Full Name';
  nameInput.type = 'text';
  nameInput.required = true;
  container.appendChild(nameInput);
  
  // Email input
  const emailInput = document.createElement('wc-input') as any;
  emailInput.label = 'Email';
  emailInput.type = 'email';
  emailInput.required = true;
  container.appendChild(emailInput);
  
  // Password input
  const passwordInput = document.createElement('wc-input') as any;
  passwordInput.label = 'Password';
  passwordInput.type = 'password';
  passwordInput.required = true;
  passwordInput.pattern = '.{8,}';
  container.appendChild(passwordInput);
  
  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.style.width = '100%';
  submitBtn.style.padding = '12px';
  submitBtn.style.marginTop = '16px';
  submitBtn.style.background = '#0690de';
  submitBtn.style.color = 'white';
  submitBtn.style.border = 'none';
  submitBtn.style.borderRadius = '4px';
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.fontSize = '16px';
  
  submitBtn.addEventListener('click', () => {
    const isValid = [nameInput, emailInput, passwordInput].every((input: any) => input.validate());
    
    if (isValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix validation errors');
    }
  });
  
  container.appendChild(submitBtn);
  
  return container;
};

export const PhoneNumber = () => {
  const container = document.createElement('div');
  const input = document.createElement('wc-input') as any;
  
  input.label = 'Phone Number';
  input.type = 'tel';
  input.required = true;
  input.pattern = '^\\+?[0-9]{10,14}$';
  
  const hint = document.createElement('small');
  hint.textContent = 'Format: +1234567890 (10-14 digits)';
  hint.style.display = 'block';
  hint.style.marginTop = '-12px';
  hint.style.color = '#666';
  hint.style.fontSize = '14px';
  
  container.appendChild(input);
  container.appendChild(hint);
  
  return container;
};