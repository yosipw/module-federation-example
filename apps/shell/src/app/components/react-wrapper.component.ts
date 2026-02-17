import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: 'mfe_react',
  remotes: [
    {
      name: 'mfe_react',
      entry: 'http://localhost:5202/remoteEntry.js',
    },
  ],
});
loadRemote('mfe_react/Module');

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-react-wrapper',
  template: '<mfe-react></mfe-react>',
})
export class ReactWrapperComponent {
  title = 'react wrapper';
}
