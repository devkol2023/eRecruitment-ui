import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-update-reminder-modal',
  standalone: false,
  
  templateUrl: './profile-update-reminder-modal.component.html',
  styleUrl: './profile-update-reminder-modal.component.scss'
})
export class ProfileUpdateReminderModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ProfileUpdateReminderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
