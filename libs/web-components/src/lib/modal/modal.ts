// libs/web-components/src/lib/modal/modal.ts
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class WcModal extends LitElement {
  @property({ type: Boolean }) open = false;
  @property({ type: String }) override title = '';  // ✅ Add override

  static override styles = css`  // ✅ Add override
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal {
      background: white;
      border-radius: 8px;
      padding: 24px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .close-btn {
      cursor: pointer;
      border: none;
      background: transparent;
      font-size: 24px;
    }
  `;

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close', { bubbles: true }));
  }

  override render() {  // ✅ Add override
    if (!this.open) return null;
    
    return html`
      <div class="backdrop" @click=${this.close}>
        <div class="modal" @click=${(e: Event) => e.stopPropagation()}>
          <div class="modal-header">
            <h2>${this.title}</h2>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}