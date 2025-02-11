import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { messages } from '../../constants/messages';
import { MessageDialogService } from '../../service/message-dialog.service';

@Component({
  selector: 'app-apply-job-modal',
  standalone: false,
  
  templateUrl: './apply-job-modal.component.html',
  styleUrl: './apply-job-modal.component.scss'
})
export class ApplyJobModalComponent implements OnInit {
  uploadedCV: string | null = null;
  isSubmitAttempted: boolean = false;
  applyForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ApplyJobModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private fb: FormBuilder,
    private dialogMessage: MessageDialogService
  ) { }

  ngOnInit(): void {
    this.applyForm = this.fb.group({
      coverLetter: [''],
      profileConsent: [false, Validators.requiredTrue]
    });
  }

  close(flag: boolean = false): void {
    this.dialogRef.close(flag);
  }

  onCVUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedCV = file.name;
    }
  }

  // Submit Application
  submitApplication() {
    this.isSubmitAttempted = true;
    if (this.applyForm.valid && this.uploadedCV) {
      const refNo = 'BOSVG' + Math.floor(100000 + Math.random() * 900000);
      const msg = messages.jobAppliedSuccessfully.replace('(number)', refNo);
      this.dialogMessage.open({
        title: messages.succussed,
        message: msg,
        iconType: 'success',
        buttons: [
          { text: 'Ok', style: 'primary-btn' },
        ]
      }).subscribe(() => {
        this.close(true);
      })
    }
  }

  goToProfileUpdate(): void {
    this.close();
    this.router.navigate(['/candidate/profile']);
  }
}
