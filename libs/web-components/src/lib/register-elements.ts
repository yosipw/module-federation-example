import 'reflect-metadata'; 
import { Card } from './card/card';
import { Icon } from './icon/icon';
import { VanillaCounter } from './counter/vanilla-counter';
import { VanillaTodo } from './todo/vanilla-todo';
import { WcTabs } from './tabs/tabs';
import { WcModal } from './modal/modal';
import { WcInput } from './form/input';
import { WcDataTable } from './table/data-table';

export function registerElements(): void {
  customElements.get('wc-card') || customElements.define('wc-card', Card);
  customElements.get('wc-icon') || customElements.define('wc-icon', Icon);
  customElements.get('vanilla-counter') || customElements.define('vanilla-counter', VanillaCounter);
  customElements.get('vanilla-todo') || customElements.define('vanilla-todo', VanillaTodo);
  customElements.get('wc-tabs') || customElements.define('wc-tabs', WcTabs);
  customElements.get('wc-modal') || customElements.define('wc-modal', WcModal);
  customElements.get('wc-input') || customElements.define('wc-input', WcInput);
  customElements.get('wc-data-table') || customElements.define('wc-data-table', WcDataTable);
}
