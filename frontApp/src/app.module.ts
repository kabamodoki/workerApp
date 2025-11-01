import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './app/dashboard/applications/applications.component';
import { AttendanceComponent } from './app/dashboard/attendance/attendance.component';
import { HomeComponent } from './app/dashboard/home/home.component';
import { LayoutComponent } from './app/layout/layout.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        LayoutComponent,
        HomeComponent,
        AttendanceComponent,
        ApplicationsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
