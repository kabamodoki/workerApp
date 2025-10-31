import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideKeycloak } from 'keycloak-angular';
import 'zone.js/node';
import { AttendanceDashboardComponent } from './app/attendance-dashboard/attendance-dashboard.component';
import { environment } from './environments/environment';

const config = {
  providers: [
    provideKeycloak({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }),
  ],
};

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AttendanceDashboardComponent, config, context);

export default bootstrap;