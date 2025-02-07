import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-job-details-modal',
  standalone: false,
  
  templateUrl: './view-job-details-modal.component.html',
  styleUrl: './view-job-details-modal.component.scss'
})
export class ViewJobDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewJobDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
