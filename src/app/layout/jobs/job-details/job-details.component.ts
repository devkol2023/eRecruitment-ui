import { Component } from '@angular/core';

@Component({
  selector: 'app-job-details',
  standalone: false,
  
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  jobDetails = {
    title: 'Digital Marketer',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$3500 - $4000',
    companyLogo: 'assets/company-logo.png',
    description: `
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal distribution of letters, as opposed to using
      Content here, making it look like readable.
    `,
    requirements: [
      'System Software Development',
      'Mobile Application in iOS/Android/Tizen or other platforms',
      'Research and code, libraries, APIs, and frameworks',
      'Strong knowledge on software development lifecycle',
      'Strong problem-solving and debugging skills',
    ],
    education: [
      '3 or more years of professional design experience',
      'Direct response email experience',
      'E-commerce website design experience',
      'Familiarity with mobile and web apps preferred',
    ],
    overview: {
      postedDate: '12 Aug 2019',
      location: 'New York',
      vacancy: '02',
      jobNature: 'Full time',
      salary: '$7,800 yearly',
      applicationDate: '12 Sep 2020',
    },
    companyInfo: {
      name: 'Colorlib',
      website: 'colorlib.com',
      email: 'test@gmail.com',
      description: `
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.
      `,
    },
  };
}
