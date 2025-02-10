import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateDetailsModalComponent } from '../../../../shared/modal/candidate-details-modal/candidate-details-modal.component';
import { messages } from '../../../../shared/constants/messages';
import { MessageDialogService } from '../../../../shared/service/message-dialog.service';
import { ForwardCandidatesModalComponent } from '../../../../shared/modal/forward-candidates-modal/forward-candidates-modal.component';

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
    { key: 'checkbox', label: '#', width: '2%' },
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'appliedFor', label: 'Applied For', width: '15%' },
    { key: 'experience', label: 'Experience', width: '10%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'lastLogin', label: 'Applied on', width: '10%' },
    { key: 'status', label: 'Application Status', width: '10%' },
    { 
      key: 'action', 
      label: 'Action', 
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
      status: 'Applied',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$70,000',
      expectedSalary: '$90,000',
      checked: false,
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
      checked: false,
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
      checked: false,
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
      status: 'Applied',
      lastLogin: '04/05/2024',
      candidateType: 'Internal',
      currentSalary: '$85,000',
      expectedSalary: '$100,000',
      checked: false,
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
      status: 'Applied',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$60,000',
      expectedSalary: '$80,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_robert_johnson.pdf' },
        { name: 'Programming Certification', file: 'robert_certification.pdf' }
      ]
    },
    {
      id: 'C006',
      candidateName: 'Sophia Miller',
      appliedFor: 'Customer Service Representative',
      experience: '2 Years',
      skills: 'Communication, Problem Solving, Client Management',
      status: 'Applied',
      lastLogin: '05/05/2024',
      candidateType: 'Internal',
      currentSalary: '$40,000',
      expectedSalary: '$50,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_sophia_miller.pdf' }
      ]
    }
  ];
  
  
  appliedCandidates: any[] = [];
  checkedCandidates: any[] = [];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.appliedCandidates.length, // Total number of items
  };

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
    private dialogMessage: MessageDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];
      this.applyFilter({value: this.selectedFilter});
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
    switch (this.selectedFilter) {
      case 'applied':
        this.tableColumns[6].types = { viewDetails: true, shortlist: true, reject: true };
        break;
      case 'shortlisted':
        this.tableColumns[6].types = { viewDetails: true, reject: true , schedule: true} as any;
        break;
      case 'rejected':
        this.tableColumns[6].types = { viewDetails: true } as any;
        break;
      default:
        this.tableColumns[6].types = { viewDetails: true, reject: true } as any;
        break;
    }
  }

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '60%',
      data: candidate
    });
  }

  shortListAction(data: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.shortlistCandidate,
      iconType: 'waring',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        const selectedIndex = this.allCandidates.findIndex(el => el.id == data.id);
        this.allCandidates[selectedIndex].status = 'Shortlisted';
        this.applyFilter({value: this.selectedFilter});
      }
    });
  }

  rejectAction(data: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.rejectCandidate,
      iconType: 'warning',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        const selectedIndex = this.allCandidates.findIndex(el => el.id == data.id);
        this.allCandidates[selectedIndex].status = 'Rejected';
        this.applyFilter({value: this.selectedFilter});
      }
    });
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

  onCheckBoxAction(event: any): void {
    this.checkedCandidates = this.appliedCandidates.filter(candidate => candidate.checked);
  }

  forwardCandidates(): void {
    const dialogRef = this.dialog.open(ForwardCandidatesModalComponent, {
      width: '60%',
      data: this.checkedCandidates
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appliedCandidates.forEach(candidate => {
          candidate.checked = false;
        });
        this.checkedCandidates = [];
      }
    });
  }

  onScheduleInterviewAction(data: any): void {
    this.router.navigateByUrl('hr/schedule-interview');
  }
}
