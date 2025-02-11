import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-details-modal',
  standalone: false,
  
  templateUrl: './interview-details-modal.component.html',
  styleUrl: './interview-details-modal.component.scss'
})
export class InterviewDetailsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<InterviewDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  viewOffer(): void {
    this.close();
    // this.router.navigate(['/candidate/my-application']);
  }

  close(): void {
    this.dialogRef.close();
  }
}
