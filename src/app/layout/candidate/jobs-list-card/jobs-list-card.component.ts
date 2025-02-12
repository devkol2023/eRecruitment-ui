import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jobs-list-card',
  standalone: false,
  
  templateUrl: './jobs-list-card.component.html',
  styleUrl: './jobs-list-card.component.scss'
})
export class JobsListCardComponent implements OnInit {
  @Output() selectedCard = new EventEmitter<any>();
  selectedJob: any; 

  public jobs: any[] = [
    {
      title: 'Financial Analyst',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Kingstown, St. Vincent',
      salary: '$4,000 - $5,500 per month',
      companyLogo: 'assets/bank-logo.jpg',
      description: `
        The Bank of St. Vincent and Grenadines is seeking a detail-oriented and analytical Financial Analyst
        to support our financial planning and decision-making processes. The successful candidate will 
        analyze financial data, create financial models for decision support, and provide recommendations 
        to improve financial performance.
      `,
      requirements: [
        'Minimum of 3 years of experience in financial analysis or a related field.',
        'Strong analytical and data gathering skills.',
        'Proficiency in spreadsheets, databases, MS Office, and financial software applications.',
        'Hands-on experience with statistical analysis and statistical packages.',
        'Outstanding presentation, reporting, and communication skills.'
      ],
      education: [
        'Bachelor’s degree in Finance, Economics, or related field.',
        'Professional certifications such as CFA or Certified Financial Analyst are preferred.'
      ],
      overview: {
        postedDate: '01 Mar 2025',
        location: 'Kingstown, St. Vincent',
        vacancy: '01',
        jobRefNo: 'FA-2025-01',
        jobNature: 'Full-time',
        salary: '$4,000 - $5,500 per month',
        applicationDeadline: '30 Mar 2025',
      },
      companyInfo: {
        name: 'Bank of St. Vincent and Grenadines',
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
          Join our team to help shape the financial strategies that will boost our bank's growth 
          and ensure our financial strength in the competitive market.
        `,
      },
    },
    {
      title: 'Loan Officer',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Bequia, St. Vincent',
      salary: '$3,000 - $4,500 per month',
      companyLogo: 'assets/bank-logo.jpg',
      description: `
        The Bank of St. Vincent and Grenadines is looking for a knowledgeable Loan Officer to evaluate, 
        authorize, or recommend approval of loan applications for people and businesses. The ideal 
        candidate will help customers by determining appropriate loans, assessing creditworthiness, 
        and following up on their loan process.
      `,
      requirements: [
        'Proven work experience as a Loan Officer.',
        'Familiarity with computers and banking applications/software.',
        'Solid understanding of direct/indirect lending products and practices.',
        'Excellent communication and interpersonal skills.',
        'Ability to work in a goal-oriented environment.'
      ],
      education: [
        'Bachelor’s degree in Finance, Economics, or a related field.',
        'Previous experience in a banking environment preferred.'
      ],
      overview: {
        postedDate: '20 Feb 2025',
        location: 'Bequia, St. Vincent',
        vacancy: '02',
        jobRefNo: 'LO-2025-02',
        jobNature: 'Full-time',
        salary: '$3,000 - $4,500 per month',
        applicationDeadline: '15 Apr 2025',
      },
      companyInfo: {
        name: 'Bank of St. Vincent and Grenadines',
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
          Our team provides financial services with a personal touch, empowering our clients 
          to achieve their financial goals with innovative loan products.
        `,
      },
    },
    {
      title: 'IT Support Specialist',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Kingstown, St. Vincent',
      salary: '$3,500 - $4,800 per month',
      companyLogo: 'assets/bank-logo.jpg',
      description: `
        The Bank of St. Vincent and Grenadines invites applications for an IT Support Specialist
        to manage our banking network infrastructure, provide technical support, and ensure the 
        security of data, network access, and backup systems.
      `,
      requirements: [
        'Strong experience in the administration and performance tuning of computer hardware.',
        'Experience with virtualization and containerization (e.g., VMware, Virtual Box).',
        'Experience with monitoring systems and IT security practices.',
        'Excellent problem-solving skills and thorough knowledge of network administration.',
        'Experience with data center management and data governance.'
      ],
      education: [
        'Bachelor’s degree in Computer Science, Information Technology, System Administration, or a similar field.',
        'Relevant certifications (e.g., CompTIA A+, Microsoft Certified IT Professional) will be an advantage.'
      ],
      overview: {
        postedDate: '10 Mar 2025',
        location: 'Kingstown, St. Vincent',
        vacancy: '01',
        jobRefNo: 'ITS-2025-03',
        jobNature: 'Full-time',
        salary: '$3,500 - $4,800 per month',
        applicationDeadline: '25 Apr 2025',
      },
      companyInfo: {
        name: 'Bank of St. Vincent and Grenadines',
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
          We provide cutting-edge technological support to ensure our banking operations run smoothly 
          and securely, supporting the financial needs of our community.
        `,
      },
    }        
  ];

  ngOnInit(): void {
    this.selectCard(this.jobs[0]);
  }

  selectCard(job: any){
    this.selectedJob = job;
    this.selectedCard.emit(job);
  }
}
