import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-jobs',
  standalone: false,
  
  templateUrl: './featured-jobs.component.html',
  styleUrl: './featured-jobs.component.scss'
})
export class FeaturedJobsComponent {
  categories = [
    {
      name: 'Design & Creative',
      count: 653,
      icon: 'assets/icons/design-creative.svg',
    },
    {
      name: 'Web Development',
      count: 785,
      icon: 'assets/icons/web-development.svg',
    },
    {
      name: 'Marketing',
      count: 432,
      icon: 'assets/icons/marketing.svg',
    },
    {
      name: 'Mobile Apps',
      count: 189,
      icon: 'assets/icons/mobile-apps.svg',
    },
    {
      name: 'Engineering',
      count: 561,
      icon: 'assets/icons/engineering.svg',
    },
    {
      name: 'IT Support',
      count: 320,
      icon: 'assets/icons/it-support.svg',
    },
    {
      name: 'Real Estate',
      count: 278,
      icon: 'assets/icons/real-estate.svg',
    },
    {
      name: 'Content Writing',
      count: 152,
      icon: 'assets/icons/content-writing.svg',
    },
  ];
}
