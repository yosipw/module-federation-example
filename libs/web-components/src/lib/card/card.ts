import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { CardDetails } from './card-details';

export class Card extends LitElement {
  private _details!: CardDetails;
  @property()
  set details(value: CardDetails) {
    const oldValue = this._details;
    this._details = value;
    this.requestUpdate('details', oldValue);
  }
  get details() {
    return this._details;
  }

  static override styles = css`
    article {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      gap: 15px;
      padding: 15px;
      border-radius: 5px;
      background-color: var(--slate);
      max-width: 400px;
      font-family: sans-serif;
      line-height: 20px;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    p {
      color: var(--white);
      margin: 0;
    }

    .icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    footer {
      display: flex;
      gap: 10px;
      align-items: center;
      color: var(--white);
      cursor: pointer;
    }

    wc-icon {
      display: flex;
      position: relative;
      left: -2px;
    }

    :host,
    :root {
      --white: #fff;
      --slate: #333;
      --primary: #0690de;
    }
  ` as CSSResultGroup;

  getDetails() {
    this.dispatchEvent(
      new CustomEvent('card-details-get', {
        detail: this.details,
        bubbles: true,
        composed: true,
      })
    );
  }

  override render(): unknown {
    return html`
      <article>
        <img src="${this.details.imageUrl}" alt="${this.details.title}" />
        <p>${this.details.description}</p>
        <footer @click=${this.getDetails}>
          <div class="icon-wrapper">
            <wc-icon icon="assignment"></wc-icon>
          </div>
          <span>get details</span>
        </footer>
      </article>
    `;
  }
}
