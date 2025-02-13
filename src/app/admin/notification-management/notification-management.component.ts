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
  audienceType: string[] = ['HR Manager','Recruiter','Interviewer','Talent Acquisition Specialist'];

  tableData: any[] = [
    {
      title: 'New Credit Facility Launch',
      message: 'We are excited to announce the launch of our new credit facility aimed at supporting small and medium enterprises (SMEs) in St. Vincent.',
      audience: 'SME Clients',
      sendDateTime: '02/01/2025',
      endDateTime: '05/01/2025',
    },
    {
      title: 'Annual General Meeting',
      message: 'Join us for our Annual General Meeting to review the past year’s achievements and discuss future plans. All shareholders are invited.',
      audience: 'Shareholders',
      sendDateTime: '03/15/2025',
      endDateTime: '03/15/2025',
    },
    {
      title: 'Financial Literacy Workshop',
      message: 'Sign up for our upcoming workshop on financial literacy, designed to help you manage your finances better. Open to all our clients.',
      audience: 'Bank Clients',
      sendDateTime: '03/01/2025',
      endDateTime: '04/01/2025',
    },
    {
      title: 'New Branch Opening',
      message: 'We are pleased to announce the opening of our new branch in Kingstown. Visit us for all your banking needs, including loans, savings accounts, and more.',
      audience: 'Local Residents',
      sendDateTime: '04/10/2025',
      endDateTime: '04/10/2026',
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
