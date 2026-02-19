import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  CardDetails,
  registerElements,
} from '@module-federation-example/web-components';

registerElements();

@Component({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
})
export class CardDisplayComponent implements OnInit {
  readonly cardDatails: CardDetails[] = [];

  currentCardDetails: CardDetails | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.cardDatails.push({
        title: 'Lorem',
        description:
          'Maecenas tempor dolor non augue ullamcorper, ut tempus lorem placerat. Integer tristique vehicula urna, eu varius felis vestibulum id. Mauris in augue sed nibh eleifend fringilla ut id tellus. Mauris risus tortor, semper eget commodo eget, elementum sed eros. Curabitur pretium purus et ipsum sodales ultricies.',
        imageUrl: './images/cityscape-data.webp',
      });
      this.cardDatails.push({
        title: 'Lipsum',
        description:
          'Aliquam blandit magna vel quam efficitur, vel lacinia mi facilisis. Donec ut viverra arcu. Maecenas ac dignissim turpis. Nullam sagittis mauris a porta ullamcorper. Aenean quis accumsan velit, in volutpat nunc. Aenean sollicitudin tincidunt odio, vitae iaculis eros tempus ac. Vivamus sed tempus augue, ac faucibus tellus. In malesuada purus bibendum, vestibulum augue eget, vehicula sapien. Duis maximus massa non ultricies dignissim.',
        imageUrl:
          './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp',
      });
      this.cardDatails.push({
        title: 'Ipsum',
        description:
          'Nulla dapibus venenatis tempor. Aliquam aliquet molestie porttitor. Quisque tortor enim, imperdiet non nulla sed, viverra placerat tellus. Nulla eleifend malesuada lectus ac consectetur.',
        imageUrl: './images/tech-pictures-3840-x-2160-yfyjbz7mx5k6q6ig.webp',
      });
    }, 2000);
  }

  onGetDetails($event: any): void {
    this.currentCardDetails = $event.detail;
  }
}
