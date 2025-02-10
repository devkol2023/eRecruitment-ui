import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-wizard',
  standalone: false,
  
  templateUrl: './job-wizard.component.html',
  styleUrl: './job-wizard.component.scss'
})
export class JobWizardComponent {
  eligibilityForm: FormGroup;
  currentStep = 1;
  submitted = false;
  recommendedJobs: any[] = [];
  jobData:any;

  // Banking-Specific Questions
  wizardQuestions = [
    {
      id: 1,
      questionDetails: 'What is your highest qualification?',
      controlName: 'qualification',
      questionType: 'SCQ',
      answersDetails: [
        { answerId: 'associate', answerValue: "Associate's Degree in Banking/Finance" },
        { answerId: 'bachelor', answerValue: "Bachelor's Degree in Finance, Accounting, Business Administration" },
        { answerId: 'masters', answerValue: "Master's Degree (MBA, Finance, Accounting)" },
        { answerId: 'certification', answerValue: 'Banking Certification (e.g., CFA, CPA, CIB)' }
      ]
    },
    {
      id: 2,
      questionDetails: 'How many years of experience do you have in the banking sector?',
      controlName: 'experience',
      questionType: 'SCQ',
      answersDetails: [
        { answerId: '0-2', answerValue: '0-2 Years (Entry Level)' },
        { answerId: '3-5', answerValue: '3-5 Years (Mid-Level)' },
        { answerId: '6-10', answerValue: '6-10 Years (Senior Level)' },
        { answerId: '10+', answerValue: '10+ Years (Expert Level)' }
      ]
    },
    {
      id: 3,
      questionDetails: 'Which skills do you have? (Select multiple)',
      controlName: 'skills',
      questionType: 'MCQ',
      answersDetails: [
        { answerId: 'financial-analysis', answerValue: 'Financial Analysis' },
        { answerId: 'risk-management', answerValue: 'Risk Management' },
        { answerId: 'customer-service', answerValue: 'Customer Service' },
        { answerId: 'loan-processing', answerValue: 'Loan Processing' },
        { answerId: 'investment-banking', answerValue: 'Investment Banking' },
        { answerId: 'fraud-prevention', answerValue: 'Fraud Prevention & Compliance' }
      ]
    },
    {
      id: 4,
      questionDetails: 'What type of banking job are you interested in?',
      controlName: 'jobType',
      questionType: 'SCQ',
      answersDetails: [
        { answerId: 'teller', answerValue: 'Bank Teller' },
        { answerId: 'loan-officer', answerValue: 'Loan Officer' },
        { answerId: 'financial-analyst', answerValue: 'Financial Analyst' },
        { answerId: 'branch-manager', answerValue: 'Branch Manager' }
      ]
    },
    {
      id: 5,
      questionDetails: 'Preferred Bank Location?',
      controlName: 'location',
      questionType: 'SCQ',
      answersDetails: [
        { answerId: 'kingstown', answerValue: 'Kingstown' },
        { answerId: 'georgetown', answerValue: 'Georgetown' },
        { answerId: 'barrouallie', answerValue: 'Barrouallie' },
        { answerId: 'calliaqua', answerValue: 'Calliaqua' }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {
    this.eligibilityForm = this.fb.group({
      qualification: ['', Validators.required],
      experience: ['', Validators.required],
      skills: [[]], // Multi-select skills
      jobType: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onCheckboxChange(step: any, controlName: string, option: any, isChecked: boolean): void {
    const selectedValues = this.eligibilityForm.get(controlName)?.value || [];
    if (isChecked) {
      selectedValues.push(option.answerId);
    } else {
      const index = selectedValues.indexOf(option.answerId);
      if (index !== -1) selectedValues.splice(index, 1);
    }
    this.eligibilityForm.get(controlName)?.setValue(selectedValues);
  }

  nextStep(): void {
    if (this.isStepValid()) this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }

  isStepValid(): boolean {
    return this.eligibilityForm.controls[this.wizardQuestions[this.currentStep - 1].controlName].valid;
  }

  onSubmit(): void {
    if (this.eligibilityForm.valid) {
      this.submitted = true;
    }
  }

  recieveJobData(event:any){
    this.jobData = event;
  }
}
