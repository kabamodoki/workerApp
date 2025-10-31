import { APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { KeycloakService, provideKeycloak } from 'keycloak-angular';
import { AppComponent } from './app/app';
import { initializeKeycloak } from './keycloak-init';

bootstrapApplication(AppComponent, {
  providers: [
    provideKeycloak(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ]
});
