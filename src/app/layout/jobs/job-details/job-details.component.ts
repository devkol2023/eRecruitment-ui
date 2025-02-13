import { AfterViewInit, Component, Input, OnInit, SimpleChanges, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';
import { ApplyJobModalComponent } from '../../../shared/modal/apply-job-modal/apply-job-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-details',
  standalone: false,
  
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent implements OnInit, AfterViewInit {
  @Input() from: string = '';
  @Input()
  set selectJob(value: any) {
    this.processJobChange(value);
  }

  jobDetails: any = {
    title: 'Branch Manager',
    company: 'Bank of St. Vincent and Grenadines',
    location: 'Kingstown, St. Vincent',
    salary: '$5,500 - $7,000 per month',
    companyLogo: 'assets/bank-logo.jpg',
    description: `
      The Bank of St. Vincent and Grenadines is seeking a highly motivated and experienced Branch Manager
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
      jobRefNo: 'BM-2024-02',
      jobNature: 'Full-time',
      salary: '$5,500 - $7,000 per month',
      applicationDeadline: '10 Mar 2025',
    },
    companyInfo: {
      name: 'Bank of St. Vincent and Grenadines',
      website: 'https://www.bosvg.com',
      email: 'careers@bosvg.com',
      description: `
        The Bank of St. Vincent and Grenadines is a leading financial institution committed to providing 
        innovative banking solutions and excellent customer service. We aim to foster growth
        and financial stability within the region through our dedicated team of professionals.
      `,
    },
  };

  isLoggedIn: boolean = false;
  jobApplied: boolean = false;

  constructor(private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  private processJobChange(job: any) {
    if(this.from == 'candidate-dashboard' || job) {
      this.jobDetails = job;
      this.jobApplied = false;
    }
  }

  ngAfterViewInit(): void {
    if(this.from == 'hr') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);
    }
  }

  goToWebsite(url: string): void {
    window.open(url, "_blank");
  }

  
  mailTo(url: string): void {
    const mail = `mailto:${url}`
    window.open(mail, "_blank");
  }
  
  applyNow(): void {
    if(!this.isLoggedIn) {
      this.router.navigate(['auth/login']);
      return;
    }
    const dialogRef = this.dialog.open(ApplyJobModalComponent, {
      width: '55%',
      data: this.jobDetails,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp) {
        this.jobApplied = true;
      }
    })
  }
}
