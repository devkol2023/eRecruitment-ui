import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-home-banner',
  standalone: false,
  
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent implements OnInit {
  backgroundImage: string = '/images/user-info-background.jpg';
  userInfo = {
    name: 'John Doe',
    role: '',
    department: 'Banking & Finance',
    lastLogin: new Date('2025-02-11T16:02:00'),
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.userInfo.role = user?.role;
      this.setUserDetails();
    });
  }

  setUserDetails(): void {
    switch (this.userInfo?.role) {
      case 'HR':
        this.userInfo.department = 'Recruiting Lead';
        this.userInfo.name = 'Michael Jordan';
        break;
      case 'Admin':
        this.userInfo.department = 'System Administrator';
        this.userInfo.name = 'Michael Bryant';
        break;
      case 'Interviewer':
        this.userInfo.department = 'Talent Assessor';
        this.userInfo.name = 'Kobe Bryant';
        break;
      default:
        this.userInfo.department = 'Banking & Finance';
        this.userInfo.name = 'LeBron James';
        break;
    }
  }
}
