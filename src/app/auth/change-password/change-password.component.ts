import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: false,
  
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  changePasswordForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      currentPassowrd: ['', Validators.required],
      newPassowrd: ['', Validators.required],
      confirmNewPassowrd: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.changePasswordForm.valid) {

    } else {
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
