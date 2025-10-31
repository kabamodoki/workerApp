import { bootstrapApplication } from '@angular/platform-browser';
import { provideKeycloak } from 'keycloak-angular';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:8080',
        realm: 'attendance-realm',
        clientId: 'attendance-client',
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }),
  ],
});
