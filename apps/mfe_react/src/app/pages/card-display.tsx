import { useEffect, useRef, useState } from 'react';
import { registerElements, type CardDetails } from '@module-federation-example/web-components';

import './card-display.scss';

export function CardDisplay() {
  const [cardDetails, setCardDetails] = useState<CardDetails[]>([]);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register web components
    registerElements();

    // Simulate loading card data
    setTimeout(() => {
      setCardDetails([
        {
          title: 'Business Management',
          description: 'Nulla dapibus venenatis tempor. Aliquam aliquet molestie porttitor.',
          imageUrl: './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp'
        },
        {
          title: 'Technology Solutions',
          description: 'Aliquam aliquet molestie porttitor. Quisque tortor enim.',
          imageUrl: './images/tech-pictures-3840-x-2160-yfyjbz7mx5k6q6ig.webp'
        },
        {
          title: 'Innovation Hub',
          description: 'Quisque tortor enim, venenatis quis ipsum in, gravida sodales lectus.',
          imageUrl: './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp'
        }
      ]);
    }, 1000);
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Web Component Cards</h1>
        <p>Interactive card components built with Lit and shared across frameworks</p>
      </div>
      
      <section className="card-grid" ref={cardContainerRef}>
        {cardDetails.length === 0 ? (
          <div className="loading">Loading cards...</div>
        ) : (
          cardDetails.map((details, i) => {
            const cardElement = document.createElement('wc-card') as any;
            cardElement.details = details;
            
            return (
              <div 
                key={i}
                className="card-wrapper"
                ref={(node) => {
                  if (node && !node.querySelector('wc-card')) {
                    node.appendChild(cardElement);
                  }
                }}
              />
            );
          })
        )}
      </section>
    </div>
  );
}

export default CardDisplay;
