import { useEffect, useRef, useState } from 'react';
import { registerElements, type CardDetails } from '@module-federation-example/web-components';

import './card-display.scss';

export function CardDisplay() {
  const [cardDetails, setCardDetails] = useState<CardDetails[]>([]);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [currentDetails, setCurrentDetails] = useState<CardDetails | null>(null);

  useEffect(() => {
    // Register web components
    registerElements();

    // Simulate loading card data
    setTimeout(() => {
      setCardDetails([
        {
          imgSrc: './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp',
          imgAlt: 'Business Document Management',
          heading: 'Lorem',
          description: 'Nulla dapibus venenatis tempor.',
          actionUrl: '#',
          actionText: 'Learn More'
        },
        {
          imgSrc: './images/tech-pictures-3840-x-2160-yfyjbz7mx5k6q6ig.webp',
          imgAlt: 'Technology',
          heading: 'Ipsum',
          description: 'Aliquam aliquet molestie porttitor.',
          actionUrl: '#',
          actionText: 'Learn More'
        }
      ]);
    }, 2000);
  }, []);

  return (
    <div className="card-display-container">
      <h1>Web Component Card Display</h1>
      
      <section className="display" ref={cardContainerRef}>
        {cardDetails.map((details, i) => (
          <wc-card key={i} details={details}></wc-card>
        ))}
      </section>
    </div>
  );
}

export default CardDisplay;
