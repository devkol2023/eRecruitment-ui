import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messages } from '../../../../shared/constants/messages';
import { MessageDialogService } from '../../../../shared/service/message-dialog.service';
import { CustomErrorStateMatcher } from '../../../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-generate-offer',
  standalone: false,
  
  templateUrl: './generate-offer.component.html',
  styleUrl: './generate-offer.component.scss'
})
export class GenerateOfferComponent implements OnInit {
  offerForm: FormGroup;
  selectedFile: File | null = null;
  matcher = new CustomErrorStateMatcher();

  // Mock Candidate Data
  candidates = [
    { id: 'C001', name: 'David Williams', appliedFor: 'Branch Manager' },
    { id: 'C002', name: 'Sarah Thompson', appliedFor: 'Loan Officer' },
    { id: 'C003', name: 'James Brown', appliedFor: 'Financial Analyst' },
    { id: 'C004', name: 'Emily Davis', appliedFor: 'Customer Service Representative' },
    { id: 'C005', name: 'Robert Johnson', appliedFor: 'Compliance Officer' }
];

  constructor(private fb: FormBuilder, private dialogMessage: MessageDialogService) {
    this.offerForm = this.fb.group({
      candidate: ['', Validators.required],
      jobPosition: [{ value: '', disabled: true }, Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      joiningDate: ['', Validators.required],
      offerLetter: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.offerForm.get('candidate')?.valueChanges.subscribe(candidateId => {
      const selectedCandidate = this.candidates.find(c => c.id === candidateId);
      this.offerForm.get('jobPosition')?.setValue(selectedCandidate?.appliedFor || '');
    });
  }

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.offerForm.get('offerLetter')?.setValue(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  onSubmit(): void {
    if (this.offerForm.valid) {
      const offerData = {
        candidate: this.candidates.find(c => c.id === this.offerForm.value.candidate),
        jobPosition: this.offerForm.value.jobPosition,
        salary: this.offerForm.value.salary,
        joiningDate: this.offerForm.value.joiningDate,
        offerLetter: this.selectedFile
      };
      this.dialogMessage.open({
        title: messages.offerGenerated,
        message: `${messages.offerGeneratedBodyMsg} ${offerData.candidate?.name}`,
        iconType: 'success',
        buttons: [
          { text: 'Ok', style: 'primary-btn' },
        ]
      }).subscribe((clickedButton: string) => {
        if (clickedButton === 'Ok') {
          this.offerForm.reset();
        }
      });
    } else {
      this.offerForm.markAllAsTouched();
    }
  }
}
