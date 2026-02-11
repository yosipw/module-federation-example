// libs/web-components/src/lib/tabs/tabs.ts
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

export interface TabItem {
  label: string;
  content: string;
}

export class WcTabs extends LitElement {
  @property({ type: Array }) tabs: TabItem[] = [];
  @state() private activeIndex = 0;

  static styles = css`
    :host { display: block; }
    .tabs-header {
      display: flex;
      border-bottom: 2px solid #ddd;
    }
    .tab {
      padding: 12px 24px;
      cursor: pointer;
      border: none;
      background: transparent;
      font-size: 16px;
    }
    .tab.active {
      border-bottom: 3px solid #0690de;
      font-weight: bold;
    }
    .tab-content {
      padding: 20px;
    }
  `;

  render() {
    return html`
      <div class="tabs-header">
        ${this.tabs.map((tab, index) => html`
          <button 
            class="tab ${this.activeIndex === index ? 'active' : ''}"
            @click=${() => this.activeIndex = index}
          >
            ${tab.label}
          </button>
        `)}
      </div>
      <div class="tab-content">
        ${this.tabs[this.activeIndex]?.content || ''}
      </div>
    `;
  }
}