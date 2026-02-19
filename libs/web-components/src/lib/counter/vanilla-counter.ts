export class VanillaCounter extends HTMLElement {
  private count = 0;
  private shadow: ShadowRoot;
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
    
    this.shadow.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        this.count++;
        this.render();
      }
    });
  }
  
  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .container {
          padding: 20px;
          border: 2px solid #333;
          border-radius: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        h3 {
          margin: 0 0 12px 0;
          color: #333;
        }
        p {
          margin: 0 0 16px 0;
          font-size: 18px;
        }
        strong {
          color: #0690de;
          font-size: 24px;
        }
        button {
          padding: 8px 16px;
          background: #0690de;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s;
        }
        button:hover {
          background: #0577ba;
        }
        button:active {
          transform: translateY(1px);
        }
      </style>
      <div class="container">
        <h3>Vanilla Counter</h3>
        <p>Count: <strong>${this.count}</strong></p>
        <button>Increment</button>
      </div>
    `;
  }
}