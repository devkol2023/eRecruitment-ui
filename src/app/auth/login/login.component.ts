import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { messages } from '../../shared/constants/messages';
import { MessageDialogService } from '../../shared/service/message-dialog.service';
import { ProfileUpdateReminderModalComponent } from '../../shared/modal/profile-update-reminder-modal/profile-update-reminder-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { NewJobOfferReceivedModalComponent } from '../../shared/modal/new-job-offer-received-modal/new-job-offer-received-modal.component';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isOtpLogin = false;
  isOtpSent = false;
  showResetForm = false;

  users = [
    { username: 'candidate', password: '12345', role: 'Candidate' },
    { username: 'hr', password: '12345', role: 'HR' },
    { username: 'interviewer', password: '12345', role: 'Interviewer' },
    { username: 'admin', password: '12345', role: 'Admin' },
  ];

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService,
    private dialogMessage: MessageDialogService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', [Validators.pattern('^[0-9]{10}$')]], // Optional validation
      otp: ['']
    });
  }

  toggleLoginMethod() {
    this.isOtpLogin = !this.isOtpLogin;
    if (this.isOtpLogin) {
      // Switching to OTP login: Reset password fields
      this.loginForm.get('password')?.clearValidators();
      this.loginForm.get('password')?.updateValueAndValidity();

      this.loginForm.get('otp')?.setValidators([Validators.required]);
      this.loginForm.get('mobileNumber')?.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
    } else {
      // Switching to Password login: Reset OTP fields
      this.loginForm.get('otp')?.clearValidators();
      this.loginForm.get('otp')?.updateValueAndValidity();

      this.loginForm.get('mobileNumber')?.clearValidators();
      this.loginForm.get('mobileNumber')?.updateValueAndValidity();

      this.loginForm.get('password')?.setValidators([Validators.required]);
    }
  }

  sendOtp() {
    if (this.loginForm.get('mobileNumber')?.invalid) {
      this.loginForm.get('mobileNumber')?.markAsTouched();
      return;
    }
    this.isOtpSent = true;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const user = this.users.find(u => u.username === email && u.password === password);
  
      if (user) {
        this.authService.login(user);
        if (user.role == 'HR') {
          this.router.navigate(['/hr/dashboard']);
        } else if (user.role == 'Candidate') {
          this.router.navigate(['/candidate/dashboard']);
          this.openUpdateProfileModal();
        } else if (user.role == 'Interviewer') {
          this.router.navigate(['/interviewer/dashboard']);
        } else if (user.role == 'Admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/job-dashboard']);
        }
      } else {
        this.dialogMessage.open({
          title: messages.errorOccured,
          message: messages.invalidUserNameorPassword,
          iconType: 'error',
          buttons: [
            { text: 'Ok', style: 'primary-btn' },
          ]
        })
      }
    } else {
      console.log('Form Invalid');
    }
  }

  openUpdateProfileModal(): void {
    setTimeout(() => {
      const dialogRef = this.dialog.open(ProfileUpdateReminderModalComponent, {
        width: '50%',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(resp => {
        // this.dialog.open(NewJobOfferReceivedModalComponent, {
        //   width: '60%',
        //   disableClose: true,
        // });
      })
    }, 3000);
  }
}
