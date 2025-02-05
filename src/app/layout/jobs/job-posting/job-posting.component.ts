import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  standalone: false,
  
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent implements OnInit {
  jobForm: FormGroup;

categories = ['Web Designer', 'Software Developer', 'Data Analyst', 'Marketing'];
jobTypes = ['Full Time', 'Part Time', 'Contract', 'Remote'];
industries = ['Banking', 'IT', 'Healthcare', 'Education'];
countries = ['United States', 'United Kingdom', 'India', 'Canada'];
states: any = {
  'United States': ['New York', 'California', 'Texas', 'Florida'],
  India: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
  Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
};

statesForSelectedCountry: string[] = [];

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
    console.log('Form Submitted:', this.jobForm.value);
  } else {
    this.jobForm.markAllAsTouched();
  }
}
}
