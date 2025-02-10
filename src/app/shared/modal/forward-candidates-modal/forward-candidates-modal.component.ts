import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forward-candidates-modal',
  standalone: false,
  
  templateUrl: './forward-candidates-modal.component.html',
  styleUrl: './forward-candidates-modal.component.scss'
})
export class ForwardCandidatesModalComponent {
  forwardForm: FormGroup;

  usersList = [
    { id: 'U001', name: 'Alice Johnson', role: 'HR Manager', department: 'Human Resources' },
    { id: 'U002', name: 'Bob Williams', role: 'Recruiter', department: 'Talent Acquisition' },
    { id: 'U003', name: 'Charlie Smith', role: 'Recruiter', department: 'Talent Acquisition' },
    { id: 'U004', name: 'David Brown', role: 'Department Head', department: 'Finance' },
    { id: 'U005', name: 'Emily Davis', role: 'Department Head', department: 'Marketing' },
    { id: 'U006', name: 'Frank Miller', role: 'HR Manager', department: 'Operations' }
  ];  

  constructor(
    public dialogRef: MatDialogRef<ForwardCandidatesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public candidate: any,
    private fb: FormBuilder
  ) {
    this.forwardForm = this.fb.group({
      forwardedTo: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.forwardForm.valid) {
      this.dialogRef.close(this.forwardForm.value);
    } else {
      this.forwardForm.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
