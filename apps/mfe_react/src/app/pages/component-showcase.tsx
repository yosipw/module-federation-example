import { registerElements } from '@module-federation-example/web-components';

registerElements();

export function ComponentShowcase() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Web Component Training Showcase</h1>
      
      <section>
        <h2>1. Vanilla Counter</h2>
        <vanilla-counter></vanilla-counter>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>2. Todo List</h2>
        <vanilla-todo></vanilla-todo>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>3. Tabs Component</h2>
        <wc-tabs 
          tabs={JSON.stringify([
            { label: 'Overview', content: 'Welcome to web components!' },
            { label: 'Features', content: 'Reusable, encapsulated, framework-agnostic' },
            { label: 'Benefits', content: 'Better maintainability and team collaboration' }
          ])}
        ></wc-tabs>
      </section>
    </div>
  );
}