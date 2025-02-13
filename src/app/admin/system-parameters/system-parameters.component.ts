import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-system-parameters',
  standalone: false,
  
  templateUrl: './system-parameters.component.html',
  styleUrl: './system-parameters.component.scss'
})
export class SystemParametersComponent implements OnInit{
  systemParamsForm!:FormGroup;
  fileTypes: string[] = ['.pdf', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
  titles: string[] = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.']; 
  roles: string[] = ['Admin', 'Manager', 'User'];

  matcher = new CustomErrorStateMatcher();

  constructor(private fb:FormBuilder){}
  
ngOnInit(): void {
  this.systemParamsForm = this.fb.group({
    documentUploadSize: [2, [Validators.required, Validators.min(1)]],
    passwordExpireTime: [120, [Validators.required, Validators.min(1)]],
    emailNotification: ['yes', Validators.required],
    systemNotification: ['yes', Validators.required],
    fileTypes: [[], Validators.required],
    invalidLoginAttempts: [5, [Validators.required, Validators.min(1)]],
    twoFactorAuth: ['yes', Validators.required],
    autoDeletionDays: [null],
  });
}

onSubmit(): void {
  if (this.systemParamsForm.valid) {
    console.log('Form Data:', this.systemParamsForm.value);
  } else {
    console.log('Form is invalid!');
  }
}
}

