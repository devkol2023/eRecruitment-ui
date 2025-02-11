import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
      title: 'Financial Analyst',
      company: 'Bank of St. Vincent',
      location: 'Kingstown, St. Vincent',
      salary: '$4000 - $5000',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Full Time',
      postedTime: '1 day ago',
      experience: '3-5 Years',
      category: 'Finance & Investment'
    },
    {
      title: 'Loan Officer',
      company: 'Bank of St. Vincent',
      location: 'Kingstown, St. Vincent',
      salary: '$3500 - $4500',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Full Time',
      postedTime: '2 days ago',
      experience: '2+ Years',
      category: 'Lending & Credit'
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'Bank of St. Vincent',
      location: 'Remote',
      salary: '$5000 - $6500',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Remote',
      postedTime: '5 hours ago',
      experience: '5+ Years',
      category: 'IT Security'
    },
    {
      title: 'Customer Service Representative',
      company: 'Bank of St. Vincent',
      location: 'Call Center - Kingstown, St. Vincent',
      salary: '$2500 - $3500',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Full Time',
      postedTime: '12 hours ago',
      experience: '1-3 Years',
      category: 'Customer Service'
    },
    {
      title: 'Branch Manager',
      company: 'Bank of St. Vincent',
      location: 'Bequia Branch, St. Vincent',
      salary: '$7000 - $9000',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Full Time',
      postedTime: '3 days ago',
      experience: '7+ Years',
      category: 'Management'
    },
    {
      title: 'Compliance Officer',
      company: 'Bank of St. Vincent',
      location: 'Kingstown, St. Vincent',
      salary: '$4500 - $6000',
      logo: 'https://dummyimage.com/80x80/004080/fff&text=BoSV',
      type: 'Hybrid',
      postedTime: '6 hours ago',
      experience: '3+ Years',
      category: 'Risk & Compliance'
    }
  ];  

  selectedSort = 'date'; // Default sort option
  sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'salary', label: 'Salary' },
    { value: 'title', label: 'Title' },
  ];
  
  filteredJobs = this.jobs;

  constructor(private router: Router) { }

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

  sortJobs() {
    // Implement your sorting logic here based on `selectedSort`
    console.log(`Sorting by ${this.selectedSort}`);
  }

  jobClicked(job: any): void {
    this.router.navigateByUrl('/jobs/job-details');
  }
}
