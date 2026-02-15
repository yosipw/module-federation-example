import { useEffect } from 'react';
import { registerElements } from '@module-federation-example/web-components';

export function ComponentShowcase() {
  useEffect(() => {
    registerElements();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Component Showcase</h1>
        <p>Explore our collection of reusable web components</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2>Counter Component</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>
            A simple counter with increment and decrement functionality
          </p>
          <vanilla-counter></vanilla-counter>
        </section>

        <section style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2>Todo List Component</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>
            Manage your tasks with this interactive todo list
          </p>
          <vanilla-todo></vanilla-todo>
        </section>

        <section style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2>Icon Component</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>
            Material Design icons as web components
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '24px' }}>
            <wc-icon icon="home" size={32}></wc-icon>
            <wc-icon icon="search" size={32}></wc-icon>
            <wc-icon icon="settings" size={32}></wc-icon>
            <wc-icon icon="favorite" size={32}></wc-icon>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentShowcase;