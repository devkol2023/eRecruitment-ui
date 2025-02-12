import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-job-search',
  standalone: false,
  
  templateUrl: './recent-job-search.component.html',
  styleUrl: './recent-job-search.component.scss'
})
export class RecentJobSearchComponent implements OnInit {
  jobs: any[] = [
      { title: 'Investment Banker', location: '', description: 'Responsible for investment management.' },
      { title: 'Bank Teller', location: '', description: 'Manage customer transactions and services.' },
      { title: 'Loan Officer', location: '', description: 'Assess, authorize and recommend loans.' }
  ];
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get filteredJobs(): any[] {
      return this.jobs.filter(job => job.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}