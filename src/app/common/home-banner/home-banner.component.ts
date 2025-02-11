import { Component, OnInit } from '@angular/core';

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
    role: 'Candidate',
    department: 'Banking & Finance',
    lastLogin: new Date('2025-02-11T16:02:00'),
  };

  ngOnInit(): void {
  }
}
