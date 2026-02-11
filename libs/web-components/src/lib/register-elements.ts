import { Card } from './card/card';
import { Icon } from './icon/icon';

export function registerElements(): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  customElements.get('wc-card') || customElements.define('wc-card', Card);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  customElements.get('wc-icon') || customElements.define('wc-icon', Icon);
}
