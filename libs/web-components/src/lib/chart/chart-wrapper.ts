import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { ChartComponent, type ChartData } from './chart-component';

export class WcChart extends HTMLElement {
  private root: Root | null = null;
  private _data: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [30, 45, 60, 40, 70]
  };

  static get observedAttributes() {
    return ['data'];
  }

  get data(): ChartData {
    return this._data;
  }

  set data(value: string) {
    this._data = JSON.parse(value);
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      requestAnimationFrame(() => {
        this?.root?.unmount();
        this.root = null;
      });
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'data' && oldValue !== newValue) {
      try {
        this._data = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.error('Invalid JSON data for chart:', e);
      }
    }
  }

  private render() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.root.render(React.createElement(ChartComponent, { data: this._data }));
  }
}

export type { ChartData };