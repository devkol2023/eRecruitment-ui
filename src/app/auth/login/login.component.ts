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

  users = [
    { username: 'candidate', password: '12345', role: 'Candidate' },
    { username: 'hr', password: '12345', role: 'HR' },
    { username: 'interviewer', password: '12345', role: 'Interviewer' },
  ];

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService,
    private dialogMessage: MessageDialogService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
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
        width: '60%',
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
