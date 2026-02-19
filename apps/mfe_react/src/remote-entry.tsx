import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './app/app';

// the entry is created as a webcomponent
class MfeReactElement extends HTMLElement {
  private root!: ReactDOM.Root;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
  disconnectedCallback() {
    this.root.unmount();
  }
}

// register the webcomponent
customElements.get('mfe-react') ||
  customElements.define('mfe-react', MfeReactElement);
