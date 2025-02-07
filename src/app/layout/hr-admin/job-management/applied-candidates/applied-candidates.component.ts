import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CandidateDetailsModalComponent } from './candidate-details-modal/candidate-details-modal.component';

@Component({
  selector: 'app-applied-candidates',
  standalone: false,
  
  templateUrl: './applied-candidates.component.html',
  styleUrl: './applied-candidates.component.scss'
})
export class AppliedCandidatesComponent implements OnInit {
  
  jobId: string | null = null;
  selectedFilter = 'applied';
  
  filters = [
    { label: 'Applied', value: 'applied', active: true },
    { label: 'Shortlisted', value: 'shortlisted', active: false },
    { label: 'Rejected', value: 'rejected', active: false },
    { label: 'Under Review', value: 'under-review', active: false }
  ];

  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'appliedFor', label: 'Applied For', width: '15%' },
    { key: 'experience', label: 'Experience', width: '12%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'lastLogin', label: 'Applied on', width: '10%' },
    { key: 'status', label: 'Application Status', width: '10%' },
    { 
      key: 'actions', 
      label: 'Actions', 
      width: '23%', 
      type: 'action', 
      types: { viewDetails: true, shortlist: true, reject: true }
    }
  ];

  allCandidates = [
    {
      id: 'C001',
      candidateName: 'John Doe',
      appliedFor: 'Branch Manager',
      experience: '5 Years',
      skills: 'Leadership, Banking, Financial Analysis',
      status: 'Under Review',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$70,000',
      expectedSalary: '$90,000',
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_john_doe.pdf' },
        { name: 'ID Proof', file: 'john_doe_id.pdf' },
        { name: 'Banking Certification', file: 'banking_certification.pdf' }
      ]
    },
    {
      id: 'C002',
      candidateName: 'Jane Smith',
      appliedFor: 'Loan Officer',
      experience: '3 Years',
      skills: 'Credit Assessment, Customer Service, Loan Processing',
      status: 'Shortlisted',
      lastLogin: '01/05/2024',
      candidateType: 'Internal',
      currentSalary: '$50,000',
      expectedSalary: '$65,000',
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_jane_smith.pdf' },
        { name: 'ID Proof', file: 'jane_smith_id.pdf' }
      ]
    },
    {
      id: 'C003',
      candidateName: 'Michael Brown',
      appliedFor: 'Financial Analyst',
      experience: '6 Years',
      skills: 'Excel, Risk Analysis, Investment Strategies',
      status: 'Rejected',
      lastLogin: '03/05/2024',
      candidateType: 'External',
      currentSalary: '$80,000',
      expectedSalary: '$95,000',
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_michael_brown.pdf' }
      ]
    },
    {
      id: 'C004',
      candidateName: 'Emily Davis',
      appliedFor: 'HR Manager',
      experience: '8 Years',
      skills: 'Recruitment, Employee Relations, HR Policies',
      status: 'Under Review',
      lastLogin: '04/05/2024',
      candidateType: 'Internal',
      currentSalary: '$85,000',
      expectedSalary: '$100,000',
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_emily_davis.pdf' },
        { name: 'ID Proof', file: 'emily_davis_id.pdf' }
      ]
    },
    {
      id: 'C005',
      candidateName: 'Robert Johnson',
      appliedFor: 'Software Developer',
      experience: '4 Years',
      skills: 'JavaScript, Angular, TypeScript, Node.js',
      status: 'Shortlisted',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$60,000',
      expectedSalary: '$80,000',
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_robert_johnson.pdf' },
        { name: 'Programming Certification', file: 'robert_certification.pdf' }
      ]
    }
  ];
  
  appliedCandidates = [...this.allCandidates];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.appliedCandidates.length, // Total number of items
  };

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];
      // this.loadCandidates();
    });
  }

  loadCandidates(): void {
    this.appliedCandidates = this.allCandidates.filter(candidate => candidate.appliedFor.includes('Branch Manager')); 
  }

  applyFilter(filter: any): void {
    this.filters.forEach(f => (f.active = f.value === filter.value));
    this.selectedFilter = filter.value;

    if (this.selectedFilter === 'all') {
      this.appliedCandidates = [...this.allCandidates];
    } else {
      this.appliedCandidates = this.allCandidates.filter(c => c.status.toLowerCase() === this.selectedFilter);
    }
  }

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '60%',
      data: candidate
    });
  }

  updateCandidateStatus(candidate: any, newStatus: string): void {
    candidate.status = newStatus;
  }
    
  // Handle Page Change
  updatePage(page: number): void {
    console.log('Page Changed:', page);
    this.paginationConfig.currentPage = page;
  }

  // Handle Items Per Page Change
  updateItemsPerPage(itemsPerPage: number): void {
    console.log('Items Per Page Changed:', itemsPerPage);
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }
}
