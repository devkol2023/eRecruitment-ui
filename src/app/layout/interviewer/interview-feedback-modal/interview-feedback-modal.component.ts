import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-interview-feedback-modal',
  standalone: false,
  
  templateUrl: './interview-feedback-modal.component.html',
  styleUrl: './interview-feedback-modal.component.scss'
})
export class InterviewFeedbackModalComponent {
  feedbackForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InterviewFeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public interview: any,
    private fb: FormBuilder
  ) {
    this.feedbackForm = this.fb.group({
      candidateName: [{ value: interview.candidateName, disabled: true }],
      jobTitle: [{ value: interview.jobTitle, disabled: true }],
      feedback: ['', Validators.required],
      rating: ['', Validators.required],
      recommendation: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      this.dialogRef.close(this.feedbackForm.value);
    } else {
      this.feedbackForm.markAllAsTouched();
    }
  }
}
