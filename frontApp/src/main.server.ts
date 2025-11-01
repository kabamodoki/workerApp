import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import 'zone.js/node';
import { AttendanceDashboardComponent } from './app/attendance-dashboard/attendance-dashboard.component';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AttendanceDashboardComponent, {
        providers: [
        ],
    }, context);

export default bootstrap;
