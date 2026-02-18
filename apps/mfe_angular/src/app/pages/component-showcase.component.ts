import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerElements } from '@module-federation-example/web-components';

@Component({
  selector: 'app-component-showcase',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './component-showcase.component.html',
  styleUrls: ['./component-showcase.component.scss'],
})
export class ComponentShowcaseComponent implements OnInit {
  tabsData = JSON.stringify([
    { label: 'Profile', content: 'User profile information goes here' },
    { label: 'Settings', content: 'Application settings and preferences' },
    { label: 'Security', content: 'Security and privacy options' },
  ]);

  tableColumns = JSON.stringify([
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ]);

  tableData = JSON.stringify([
    { name: 'John Doe', role: 'Developer', status: 'Active' },
    { name: 'Jane Smith', role: 'Designer', status: 'Active' },
    { name: 'Bob Johnson', role: 'Manager', status: 'Away' },
  ]);

  ngOnInit() {
    registerElements();
  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}