import { bootstrapApplication } from '@angular/platform-browser';
import { provideKeycloak } from 'keycloak-angular';
import 'zone.js';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideKeycloak({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }),
  ],
});
