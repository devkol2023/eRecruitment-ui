import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  systemUptime: string = '99.97%';
  lastSystemDowntime: string = 'None in the past 30 days';

  totalUsers: number = 500;
  totalRoles: number = 5;

  openHRTickets: number = 15;
  resolvedHRTickets: number = 45;

  securityIncidents: number = 3;
  complianceStatus: string = 'Fully Compliant';
}
