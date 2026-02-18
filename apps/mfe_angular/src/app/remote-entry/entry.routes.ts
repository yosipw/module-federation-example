import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent, // ✅ Use layout component as parent
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../components/card-display.component').then(
            (c) => c.CardDisplayComponent
          ),
      },
      {
        path: 'chart',
        loadComponent: () =>
          import('../pages/chart-demo.component').then(
            (c) => c.ChartDemoComponent
          ),
      },
      {
        path: 'showcase',
        loadComponent: () =>
          import('../pages/component-showcase.component').then(
            (c) => c.ComponentShowcaseComponent
          ),
      },
      {
        path: 'welcome',
        loadComponent: () =>
          import('./nx-welcome.component').then(
            (c) => c.NxWelcomeComponent
          ),
      },
    ],
  },
];
