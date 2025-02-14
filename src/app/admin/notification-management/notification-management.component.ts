import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-notification-management',
  standalone: false,
  
  templateUrl: './notification-management.component.html',
  styleUrl: './notification-management.component.scss'
})
export class NotificationManagementComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent!: TableComponent;
  matcher = new CustomErrorStateMatcher();

  notificationForm!: FormGroup;
  tableColumns = [
    { key: 'title', label: 'Title', width: '20%' },
    { key: 'message', label: 'Message', width: '25%' },
    { key: 'audience', label: 'Audience', width: '15%' },
    { key: 'sendDateTime', label: 'Send Date', width: '15%' },
    { key: 'endDateTime', label: 'End Date', width: '15%' },
    { key: '', label: 'Actions', width: '10%', type: 'action', types: { edit: true, delete: true } },
  ];
  audienceType: string[] = ['HR Manager','Recruiter','Interviewer','Talent Acquisition Specialist', 'Registered Users', 'Job Seekers'];

  tableData: any[] = [
    {
      title: 'Job Fair Announcement',
      message: 'We are hosting a job fair to connect job seekers with potential employers. Join us to explore various career opportunities.',
      audience: 'Job Seekers',
      sendDateTime: '02/15/2025',
      endDateTime: '02/20/2025',
    },
    {
      title: 'New Job Postings Available',
      message: 'Check out the latest job openings on our online job portal. Find opportunities that match your skills and career aspirations.',
      audience: 'Registered Users',
      sendDateTime: '03/01/2025',
      endDateTime: '03/31/2025',
    },
    {
      title: 'Interview Preparation Workshop',
      message: 'Join our workshop to enhance your interview skills and improve your chances of securing your dream job.',
      audience: 'Job Applicants',
      sendDateTime: '03/10/2025',
      endDateTime: '03/15/2025',
    }
  ];
  

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.tableData.length,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      sendDateTime: ['', Validators.required],
      endDateTime: [''],
      fileTypes:['']
    });
    this.onAudienceChange('all');
  }

  addNotification(): void {
    const {
      title,
      message,
      sendDateTime,
      endDateTime,
      allAudience,
      deptAudience,
      msmeAudience,
    } = this.notificationForm.value;

    if (this.notificationForm.valid) {
      const selectedAudience = [];
      if (allAudience) selectedAudience.push('All');
      if (deptAudience) selectedAudience.push('Dept Users');
      if (msmeAudience) selectedAudience.push('MSME Users');

      this.tableData.push({
        title,
        message,
        sendDateTime,
        endDateTime: endDateTime || 'N/A',
        audience: selectedAudience.join(', '),
      });
      this.notificationForm.reset();
      this.notificationForm.get('deptAudience')?.enable();
      this.notificationForm.get('msmeAudience')?.enable();
      this.tableComponent?.ngOnInit();
    } else {
      this.notificationForm.markAllAsTouched();
    }
  }

  onAudienceChange(selected: string): void {
    if (selected === 'all') {
      const allChecked = this.notificationForm.get('allAudience')?.value;
      if (allChecked) {
        this.notificationForm.patchValue({
          deptAudience: false,
          msmeAudience: false,
        });
        this.notificationForm.get('deptAudience')?.disable();
        this.notificationForm.get('msmeAudience')?.disable();
      } else {
        this.notificationForm.get('deptAudience')?.enable();
        this.notificationForm.get('msmeAudience')?.enable();
      }
    }
  }

  editNotification(notification: any): void {
    const allAudience = notification.audience.includes('All');
    const deptAudience = notification.audience.includes('Dept Users');
    const msmeAudience = notification.audience.includes('MSME Users');
    this.notificationForm.patchValue({
      title: notification.title,
      message: notification.message,
      sendDateTime: notification.sendDateTime,
      endDateTime: notification.endDateTime || '',
      allAudience: allAudience,
      deptAudience: deptAudience,
      msmeAudience: msmeAudience
    });
    this.tableData = this.tableData.filter((n: any) => n !== notification);
    if (this.tableComponent) {
      this.tableComponent.data = this.tableData;
      this.tableComponent?.ngOnInit();
    }
  }

  deleteNotification(notification: any): void {
    // this.tableData = this.tableData.filter((n: any) => n !== notification);
    // if (this.tableComponent) {
    //   this.tableComponent.data = this.tableData;
    //   this.tableComponent?.ngOnInit();
    // }
  }

  updatePage(page: number): void {
    console.log('Page Changed:', page);
    this.paginationConfig.currentPage = page;
  }

  updateItemsPerPage(itemsPerPage: number): void {
    console.log('Items Per Page Changed:', itemsPerPage);
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1;
  }

  onSubmit(): void {
    if (this.notificationForm.valid) {
      console.log('Saved Notifications:', this.tableData);
    }
  }
}
