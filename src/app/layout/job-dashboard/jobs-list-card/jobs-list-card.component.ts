import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-jobs-list-card',
  standalone: false,
  
  templateUrl: './jobs-list-card.component.html',
  styleUrl: './jobs-list-card.component.scss'
})
export class JobsListCardComponent {
  @Output()
  public jobs: any[] = [
    {
      id: 1,
      status: ['New', 'Urgently hiring'],
      title: 'Front End Developer',
      company: 'Code Cloud Web',
      location: 'Kolkata, West Bengal',
      responseTime: 'Typically responds within 1 day',
      salary: '₹2,06,368.89 - ₹2,50,000.00 a year',
      jobType: 'Full-time',
      shiftType: 'Day shift',
      description: [
        'Develop & Design: Create stunning websites using HTML/CSS and WordPress/Elementor.',
        'Innovate with AI: Utilize your knowledge of AI prompt engineering to deliver desired outputs and enhance user...'
      ]
    },
    {
      id: 2,
      status: ['New', 'Urgently hiring'],
      title: 'Back End Developer',
      company: 'Code Cloud Web',
      location: 'Kolkata, West Bengal',
      responseTime: 'Typically responds within 1 day',
      salary: '₹2,06,368.89 - ₹2,50,000.00 a year',
      jobType: 'Full-time',
      shiftType: 'Day shift',
      description: [
        'Develop & Design: Create stunning websites using HTML/CSS and WordPress/Elementor.',
        'Innovate with AI: Utilize your knowledge of AI prompt engineering to deliver desired outputs and enhance user...'
      ]
    }
    
  ];

  selectCard(){

  }
}
