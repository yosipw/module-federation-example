import * as React from 'react';
import type { CardDetails } from '@module-federation-example/web-components';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      // ENTRY
      'mfe-react': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'wc-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { 
        icon: string; 
        size?: number;
      };
      'wc-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        details?: CardDetails;
      };
      'wc-chart': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        data?: string; // ✅ JSON string
      };
      // ✅ Add this declaration
      'wc-chart-lit': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        data?: ChartData; // Object instead of string
      };
      'vanilla-counter': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'vanilla-todo': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'wc-tabs': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        tabs?: string; // ✅ JSON string
      };
      'wc-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
        title?: string;
      };
      'wc-input': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        label?: string;
        value?: string;
        type?: string;
        required?: boolean;
        pattern?: string;
      };
      'wc-data-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        columns?: string; // JSON string
        data?: string; // JSON string
      };
    }
  }
}

export {};
