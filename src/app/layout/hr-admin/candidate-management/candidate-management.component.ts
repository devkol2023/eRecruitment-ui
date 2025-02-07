import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-management',
  standalone: false,
  
  templateUrl: './candidate-management.component.html',
  styleUrl: './candidate-management.component.scss'
})
export class CandidateManagementComponent {
  searchForm: FormGroup;
  selectedFilter = 'all'; // Default filter

  // Filters for employment type and category
  employmentTypeOptions = ['Full Time', 'Part Time', 'Contract', 'Internship'];
  categories = ['IT', 'Finance', 'HR', 'Marketing', 'Engineering'];
  candidateTypeOptions = ['Internal', 'External'];
  experienceLevels = ['Entry Level (0-2 yrs)', 'Mid Level (3-5 yrs)', 'Senior Level (6-10 yrs)', 'Expert (10+ yrs)'];
  skillsOptions = [
    'JavaScript', 'Angular', 'React', 'Node.js', 'TypeScript', 'Vue.js', 'Python', 
    'Django', 'Java', 'Spring Boot', 'AWS', 'Machine Learning', 'Data Science', 
    'Flutter', 'Dart', 'Firebase', 'Android', 'Tailwind CSS'
  ];  

  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '18%' },
    { key: 'experience', label: 'Experience', width: '10%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'jobLocation', label: 'Location', width: '12%' },
    { key: 'employmentType', label: 'Employment Type', width: '10%' },
    { key: 'candidateType', label: 'Candidate Type', width: '10%' },
    { key: 'lastLogin', label: 'Last Updated', width: '10%' },
    { key: 'action', label: 'Action', width: '15%', type: 'action', types: { download: true, schedule: true } },
  ];
  
  storedAllCandidates = [
    {
      candidateName: 'John Doe',
      experience: '5 Years',
      skills: 'JavaScript, Angular, Node.js, TypeScript',
      jobLocation: 'New York, USA',
      employmentType: 'Full Time',
      candidateType: 'External',
      lastLogin: '02/05/2024',
    },
    {
      candidateName: 'Jane Smith',
      experience: '3 Years',
      skills: 'React, Redux, HTML, CSS, JavaScript',
      jobLocation: 'London, UK',
      employmentType: 'Part Time',
      candidateType: 'Internal',
      lastLogin: '28/04/2024',
    },
    {
      candidateName: 'Alex Johnson',
      experience: '8 Years',
      skills: 'Java, Spring Boot, Microservices, AWS',
      jobLocation: 'San Francisco, USA',
      employmentType: 'Contract',
      candidateType: 'External',
      lastLogin: '30/04/2024',
    },
    {
      candidateName: 'Emily Brown',
      experience: '2 Years',
      skills: 'Python, Django, Machine Learning, Data Science',
      jobLocation: 'Toronto, Canada',
      employmentType: 'Internship',
      candidateType: 'Internal',
      lastLogin: '01/05/2024',
    },
    {
      candidateName: 'Michael Lee',
      experience: '6 Years',
      skills: 'Frontend, Vue.js, Tailwind CSS, TypeScript',
      jobLocation: 'Berlin, Germany',
      employmentType: 'Full Time',
      candidateType: 'External',
      lastLogin: '27/04/2024',
    },
    {
      candidateName: 'Sophia Williams',
      experience: '4 Years',
      skills: 'Flutter, Dart, Firebase, Android',
      jobLocation: 'Sydney, Australia',
      employmentType: 'Part Time',
      candidateType: 'Internal',
      lastLogin: '03/05/2024',
    },
  ];  

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.storedAllCandidates.length, // Total number of items
  };

  // Filtered candidate list
  candidateData: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      skills: [[]],
      category: [''],
      employmentType: [''],
      experience: [''],
      candidateType: ['']
    });
  }

  onSearch(): void {
    const filters = this.searchForm.value;
    this.candidateData = this.storedAllCandidates.filter((candidate) => {
      const candidateSkills = candidate.skills.split(', ').map(skill => skill.trim());
      return (
        (!filters.experience || this.filterExperience(candidate.experience, filters.experience)) &&
        (!filters.skills.length || filters.skills.every((skill: any) => candidateSkills.includes(skill))) &&
        (!filters.employmentType || candidate.employmentType === filters.employmentType) &&
        (!filters.candidateType || candidate.candidateType === filters.candidateType)
      );
    });
  
    this.paginationConfig.totalItems = this.candidateData.length;
  }
  
  // Helper function to filter experience range
  filterExperience(candidateExperience: string, filterExperience: string): boolean {
    const years = parseInt(candidateExperience.split(' ')[0]); // Extract numerical years
    switch (filterExperience) {
      case 'Entry Level (0-2 yrs)':
        return years >= 0 && years <= 2;
      case 'Mid Level (3-5 yrs)':
        return years >= 3 && years <= 5;
      case 'Senior Level (6-10 yrs)':
        return years >= 6 && years <= 10;
      case 'Expert (10+ yrs)':
        return years > 10;
      default:
        return true;
    }
  }
  

  // Reset Filters
  onReset(): void {
    this.searchForm.reset();
    this.candidateData = [...this.storedAllCandidates];
    this.paginationConfig.totalItems = this.storedAllCandidates.length;
  }

  // View Candidate Profile (can be routed to a detailed page later)
  viewProfile(candidate: any) {
    console.log('Viewing Candidate:', candidate);
    alert(`Viewing profile of ${candidate.name}`);
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

  onScheduleInterviewAction(candidate: any): void {
    this.router.navigate(['/hr/schedule-interview']);
  }
}
