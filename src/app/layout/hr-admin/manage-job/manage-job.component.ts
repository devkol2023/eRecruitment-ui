import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-job',
  standalone: false,
  
  templateUrl: './manage-job.component.html',
  styleUrl: './manage-job.component.scss'
})
export class ManageJobComponent {
  tableColumns = [
    { key: 'id', label: 'Job ID', width: '5%' },
    { key: 'jobTitle', label: 'Job Title', width: '15%' },
    { key: 'category', label: 'Category', width: '15%' },
    { key: 'jobType', label: 'Job Type', width: '10%' },
    { key: 'experience', label: 'Experience', width: '10%' },
    { key: 'industry', label: 'Industry', width: '10%' },
    { key: 'skills', label: 'Skills', width: '15%' },
    { key: 'lastUpdate', label: 'Last Updated', width: '10%' },
    { key: 'actions', label: 'Actions', width: '10%', type: 'action', types: { edit: true, delete: true } },
  ];

  jobListings = [
    {
      id: 'J001',
      jobTitle: 'Software Engineer',
      jobDescription: 'Develop and maintain web applications using Angular and TypeScript.',
      category: 'Software Developer',
      jobType: 'Full Time',
      salaryType: 'Yearly',
      salaryMin: '80000',
      salaryMax: '100000',
      skills: 'Angular, TypeScript, JavaScript',
      qualifications: 'Bachelor\'s Degree in Computer Science',
      experience: '3+ Years',
      industry: 'IT',
      address: 'New York, USA',
      country: 'United States',
      state: 'New York',
      lastUpdate: '02/02/2025'
    },
    {
      id: 'J002',
      jobTitle: 'Marketing Specialist',
      jobDescription: 'Manage digital marketing campaigns and social media strategies.',
      category: 'Marketing',
      jobType: 'Part Time',
      salaryType: 'Monthly',
      salaryMin: '3000',
      salaryMax: '5000',
      skills: 'SEO, Content Marketing, Social Media',
      qualifications: 'Bachelor\'s in Marketing',
      experience: '2+ Years',
      industry: 'Marketing',
      address: 'London, UK',
      country: 'United Kingdom',
      state: 'London',
      lastUpdate: '01/02/2025'
    }
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.jobListings.length, // Total number of items
  };

  constructor(private router: Router) { }

  updateItemsPerPage(itemsPerPage: number): void {
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

  // Handle Page Change
  updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }

  onEdit(job: any): void {
    this.router.navigate(['jobs/post-job']);
  }

  onDelete(jobId: string): void {
    this.jobListings = this.jobListings.filter(job => job.id !== jobId);
  }
}
