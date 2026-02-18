import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { ChartData } from '@module-federation-example/web-components';

@Component({
  selector: 'app-chart-demo',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss'],
})
export class ChartDemoComponent implements OnInit {
  chartLoaded = false;
  salesData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65000, 72000, 68000, 85000, 92000, 88000]
  };

  revenueData: ChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    values: [120000, 150000, 135000, 180000]
  };

  get salesDataJson(): string {
    return JSON.stringify(this.salesData);
  }

  get revenueDataJson(): string {
    return JSON.stringify(this.revenueData);
  }

  async ngOnInit() {
    try {
      // Dynamically load chart component
      const { registerChartComponent } = await import(
        '@module-federation-example/web-components/react'
      );
      
      await registerChartComponent();
      this.chartLoaded = true;
    } catch (error) {
      console.error('Failed to load chart component:', error);
    }
  }
}