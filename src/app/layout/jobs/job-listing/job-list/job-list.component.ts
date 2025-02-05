import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-list',
  standalone: false,
  
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  @Input() filters: any;
  jobs = [
    {
      title: 'Digital Marketer',
      company: 'Ziggo',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      logo: 'https://via.placeholder.com/50',
      type: 'Full Time',
      postedTime: '7 hours ago',
      experience: '3-5 Years',
      category: 'Marketing' // Add the 'category' field
    },
    {
      title: 'Software Developer',
      company: 'TechCorp',
      location: 'London, UK',
      salary: '$4500 - $5000',
      logo: 'https://via.placeholder.com/50',
      type: 'Remote',
      postedTime: '2 days ago',
      experience: '5+ Years',
      category: 'IT' // Add the 'category' field
    }
  ];
  
  filteredJobs = this.jobs;

  ngOnChanges() {
    this.filteredJobs = this.jobs.filter(job => {
      // Apply filtering logic based on `filters`
      return (
        (this.filters.category === 'all' || job.category === this.filters.category) &&
        (this.filters.jobTypes.length === 0 || this.filters.jobTypes.includes(job.type)) &&
        (this.filters.location === 'anywhere' || job.location === this.filters.location) &&
        (this.filters.experience === '' || job.experience === this.filters.experience)
      );
    });
  }
}
