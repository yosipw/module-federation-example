// libs/web-components/src/stories/data-table.stories.ts
import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Data Table',
  component: 'wc-data-table',
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A sortable data table component. Demonstrates array manipulation, sorting algorithms, and dynamic rendering.',
      },
    },
  },
};

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

export const UserTable = () => {
  const container = document.createElement('div');
  const table = document.createElement('wc-data-table') as any;
  
  table.columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'status', label: 'Status', sortable: false },
  ];
  
  table.data = sampleUsers;
  
  container.appendChild(table);
  return container;
};

export const ProductTable = () => {
  const container = document.createElement('div');
  const table = document.createElement('wc-data-table') as any;
  
  table.columns = [
    { key: 'sku', label: 'SKU', sortable: true },
    { key: 'name', label: 'Product Name', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'stock', label: 'Stock', sortable: true },
  ];
  
  table.data = [
    { sku: 'P001', name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: 45 },
    { sku: 'P002', name: 'Wireless Mouse', category: 'Accessories', price: 29, stock: 234 },
    { sku: 'P003', name: 'USB-C Cable', category: 'Accessories', price: 15, stock: 567 },
    { sku: 'P004', name: 'Monitor 27"', category: 'Electronics', price: 399, stock: 78 },
    { sku: 'P005', name: 'Keyboard Mechanical', category: 'Accessories', price: 89, stock: 123 },
    { sku: 'P006', name: 'Webcam HD', category: 'Electronics', price: 79, stock: 89 },
  ];
  
  container.appendChild(table);
  return container;
};

export const LargeDataset = () => {
  const container = document.createElement('div');
  const table = document.createElement('wc-data-table') as any;
  
  table.columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'salary', label: 'Salary', sortable: true },
  ];
  
  // Generate large dataset
  const departments = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];
  table.data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    department: departments[Math.floor(Math.random() * departments.length)],
    salary: Math.floor(Math.random() * 100000) + 40000,
  }));
  
  container.appendChild(table);
  return container;
};

export const WithStyling = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.background = '#f9fafb';
  container.style.borderRadius = '8px';
  
  const title = document.createElement('h3');
  title.textContent = 'Sales Report';
  title.style.marginTop = '0';
  container.appendChild(title);
  
  const table = document.createElement('wc-data-table') as any;
  
  table.columns = [
    { key: 'month', label: 'Month', sortable: true },
    { key: 'revenue', label: 'Revenue ($)', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'customers', label: 'Customers', sortable: true },
  ];
  
  table.data = [
    { month: 'January', revenue: 45320, orders: 234, customers: 189 },
    { month: 'February', revenue: 52100, orders: 267, customers: 201 },
    { month: 'March', revenue: 61890, orders: 312, customers: 245 },
    { month: 'April', revenue: 58750, orders: 289, customers: 223 },
    { month: 'May', revenue: 67200, orders: 334, customers: 267 },
    { month: 'June', revenue: 71500, orders: 356, customers: 289 },
  ];
  
  container.appendChild(table);
  
  const note = document.createElement('p');
  note.textContent = '💡 Click column headers to sort';
  note.style.marginTop = '16px';
  note.style.fontSize = '14px';
  note.style.color = '#666';
  container.appendChild(note);
  
  return container;
};

export const MinimalData = () => {
  const container = document.createElement('div');
  const table = document.createElement('wc-data-table') as any;
  
  table.columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'status', label: 'Status', sortable: false },
  ];
  
  table.data = [
    { name: 'Task 1', status: 'Complete' },
    { name: 'Task 2', status: 'In Progress' },
    { name: 'Task 3', status: 'Pending' },
  ];
  
  container.appendChild(table);
  return container;
};