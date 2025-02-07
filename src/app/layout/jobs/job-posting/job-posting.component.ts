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

      this.jobForm.reset();
      this.jobForm.markAsPristine();
      this.jobForm.markAsUntouched();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }
}
