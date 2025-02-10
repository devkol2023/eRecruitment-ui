import { Injectable } from '@angular/core';
import { ConfirmationModalComponent } from '../modal/confirmation-modal/confirmation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { messages } from '../constants/messages';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  private dialogRef!: MatDialogRef<ConfirmationModalComponent>;

  constructor(private dialog: MatDialog) {}
  /**
   * Open a confirmation modal with dynamic options
   * @param options - { title, message, buttons (array), successIcon }
   */
  public open(options: any = {}): Observable<string> {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: options?.title || 'Error Occurred',
        message: options?.message || 'Something went wrong. Please try again.',
        iconType: options?.iconType ?? 'warning', // Default: error state (false)
        buttons: options?.buttons || [
          { text: 'OK', style: 'primary-btn' }
        ],
      },
      width: options?.width || '450px',
      disableClose: options?.disableClose || false
    });

    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => res) // Returns the clicked button's text
    );
  }
}
