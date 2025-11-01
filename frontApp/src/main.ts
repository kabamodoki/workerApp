import { bootstrapApplication } from '@angular/platform-browser';
import { provideKeycloak } from 'keycloak-angular';
import 'zone.js';
import { AttendanceDashboardComponent } from './app/attendance-dashboard/attendance-dashboard.component';
import { environment } from './environments/environment';

bootstrapApplication(AttendanceDashboardComponent, {
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
