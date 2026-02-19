import * as React from 'react';
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { ChartComponent, type ChartData } from './chart-component';

export class WcChart extends LitElement {
  private reactRoot: Root | null = null;

  @property({ type: Object })
  data: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [30, 45, 60, 40, 70]
  };

  override updated() {
    if (!this.reactRoot) {
        this.reactRoot = createRoot(this);
    }
    this.reactRoot.render(React.createElement(ChartComponent, { data: this.data }));
  }
}