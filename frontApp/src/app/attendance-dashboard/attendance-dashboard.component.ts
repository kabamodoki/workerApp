import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'attendance-dashboard',
    standalone: true,
    templateUrl: './attendance-dashboard.component.html',
})
export class AttendanceDashboardComponent {
    constructor(private keycloak: KeycloakService) { }

    logout() {
        this.keycloak.logout(window.location.origin);
    }
}
