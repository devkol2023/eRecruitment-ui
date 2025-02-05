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
      logo: 'https://dummyimage.com/80x80/000/fff&text=Ziggo',
      type: 'Full Time',
      postedTime: '7 hours ago',
      experience: '3-5 Years',
      category: 'Marketing'
    },
    {
      title: 'Software Developer',
      company: 'TechCorp',
      location: 'London, UK',
      salary: '$4500 - $5000',
      logo: 'https://dummyimage.com/80x80/000/fff&text=TechCorp',
      type: 'Remote',
      postedTime: '2 days ago',
      experience: '5+ Years',
      category: 'IT'
    },
    {
      title: 'Data Scientist',
      company: 'DataCorp',
      location: 'New York, USA',
      salary: '$5000 - $7000',
      logo: 'https://dummyimage.com/80x80/000/fff&text=DataCorp',
      type: 'Hybrid',
      postedTime: '1 day ago',
      experience: '3+ Years',
      category: 'Analytics'
    },
    {
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'Berlin, Germany',
      salary: '$4000 - $5500',
      logo: 'https://dummyimage.com/80x80/000/fff&text=DesignHub',
      type: 'Freelance',
      postedTime: '5 hours ago',
      experience: '2-4 Years',
      category: 'Design'
    },
    {
      title: 'Product Manager',
      company: 'Innovate Ltd',
      location: 'San Francisco, USA',
      salary: '$6000 - $8000',
      logo: 'https://dummyimage.com/80x80/000/fff&text=Innovate',
      type: 'Full Time',
      postedTime: '3 days ago',
      experience: '4+ Years',
      category: 'Management'
    },
    {
      title: 'Backend Developer',
      company: 'CodeBase',
      location: 'Tokyo, Japan',
      salary: '$5500 - $6500',
      logo: 'https://dummyimage.com/80x80/000/fff&text=CodeBase',
      type: 'Part Time',
      postedTime: '12 hours ago',
      experience: '3+ Years',
      category: 'Development'
    }
  ];  

  selectedSort = 'date'; // Default sort option
  sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'salary', label: 'Salary' },
    { value: 'title', label: 'Title' },
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

  sortJobs() {
    // Implement your sorting logic here based on `selectedSort`
    console.log(`Sorting by ${this.selectedSort}`);
  }
}
