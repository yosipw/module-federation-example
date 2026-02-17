import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run mfe_react:serve',
        production: 'npx nx run mfe_react:serve-static',
      },
      ciWebServerCommand: 'npx nx run mfe_react:serve-static',
      ciBaseUrl: 'http://localhost:5200',
    }),
    baseUrl: 'http://localhost:5201',
  },
});
