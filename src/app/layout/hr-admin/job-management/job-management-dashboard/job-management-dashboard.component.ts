import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-management-dashboard',
  standalone: false,
  
  templateUrl: './job-management-dashboard.component.html',
  styleUrl: './job-management-dashboard.component.scss'
})
export class JobManagementDashboardComponent implements OnInit {
  jobCategories = [
    { key: 'ongoing', label: 'Ongoing Jobs' },
    { key: 'completed', label: 'Completed Jobs' },
    { key: 'future', label: 'Future Openings' },
    { key: 'internal', label: 'Internal Roles' },
  ];

  selectedCategory = 'ongoing';

  allJobs = [
    {
      id: 'J001',
      title: 'Branch Manager',
      type: 'Full-Time',
      department: 'Finance',
      description: 'Oversee the daily operations of the bank branch.',
      location: 'Kingstown, St. Vincent',
      category: 'ongoing',
      postedDate: '2025-01-15',
    },
    {
      id: 'J002',
      title: 'Customer Service Representative',
      type: 'Part-Time',
      department: 'Customer Service',
      description: 'Assist customers with banking services and inquiries.',
      location: 'Georgetown, St. Vincent',
      category: 'ongoing',
      postedDate: '2025-01-20',
    },
    {
      id: 'J003',
      title: 'IT Support Specialist',
      type: 'Contract',
      department: 'IT',
      description: 'Provide technical support and manage IT infrastructure.',
      location: 'Bequia, St. Vincent',
      category: 'completed',
      postedDate: '2024-12-15',
    },
  ];

  filteredJobs = [...this.allJobs];

  ngOnInit(): void {
    this.onCategoryChange(this.selectedCategory);
  }

  onCategoryChange(category: string): void {
    this.filteredJobs = this.allJobs.filter((job) => job.category === category);
  }

  viewJobOverview(job: any): void {
    console.log('Viewing Job Overview:', job);
    // Open modal (to be implemented next step)
  }

  viewAppliedCandidates(job: any): void {
    console.log('Viewing Applied Candidates:', job);
    // Redirect to candidate table (to be implemented)
  }
}
