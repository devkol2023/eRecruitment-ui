import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job-offer-received-modal',
  standalone: false,
  
  templateUrl: './new-job-offer-received-modal.component.html',
  styleUrl: './new-job-offer-received-modal.component.scss'
})
export class NewJobOfferReceivedModalComponent {

  constructor(
    public dialogRef: MatDialogRef<NewJobOfferReceivedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  viewOffer(): void {
    this.close();
    this.router.navigate(['/candidate/my-application']);
  }

  close(): void {
    this.dialogRef.close();
  }
}
