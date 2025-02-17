import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-interview-feedback-modal',
  standalone: false,
  
  templateUrl: './interview-feedback-modal.component.html',
  styleUrl: './interview-feedback-modal.component.scss'
})
export class InterviewFeedbackModalComponent {
  feedbackForm: FormGroup;
  evaluationData = [
    {
      competency: 'Financial Acumen',
      observation: '',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']
    },
    {
      competency: 'Customer Relationship Management',
      observation: '',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']
    },
    {
      competency: 'Digital Banking & Technological Adaptation',
      observation: '',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']
    },
    {
      competency: 'Leadership & Decision Making',
      observation: '',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']
    }
  ];  

  designations: string[] = [
    'Teller',
    'Customer Service Representative',
    'Loan Officer',
    'Relationship Manager',
    'Compliance Officer',
    'Credit Analyst',
    'Branch Manager',
    'Risk Manager',
    'Operations Officer',
    'IT Security Analyst'
  ]

  ratings = ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation'];
  constructor(
    public dialogRef: MatDialogRef<InterviewFeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public interview: any,
    private fb: FormBuilder
  ) {
    this.feedbackForm = this.fb.group({
      candidateName: [interview.candidateName],
      jobTitle: [interview.jobTitle],
      overallObservation: ['', Validators.required],
      designationRecommended: ['', Validators.required],
      items: this.fb.array(this.evaluationData.map(data => this.fb.group({
        competency: [data.competency],
        observation: [data.observation],
        rating: [data.ratings]
      })))
    });
  }

  get items(): FormArray {
    return this.feedbackForm.get('items') as FormArray;
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      this.dialogRef.close(this.feedbackForm.value);
    } else {
      this.feedbackForm.markAllAsTouched();
    }
  }
}
