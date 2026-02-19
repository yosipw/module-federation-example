import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  selector: 'app-mfe-angular-entry',
  template: `
    <div class="app-layout">
      <app-navigation></app-navigation>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }
  `]
})
export class RemoteEntryComponent {}
