import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-modal',
  standalone: false,
  
  templateUrl: './offer-modal.component.html',
  styleUrl: './offer-modal.component.scss'
})
export class OfferModalComponent {
  selectedOffer = { jobTitle: 'Branch Manager', salary: '$80,000', joiningDate: '2024-06-01', status: 'Pending' };

  constructor(
    public dialogRef: MatDialogRef<OfferModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  acceptOffer(): void {

  }

  rejectOffer(): void {

  }

  downloadOfferLetter() {
    const fileUrl = 'path_to_your_offer_letter.pdf';  // Replace with the correct path or URL
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Offer_Letter.pdf'; // The name the file will be downloaded as
    link.click();
  }

}
