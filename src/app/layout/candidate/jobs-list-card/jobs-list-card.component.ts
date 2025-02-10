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
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
          The Bank of St. Vincent is a leading financial institution committed to providing 
          innovative banking solutions and excellent customer service. We aim to foster growth
          and financial stability within the region through our dedicated team of professionals.
        `,
      },
    },
    {
      title: 'Bank Manager',
      company: 'Bank of St. Vincent',
      location: 'Jamaica, St. Vincent',
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
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
          The Bank of St. Vincent is a leading financial institution committed to providing 
          innovative banking solutions and excellent customer service. We aim to foster growth
          and financial stability within the region through our dedicated team of professionals.
        `,
      },
    }

  

    // ,{
    //   id: 1,
    //   status: ['New', 'Urgently hiring'],
    //   title: 'Front End Developer',
    //   company: 'Code Cloud Web',
    //   location: 'Kolkata, West Bengal',
    //   responseTime: 'Typically responds within 1 day',
    //   salary: '₹2,06,368.89 - ₹2,50,000.00 a year',
    //   jobType: 'Full-time',
    //   shiftType: 'Day shift',
    //   description: [
    //     'Develop & Design: Create stunning websites using HTML/CSS and WordPress/Elementor.',
    //     'Innovate with AI: Utilize your knowledge of AI prompt engineering to deliver desired outputs and enhance user...'
    //   ]
    // },
    // {
    //   id: 2,
    //   status: ['New', 'Urgently hiring'],
    //   title: 'Back End Developer',
    //   company: 'Code Cloud Web',
    //   location: 'Kolkata, West Bengal',
    //   responseTime: 'Typically responds within 1 day',
    //   salary: '₹2,06,368.89 - ₹2,50,000.00 a year',
    //   jobType: 'Full-time',
    //   shiftType: 'Day shift',
    //   description: [
    //     'Develop & Design: Create stunning websites using HTML/CSS and WordPress/Elementor.',
    //     'Innovate with AI: Utilize your knowledge of AI prompt engineering to deliver desired outputs and enhance user...'
    //   ]
    // }
    
  ];

  ngOnInit(): void {
    this.selectCard(this.jobs[0]);
  }

  selectCard(job: any){
    this.selectedJob = job;
    this.selectedCard.emit(job);
  }
}
