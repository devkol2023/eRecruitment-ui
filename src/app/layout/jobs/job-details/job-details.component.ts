import { Component } from '@angular/core';

@Component({
  selector: 'app-job-details',
  standalone: false,
  
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  jobDetails = {
    title: 'Branch Manager',
    company: 'Bank of St. Vincent',
    location: 'Kingstown, St. Vincent',
    salary: '$5,500 - $7,000 per month',
    companyLogo: 'assets/bank-logo.png',
    description: `
      The Bank of St. Vincent is seeking a highly motivated and experienced Branch Manager
      to oversee the daily operations of the bank branch. The ideal candidate will be responsible
      for driving business growth, ensuring operational efficiency, and providing excellent 
      customer service.
    `,
    requirements: [
      'Minimum of 5 years of experience in banking or financial management.',
      'Proven leadership experience in branch operations.',
      'Strong understanding of banking regulations and compliance.',
      'Ability to analyze financial reports and implement growth strategies.',
      'Excellent customer service and relationship management skills.',
    ],
    education: [
      'Bachelor’s degree in Finance, Business Administration, or related field.',
      'Professional certifications (e.g., CFA, CPA) are a plus.',
      'Strong knowledge of banking systems and financial analysis.',
      'Experience with banking software and digital banking solutions.',
    ],
    overview: {
      postedDate: '15 Feb 2025',
      location: 'Kingstown, St. Vincent',
      vacancy: '01',
      jobNature: 'Full-time',
      salary: '$5,500 - $7,000 per month',
      applicationDeadline: '10 Mar 2025',
    },
    companyInfo: {
      name: 'Bank of St. Vincent',
      website: 'www.bosvg.com',
      email: 'careers@bosvg.com',
      description: `
        The Bank of St. Vincent is a leading financial institution committed to providing 
        innovative banking solutions and excellent customer service. We aim to foster growth
        and financial stability within the region through our dedicated team of professionals.
      `,
    },
  };  
}
