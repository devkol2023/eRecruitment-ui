import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-job-posting',
  standalone: false,

  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  jobForm: FormGroup;
  isEditMode = false;
  editingJobId: string | null = null;
  isJobPanelOpen = false;
  categories = ['Web Designer', 'Software Developer', 'Data Analyst', 'Marketing'];
  jobTypes = ['Full Time', 'Part Time', 'Contract', 'Remote'];
  industries = ['Banking', 'IT', 'Healthcare', 'Education'];
  countries = ['United States', 'United Kingdom', 'India', 'Canada'];
  states: any = {
    'United States': ['New York', 'California', 'Texas', 'Florida'],
    India: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  };
  candidateTypeOptions = ['Internal', 'External'];

  statesForSelectedCountry: string[] = [];

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

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      jobType: ['', Validators.required],
      salaryType: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      salaryMax: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      skills: ['', Validators.required],
      qualifications: ['', Validators.required],
      experience: ['', Validators.required],
      industry: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      candidateType: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onCountryChange(selectedCountry: string): void {
    this.statesForSelectedCountry = this.states[selectedCountry] || [];
    this.jobForm.get('state')?.setValue('');
  }
  onSubmit(): void {
    if (this.jobForm.valid) {
      const newJob = {
        id: this.isEditMode ? this.editingJobId : 'J00' + (this.jobListings.length + 1),
        ...this.jobForm.value,
      };

      if (this.isEditMode) {
        this.jobListings = this.jobListings.map(job =>
          job.id === this.editingJobId ? newJob : job
        );
        this.isEditMode = false;
        this.editingJobId = null;
      } else {
        this.jobListings.push(newJob);
      }
      if (this.tableComponent) {
        this.tableComponent.data = this.jobListings;
        this.tableComponent.ngOnInit(); 
        this.paginationConfig.totalItems = this.jobListings.length;
      }
      this.jobForm.reset();
      this.jobForm.markAsPristine();
      this.jobForm.markAsUntouched();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  updateItemsPerPage(itemsPerPage: number): void {
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

  onEdit(job: any): void {
    this.isEditMode = true;
    this.editingJobId = job.id;
    this.isJobPanelOpen = true;
    this.jobForm.patchValue(job);
  }

  onDelete(jobId: string): void {
    this.jobListings = this.jobListings.filter(job => job.id !== jobId);
  }
}
