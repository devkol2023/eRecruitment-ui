import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  standalone: false,
  
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.scss'
})
export class HrDashboardComponent {
  activeJobs = 10;
  closedJobs = 5;
  newApplications = 30;
  underReviewApplications = 15;
  shortlistedApplications = 8;
  rejectedApplications = 7;
  pendingShortlisting = 5;
  pendingInterviews = 12;
  totalInterviews = 25;
  successfulHires = 3;
  totalUsers = 50;

  tableColumns = [
    { key: 'jobTitle', label: 'Job Title', width: '25%' },
    { key: 'department', label: 'Department', width: '15%' },
    { key: 'jobLocation', label: 'Location', width: '15%' },
    { key: 'employmentType', label: 'Employment Type', width: '10%' },
    { key: 'vacancies', label: 'Vacancies', width: '8%' },
    { key: 'postedDate', label: 'Posted Date', width: '10%' },
    { key: 'status', label: 'Status', width: '10%' }
  ];
  
  recentJobPosts = [
    {
      jobTitle: 'Branch Manager',
      department: 'Retail Banking',
      jobLocation: 'Kingstown, St. Vincent',
      employmentType: 'Full Time',
      vacancies: '2',
      postedDate: '10/02/2024',
      status: 'Open',
    },
    {
      jobTitle: 'Loan Officer',
      department: 'Loans & Credit',
      jobLocation: 'Arnos Vale, St. Vincent',
      employmentType: 'Full Time',
      vacancies: '3',
      postedDate: '09/02/2024',
      status: 'Open',
    },
    {
      jobTitle: 'Accountant',
      department: 'Finance & Accounting',
      jobLocation: 'Georgetown, St. Vincent',
      employmentType: 'Contract',
      vacancies: '1',
      postedDate: '08/02/2024',
      status: 'Closed',
    }
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.recentJobPosts.length, // Total number of items
  };


  updateItemsPerPage(itemsPerPage: number): void {
    console.log('Items Per Page Changed:', itemsPerPage);
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

   // Handle Page Change
   updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }
}
