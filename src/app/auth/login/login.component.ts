import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { messages } from '../../shared/constants/messages';
import { MessageDialogService } from '../../shared/service/message-dialog.service';

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
    private dialogMessage: MessageDialogService
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
        this.router.navigate(['/candidate/candidate-dashboard']); // Redirect to dashboard
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
}
