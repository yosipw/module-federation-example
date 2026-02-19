import { useState, useEffect, useRef } from 'react';
import {
  CardDetails,
  registerElements,
} from '@module-federation-example/web-components';

import './card-display.module.scss';

registerElements();

export default function CardDisplay() {
  const [cardDetails, setCardDetails] = useState<CardDetails[] | null>(null);
  const [currentDetails, setCurrentDetails] = useState<CardDetails | null>(
    null
  );
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardDetails) {
      return;
    }
    setTimeout(() => {
      setCardDetails([
        {
          title: 'Lorem',
          description:
            'Maecenas tempor dolor non augue ullamcorper, ut tempus lorem placerat. Integer tristique vehicula urna, eu varius felis vestibulum id. Mauris in augue sed nibh eleifend fringilla ut id tellus. Mauris risus tortor, semper eget commodo eget, elementum sed eros. Curabitur pretium purus et ipsum sodales ultricies.',
          imageUrl: './images/cityscape-data.webp',
        },
        {
          title: 'Lipsum',
          description:
            'Aliquam blandit magna vel quam efficitur, vel lacinia mi facilisis. Donec ut viverra arcu. Maecenas ac dignissim turpis. Nullam sagittis mauris a porta ullamcorper. Aenean quis accumsan velit, in volutpat nunc. Aenean sollicitudin tincidunt odio, vitae iaculis eros tempus ac. Vivamus sed tempus augue, ac faucibus tellus. In malesuada purus bibendum, vestibulum augue eget, vehicula sapien. Duis maximus massa non ultricies dignissim.',
          imageUrl:
            './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp',
        },
        {
          title: 'Ipsum',
          description:
            'Nulla dapibus venenatis tempor. Aliquam aliquet molestie porttitor. Quisque tortor enim, imperdiet non nulla sed, viverra placerat tellus. Nulla eleifend malesuada lectus ac consectetur.',
          imageUrl: './images/tech-pictures-3840-x-2160-yfyjbz7mx5k6q6ig.webp',
        },
      ]);
    }, 2000);
  }, []);

  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) {
      return;
    }

    const elements = container.querySelectorAll<any>('wc-card');

    const onGetDetails = (event: any) => {
      setCurrentDetails(event.detail);
    };

    elements.forEach((el) => {
      el.addEventListener('card-details-get', onGetDetails);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('custom-event', onGetDetails);
      });
    };
  }, [cardDetails]);

  if (!cardDetails) {
    return (
      <>
        <p>Cards are currently loading</p>
      </>
    );
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                article {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 100%;
                    gap: 30px;
                    justify-content: center;
                }

                .display {
                    display: flex;
                    flex: 1 1 100%;
                    gap: 15px;
                }
               
                .current {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
          `,
        }}
      />
      <section className="display" ref={cardContainerRef}>
        {cardDetails.map((x: CardDetails, i) => (
          <wc-card key={i} details={x}></wc-card>
        ))}
      </section>
      {currentDetails ? (
        <section className="current">
          <span>
            <strong>Title:</strong> {currentDetails.title}
          </span>
          <span>
            <strong>Description:</strong> {currentDetails.description}
          </span>
          <span>
            <strong>ImageUrl:</strong> {currentDetails.imageUrl}
          </span>
        </section>
      ) : (
        ``
      )}
    </>
  );
}
