import { useEffect } from 'react';
import { registerElements } from '@module-federation-example/web-components';

export function ComponentShowcase() {
  useEffect(() => {
    registerElements();
  }, []);

  const tabsData = [
    { label: 'Overview', content: 'Welcome to web components!' },
    { label: 'Features', content: 'Reusable, encapsulated, framework-agnostic' },
    { label: 'Benefits', content: 'Better maintainability and team collaboration' }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Web Components Showcase</h1>

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
        {/* Pass as JSON string */}
        <wc-tabs tabs={JSON.stringify(tabsData)}></wc-tabs>
      </section>
    </div>
  );
}

export default ComponentShowcase;