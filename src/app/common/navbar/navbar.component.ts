import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
  userName!:string;
  isLoggedIn: boolean = false;
  roleDesc!:string;
  isProfileDropdownOpen = false;
  isNotificationOpen: boolean = false;
  notifications: string[] = [
    '📢 Your job application for "Branch Manager" is under review.',
    '✅ Congratulations! You have been shortlisted for the "Loan Officer" position.',
    '📅 Reminder: Your interview for "Financial Analyst" is scheduled for tomorrow at 3 PM.',
    '⚠️ System Alert: Your resume is missing. Please upload it to complete your profile.',
    '🎯 You have been forwarded for a special job opportunity.',
  ];

  constructor(private authService: AuthService,
    private router: Router, private eRef : ElementRef
  ) { }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isNotificationOpen = false;
      this.isProfileDropdownOpen = false;
      this.closeDropdown();
    }
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user:any) => {
      this.loggedInUser = user;
      if(this.loggedInUser?.role == 'HR'){
        this.roleDesc = 'Recruiting Lead'
        this.userName = 'Micheal Jordan'
      }
      else{
        this.roleDesc = 'Banking & Finance'
        this.userName = 'LeBron James'
      } 

    });

    this.authService.isLoggedIn().subscribe((status:any) => {
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
    this.isNotificationOpen = false;
    this.isProfileDropdownOpen = false;
    this.router.navigate(['/job-dashboard']);
  }

  toggleNotificationPanel(): void {
    this.isNotificationOpen = !this.isNotificationOpen;
    this.isProfileDropdownOpen = false;
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isNotificationOpen = false; // Close notifications when opening profile dropdown
  }

  goToViewAll() {
    // this.isNotificationOpen = false;
    // this.isDropdownOpen = false;
    // this.router.navigateByUrl('/home/viewMoreNotifications');
  }

  markAsRead(notification: string): void  {
    this.notifications = this.notifications.filter((el: string) => el !== notification);
  }

  homeClicked(): void {
    if (this.loggedInUser?.role == 'HR') {
      this.router.navigate(['/hr/dashboard']);
    } else if (this.loggedInUser?.role == 'Candidate') {
      this.router.navigate(['/candidate/dashboard']);
    } else if (this.loggedInUser?.role == 'Interviewer') {
      this.router.navigate(['/interviewer/dashboard']);
    } else {
      this.router.navigate(['/job-dashboard']);
    }
  }

  updateProfile(): void {
    this.router.navigate(['/candidate/profile']);
    this.isNotificationOpen = false;
    this.isProfileDropdownOpen = false;
  }
}
