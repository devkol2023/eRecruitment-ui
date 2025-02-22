import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-details-modal',
  standalone: false,
  
  templateUrl: './interview-details-modal.component.html',
  styleUrl: './interview-details-modal.component.scss'
})
export class InterviewDetailsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InterviewDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewOffer(): void {
    this.close();
    // this.router.navigate(['/candidate/my-application']);
  }

  close(): void {
    this.dialogRef.close();
  }
}
