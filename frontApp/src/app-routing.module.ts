import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './app/dashboard/applications/applications.component';
import { AttendanceComponent } from './app/dashboard/attendance/attendance.component';
import { HomeComponent } from './app/dashboard/home/home.component';
import { LayoutComponent } from './app/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
