import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-candidate-details-modal',
  standalone: false,
  
  templateUrl: './candidate-details-modal.component.html',
  styleUrl: './candidate-details-modal.component.scss'
})
export class CandidateDetailsModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CandidateDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public candidate: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  downloadFile(fileName: string): void {
    alert('Downloading: ' + fileName); 
    // Implement actual file download logic if needed
  }

  previewFile(fileName: string): void {
    alert('Opening preview for: ' + fileName); 
    // Implement actual file preview logic (PDF viewer, Image viewer, etc.)
  }
}
