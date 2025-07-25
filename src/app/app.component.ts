import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SeverStatusComponent } from './dashboard/sever-status/sever-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SeverStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent
],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
