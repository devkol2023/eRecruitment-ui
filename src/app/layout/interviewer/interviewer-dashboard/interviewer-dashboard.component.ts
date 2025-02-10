import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewer-dashboard',
  standalone: false,
  
  templateUrl: './interviewer-dashboard.component.html',
  styleUrl: './interviewer-dashboard.component.scss'
})
export class InterviewerDashboardComponent implements OnInit {

  totalScheduled: number = 0;

  // Table Columns
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '25%' },
    { key: 'jobTitle', label: 'Job Title', width: '30%' },
    { key: 'interviewDate', label: 'Date & Time', width: '20%' },
    { key: 'status', label: 'Status', width: '20%' },
    // { key: 'actions', label: 'Actions', width: '20%', type: 'action', types: { join: true, feedback: true } }
  ];

  upcomingInterviews = [
    { candidateName: 'John Doe', jobTitle: 'Branch Manager', interviewDate: '2024-03-10 10:00 AM', status: 'Scheduled' },
    { candidateName: 'Jane Smith', jobTitle: 'Loan Officer', interviewDate: '2024-03-12 02:00 PM', status: 'Scheduled' }
  ];

  pendingAssessments = [
    { candidateName: 'Emily Davis', jobTitle: 'HR Manager', interviewDate: '2024-03-08 11:00 AM', status: 'Assessment Pending' }
  ];

  feedbackPending = [
    { candidateName: 'Robert Johnson', jobTitle: 'Software Developer', interviewDate: '2024-03-05 03:00 PM', status: 'Feedback Pending' }
  ];

  completedInterviews = [
    { candidateName: 'Michael Brown', jobTitle: 'Financial Analyst', interviewDate: '2024-03-03 01:00 PM', status: 'Completed' }
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.upcomingInterviews.length, // Total number of items
  };

  constructor() { }

  ngOnInit(): void {
    this.totalScheduled = this.upcomingInterviews.length;
  }

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
