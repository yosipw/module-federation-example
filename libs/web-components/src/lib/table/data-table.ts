// libs/web-components/src/lib/table/data-table.ts
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export class WcDataTable extends LitElement {
  @property({ type: Array }) columns: TableColumn[] = [];
  @property({ type: Array }) data: any[] = [];
  @property({ type: String }) sortKey = '';
  @property({ type: String }) sortDirection: 'asc' | 'desc' = 'asc';

  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
      font-family: sans-serif;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f5f5f5;
      font-weight: 600;
      cursor: pointer;
      user-select: none;
    }
    th:hover { background-color: #e0e0e0; }
    tr:hover { background-color: #f9f9f9; }
    .sort-icon { margin-left: 8px; }
  `;

  sort(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
    
    this.data = [...this.data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      const modifier = this.sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? modifier : -modifier;
    });
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(col => html`
              <th @click=${() => col.sortable && this.sort(col.key)}>
                ${col.label}
                ${col.sortable && this.sortKey === col.key 
                  ? html`<span class="sort-icon">${this.sortDirection === 'asc' ? '↑' : '↓'}</span>`
                  : ''
                }
              </th>
            `)}
          </tr>
        </thead>
        <tbody>
          ${this.data.map(row => html`
            <tr>
              ${this.columns.map(col => html`<td>${row[col.key]}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}