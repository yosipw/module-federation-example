// libs/web-components/src/lib/chart/chart-wrapper.tsx
import { useEffect, useRef } from 'react';
import React from 'react'; // ✅ Add this import
import ReactDOM from 'react-dom/client';
import type { Root } from 'react-dom/client';

export interface ChartData {
  labels: string[];
  values: number[];
}

export function ChartComponent({ data }: { data: ChartData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    ctx.clearRect(0, 0, width, height);

    // Calculate dimensions
    const max = Math.max(...data.values);
    const barWidth = width / data.values.length;
    const padding = 40;
    const chartHeight = height - padding;

    // Draw bars
    data.values.forEach((value, i) => {
      const barHeight = (value / max) * (chartHeight - 20);
      ctx.fillStyle = '#0690de';
      ctx.fillRect(
        i * barWidth + 10,
        height - barHeight - 20,
        barWidth - 20,
        barHeight
      );
      
      ctx.fillStyle = '#333';
      ctx.font = '12px sans-serif';
      ctx.fillText(data.labels[i], i * barWidth + 15, height - 5);
    });

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
  }, [data]);

  return (
    <div style={{ padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
      <canvas ref={canvasRef} width={600} height={400} style={{ display: 'block' }} />
    </div>
  );
}

// Web Component wrapper
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

  set data(value: ChartData) {
    this._data = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'data' && newValue) {
      try {
        this._data = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.error('Invalid data format', e);
      }
    }
  }

  private render() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.root.render(<ChartComponent data={this._data} />);
  }
}