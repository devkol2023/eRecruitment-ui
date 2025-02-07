import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: false,
  
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA)
    public data: any,
    private mdDialogRef: MatDialogRef<ConfirmationModalComponent>
  ) {}

  closeModal(buttonText: string) {
    this.mdDialogRef.close(buttonText); // Pass clicked button text
  }
}
