import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateDetailsModalComponent } from '../../../shared/modal/candidate-details-modal/candidate-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { messages } from '../../../shared/constants/messages';
import { MessageDialogService } from '../../../shared/service/message-dialog.service';

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
    'Banking', 'Financial Analysis', 'Credit Assessment', 'Customer Service', 
    'Loan Processing', 'Excel', 'Risk Analysis', 'Investment Strategies', 
    'Recruitment', 'Employee Relations', 'HR Policies',
    'Vue.js', 'Python', 'Django', 'Java', 'Spring Boot', 'AWS', 'Machine Learning', 'Data Science', 
    'Flutter', 'Dart', 'Firebase', 'Android', 'Tailwind CSS', 'Leadership'
  ];  

  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '18%' },
    { key: 'experience', label: 'Experience', width: '10%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'location', label: 'Location', width: '12%' },
    { key: 'employmentType', label: 'Employment Type', width: '10%' },
    { key: 'candidateType', label: 'Candidate Type', width: '10%' },
    { key: 'lastLogin', label: 'Profile Last Updated', width: '10%' },
    { key: 'action', label: 'Action', width: '15%', type: 'action', types: { viewDetails: true, shortlist: true } },
  ];
  
  storedAllCandidates = [
    {
      "id": "C001",
      "candidateName": "John Doe",
      "appliedFor": "Branch Manager",
      "experience": "5 Years",
      "skills": "Leadership, Banking, Financial Analysis",
      "status": "Applied",
      "lastLogin": "02/05/2024",
      "candidateType": "External",
      "currentSalary": "$70,000",
      "expectedSalary": "$90,000",
      "employmentType": "Full Time",
      "location": "New York, USA",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_john_doe.pdf"},
        {"name": "ID Proof", "file": "john_doe_id.pdf"},
        {"name": "Banking Certification", "file": "banking_certification.pdf"}
      ]
    },
    {
      "id": "C002",
      "candidateName": "Jane Smith",
      "appliedFor": "Loan Officer",
      "experience": "3 Years",
      "skills": "Credit Assessment, Customer Service, Loan Processing",
      "status": "Shortlisted",
      "lastLogin": "28/04/2024",
      "candidateType": "Internal",
      "currentSalary": "$50,000",
      "expectedSalary": "$65,000",
      "employmentType": "Part Time",
      "location": "London, UK",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_jane_smith.pdf"},
        {"name": "ID Proof", "file": "jane_smith_id.pdf"}
      ]
    },
    {
      "id": "C003",
      "candidateName": "Alex Johnson",
      "appliedFor": "Financial Analyst",
      "experience": "8 Years",
      "skills": "Java, Spring Boot, Microservices, AWS",
      "status": "Rejected",
      "lastLogin": "30/04/2024",
      "candidateType": "External",
      "currentSalary": "$80,000",
      "expectedSalary": "$95,000",
      "employmentType": "Contract",
      "location": "San Francisco, USA",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_alex_johnson.pdf"}
      ]
    },
    {
      "id": "C004",
      "candidateName": "Emily Brown",
      "appliedFor": "HR Manager",
      "experience": "2 Years",
      "skills": "Python, Django, Machine Learning, Data Science",
      "status": "Applied",
      "lastLogin": "01/05/2024",
      "candidateType": "Internal",
      "currentSalary": "$45,000",
      "expectedSalary": "$60,000",
      "employmentType": "Internship",
      "location": "Toronto, Canada",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_emily_brown.pdf"},
        {"name": "ID Proof", "file": "emily_brown_id.pdf"}
      ]
    },
    {
      "id": "C005",
      "candidateName": "Michael Lee",
      "appliedFor": "Software Developer",
      "experience": "6 Years",
      "skills": "Frontend, Vue.js, Tailwind CSS, TypeScript",
      "status": "Applied",
      "lastLogin": "27/04/2024",
      "candidateType": "External",
      "currentSalary": "$75,000",
      "expectedSalary": "$90,000",
      "employmentType": "Full Time",
      "location": "Berlin, Germany",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_michael_lee.pdf"},
        {"name": "Programming Certification", "file": "michael_programming_cert.pdf"}
      ]
    },
    {
      "id": "C006",
      "candidateName": "Sophia Williams",
      "appliedFor": "Customer Service Representative",
      "experience": "4 Years",
      "skills": "Flutter, Dart, Firebase, Android",
      "status": "Applied",
      "lastLogin": "03/05/2024",
      "candidateType": "Internal",
      "currentSalary": "$50,000",
      "expectedSalary": "$65,000",
      "employmentType": "Part Time",
      "location": "Sydney, Australia",
      "checked": false,
      "uploadedDocuments": [
        {"name": "Resume", "file": "resume_sophia_miller.pdf"}
      ]
    }
  ]  

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.storedAllCandidates.length, // Total number of items
  };

  // Filtered candidate list
  candidateData: any[] = [];

  constructor(private fb: FormBuilder, private router: Router,
    private dialog: MatDialog, private dialogMessage: MessageDialogService
  ) {
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
        (!filters.skills?.length || filters.skills?.every((skill: any) => candidateSkills.includes(skill))) &&
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
    // this.candidateData = [...this.storedAllCandidates];
    // this.paginationConfig.totalItems = this.storedAllCandidates.length;
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

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '50%',
      data: candidate
    });
  }

  shortListAction(data: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.shortlistCandidate,
      iconType: 'warning',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        
      }
    });
  }
}
