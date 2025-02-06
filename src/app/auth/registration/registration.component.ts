import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  candidateTypeOptions = ['Internal', 'External'];
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      workStatus: ['', Validators.required],
      promotions: [false],
      candidateType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
