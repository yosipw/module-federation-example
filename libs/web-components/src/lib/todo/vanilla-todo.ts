// libs/web-components/src/lib/todo/vanilla-todo.ts
export class VanillaTodo extends HTMLElement {
  private shadow: ShadowRoot;
  private todos: string[] = [];
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }
  
  private setupEventListeners() {
    const form = this.shadow.querySelector('form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = this.shadow.querySelector('input') as HTMLInputElement;
      if (input.value.trim()) {
        this.todos.push(input.value);
        input.value = '';
        this.render();
        this.setupEventListeners();
      }
    });
    
    this.shadow.querySelectorAll('.delete-btn').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.todos.splice(index, 1);
        this.render();
        this.setupEventListeners();
      });
    });
  }
  
  render() {
    this.shadow.innerHTML = `
      <style>
        :host { display: block; font-family: sans-serif; }
        .container { padding: 20px; border: 1px solid #ccc; }
        ul { list-style: none; padding: 0; }
        li { padding: 8px; display: flex; justify-content: space-between; }
        button { cursor: pointer; }
      </style>
      <div class="container">
        <h3>Todo List (Vanilla)</h3>
        <form>
          <input type="text" placeholder="Add todo..." required />
          <button type="submit">Add</button>
        </form>
        <ul>
          ${this.todos.map((todo, i) => `
            <li>
              <span>${todo}</span>
              <button class="delete-btn" data-index="${i}">Delete</button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}