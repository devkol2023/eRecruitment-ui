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

  getIconType(iconType: string): string {
    switch (iconType) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'error_outline';
      default:
        return 'error_outline'; // Default icon if no valid type is given
    }
  }
}
