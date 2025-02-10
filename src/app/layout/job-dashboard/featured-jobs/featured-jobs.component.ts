import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-jobs',
  standalone: false,
  
  templateUrl: './featured-jobs.component.html',
  styleUrl: './featured-jobs.component.scss'
})
export class FeaturedJobsComponent {
  categories = [
    {
      name: 'Retail Banking',
      count: 432,
      icon: 'assets/icons/retail-banking.svg',
    },
    {
      name: 'Corporate Banking',
      count: 350,
      icon: 'assets/icons/corporate-banking.svg',
    },
    {
      name: 'Finance & Accounting',
      count: 567,
      icon: 'assets/icons/finance-accounting.svg',
    },
    {
      name: 'Risk & Compliance',
      count: 298,
      icon: 'assets/icons/risk-compliance.svg',
    },
    {
      name: 'IT & Cybersecurity',
      count: 421,
      icon: 'assets/icons/it-cybersecurity.svg',
    },
    {
      name: 'Marketing & Communications',
      count: 210,
      icon: 'assets/icons/marketing-communications.svg',
    },
    {
      name: 'Human Resources',
      count: 178,
      icon: 'assets/icons/hr.svg',
    },
    {
      name: 'Operations & Customer Service',
      count: 312,
      icon: 'assets/icons/customer-service.svg',
    },
    {
      name: 'Investment & Wealth Management',
      count: 125,
      icon: 'assets/icons/investment-wealth.svg',
    },
    {
      name: 'Legal & Compliance',
      count: 150,
      icon: 'assets/icons/legal-compliance.svg',
    }
  ];

  constructor(private router: Router) { }
  
  goToJobs(category: any): void {
    this.router.navigate(['/jobs/find-jobs']);
  }
}
