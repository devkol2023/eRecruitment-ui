import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component';
import { CustomErrorStateMatcher } from '../../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-job-posting',
  standalone: false,

  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent implements OnInit {
  jobForm: FormGroup;
  isEditMode = false;
  editingJobId: string | null = null;
  isJobPanelOpen = false;

  // Job Categories specific to Banking
  categories = ['Branch Manager', 'Customer Service Representative', 'Loan Officer', 'Financial Analyst', 'IT Support Specialist'];
  jobTypes = ['Full Time', 'Part Time', 'Contract', 'Internship'];
  industries = ['Banking', 'Finance', 'IT', 'Customer Service'];
  educationLevels = ['High School Diploma', 'Bachelor’s Degree', 'Master’s Degree', 'PhD'];
  candidateTypeOptions = ['Internal', 'External'];

  countries = ['United States', 'United Kingdom', 'India', 'Canada', 'St. Vincent'];
  states: any = {
    'United States': ['New York', 'California', 'Texas', 'Florida'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham'],
    'India': ['Delhi', 'Maharashtra', 'Karnataka'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'St. Vincent': ['Kingstown', 'Georgetown', 'Barrouallie']
  };

  statesForSelectedCountry: string[] = [];
  matcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      jobType: ['', Validators.required],
      salaryType: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      salaryMax: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      experience: ['', Validators.required],
      skills: ['', Validators.required],
      education: ['', Validators.required],
      industry: ['', Validators.required],
      location: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      candidateType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onCountryChange(selectedCountry: string): void {
    this.statesForSelectedCountry = this.states[selectedCountry] || [];
    this.jobForm.get('state')?.setValue('');
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      console.log('Job Posted:', this.jobForm.value);
      this.jobForm.reset();
      this.jobForm.markAsPristine();
      this.jobForm.markAsUntouched();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }
}
