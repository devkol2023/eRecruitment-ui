import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  activeDropdown: string | null = null;
  loggedInUser: any = null;
  isLoggedIn: boolean = false;
  isNotificationOpen: boolean = false;
  notifications: string[] = [
    'You have a new message from John Doe',
    'Reminder: Complete your profile',
    'System update scheduled for tomorrow',
    'Your leave request has been approved',
    'Meeting scheduled at 3 PM',
    'System alert: Password expires in 5 days',
  ];

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.loggedInUser = user;
    });

    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/job-dashboard']);
  }

  toggleNotificationPanel(): void {
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  goToViewAll() {
    // this.isNotificationOpen = false;
    // this.isDropdownOpen = false;
    // this.router.navigateByUrl('/home/viewMoreNotifications');
  }

  markAsRead(notification: string): void  {
    this.notifications = this.notifications.filter((el: string) => el !== notification);
  }
}
