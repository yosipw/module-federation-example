// libs/web-components/src/lib/form/input.ts
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

export class WcInput extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) type = 'text';
  @property({ type: Boolean }) required = false;
  @property({ type: String }) pattern = '';
  @state() private error = '';

  static override styles = css`
    :host { display: block; margin-bottom: 16px; }
    label { display: block; margin-bottom: 4px; font-weight: 500; }
    input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    input.error { border-color: red; }
    .error-message { color: red; font-size: 14px; margin-top: 4px; }
  `;

  validate() {
    if (this.required && !this.value) {
      this.error = 'This field is required';
      return false;
    }
    if (this.pattern && !new RegExp(this.pattern).test(this.value)) {
      this.error = 'Invalid format';
      return false;
    }
    this.error = '';
    return true;
  }

  handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.validate();
    this.dispatchEvent(new CustomEvent('input-change', { 
      detail: { value: this.value },
      bubbles: true 
    }));
  }

  override render() {
    return html`
      <label>${this.label}</label>
      <input
        type=${this.type}
        .value=${this.value}
        @input=${this.handleInput}
        class=${this.error ? 'error' : ''}
      />
      ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
    `;
  }
}