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
      competency: 'Technical Acumen',
      observation: 'Candidate has good understanding on the technology projects. He is currently driving the team and project.',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']
    },
    {
      competency: 'Digital Acumen',
      observation: 'Candidate is well aware of the various tools and technology to gather the requirement, analyze it and make the proper documentation. He is also working with the team for the successful completion.',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']

    },
    {
      competency: 'Business Acumen',
      observation: 'Good knowledge to handle the client. Currently managing the project and the technical team.',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']

    },
    {
      competency: 'Impactful Communication/leadership',
      observation: 'Communication skill is very good.',
      ratings: ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation']

    }
  ];

  ratings = ['Exceeds Expectation', 'Meets Expectation', 'Does Not Meet Expectation'];
  constructor(
    public dialogRef: MatDialogRef<InterviewFeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public interview: any,
    private fb: FormBuilder
  ) {
    this.feedbackForm = this.fb.group({
      // candidateName: [{ value: interview.candidateName, disabled: true }],
      // jobTitle: [{ value: interview.jobTitle, disabled: true }],
      // feedback: ['', Validators.required],
      // // rating: ['', Validators.required],
      // recommendation: ['', Validators.required],
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
