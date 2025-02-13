import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewJobDetailsModalComponent } from '../view-job-details-modal/view-job-details-modal.component';
import { Router } from '@angular/router';
import { messages } from '../../../../shared/constants/messages';
import { MessageDialogService } from '../../../../shared/service/message-dialog.service';

@Component({
  selector: 'app-job-management-dashboard',
  standalone: false,
  
  templateUrl: './job-management-dashboard.component.html',
  styleUrl: './job-management-dashboard.component.scss'
})
export class JobManagementDashboardComponent implements OnInit {
  jobCategories = [
    { key: 'ongoing', label: 'Ongoing Jobs' },
    { key: 'completed', label: 'Completed Jobs' },
    { key: 'future', label: 'Future Openings' },
    { key: 'internal', label: 'Internal Roles' },
  ];

  selectedCategory = 'ongoing';

  public allJobs: any[] = [
    {
      id: '1',
      title: 'Financial Analyst',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Kingstown, St. Vincent',
      salary: '$4,000 - $5,500 per month',
      category: 'ongoing',
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
      id: '2',
      title: 'Loan Officer',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Bequia, St. Vincent',
      salary: '$3,000 - $4,500 per month',
      category: 'ongoing',
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
      id: '3',
      title: 'IT Support Specialist',
      company: 'Bank of St. Vincent and Grenadines',
      location: 'Kingstown, St. Vincent',
      salary: '$3,500 - $4,800 per month',
      category: 'completed',
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

  filteredJobs = [...this.allJobs];

  constructor(private dialog: MatDialog, private router: Router,
    private dialogMessage: MessageDialogService
  ) { }

  ngOnInit(): void {
    this.onCategoryChange(this.selectedCategory);
  }

  onCategoryChange(category: string): void {
    this.filteredJobs = this.allJobs.filter((job) => job.category === category);
  }

  viewJobOverview(job: any): void {
    this.dialog.open(ViewJobDetailsModalComponent, {
      width: '85%',
      // height: '85%',
      disableClose: true,
      data: job
    });
  }
  

  editJob(job: any): void {
    this.router.navigate(['/jobs/post-job'], { queryParams: { jobId: job.id } });  
  }

  markAsComplete(job: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.markAsCompleteJob,
      iconType: 'warning',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        this.filteredJobs = this.filteredJobs.filter(el => el.id != job.id)
      }
    });
  }

  viewAppliedCandidates(job: any): void {
    this.router.navigate(['/hr/job-management/applied-candidates'], { queryParams: { jobId: job.id } });
  }
}
