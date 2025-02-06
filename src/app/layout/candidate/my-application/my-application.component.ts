import { Component } from '@angular/core';

@Component({
  selector: 'app-my-application',
  standalone: false,
  
  templateUrl: './my-application.component.html',
  styleUrl: './my-application.component.scss'
})
export class MyApplicationComponent {
  filters = [
    { label: 'All', value: 'all', active: true },
    { label: 'Scheduled', value: 'scheduled', active: false },
    { label: 'Rejected', value: 'rejected', active: false },
    { label: 'Shortlisted', value: 'shortlisted', active: false },
  ];
  selectedFilter: string = 'all';
  tableColumns = [
    { key: 'applicationId', label: 'Application ID', width: '10%' },
    { key: 'jobTitle', label: 'Job Title', width: '20%' },
    { key: 'companyName', label: 'Company Name', width: '20%' },
    { key: 'jobLocation', label: 'Location', width: '15%' },
    { key: 'status', label: 'Status', width: '15%' },
    { key: 'applicationDate', label: 'Application Date', width: '15%' },
    // { key: 'action', label: 'Action', width: '5%', type: 'action', types: { withdraw: true } },
  ];
  tableData = [
    {
      applicationId: 'A001',
      jobTitle: 'Software Engineer',
      companyName: 'Tech Corp',
      jobLocation: 'New York, USA',
      status: 'Under Review',
      applicationDate: '01/10/2024',
      isWithdrawn: false,
    },
    {
      applicationId: 'A002',
      jobTitle: 'Project Manager',
      companyName: 'Innovatech Solutions',
      jobLocation: 'London, UK',
      status: 'Shortlisted',
      applicationDate: '15/09/2024',
      isWithdrawn: false,
    },
    {
      applicationId: 'A003',
      jobTitle: 'Data Scientist',
      companyName: 'DataWorld Inc.',
      jobLocation: 'San Francisco, USA',
      status: 'Rejected',
      applicationDate: '20/08/2024',
      isWithdrawn: false,
    },
    {
      applicationId: 'A004',
      jobTitle: 'HR Specialist',
      companyName: 'PeopleFirst HR',
      jobLocation: 'Toronto, Canada',
      status: 'Offer Made',
      applicationDate: '05/09/2024',
      isWithdrawn: false,
    },
    {
      applicationId: 'A005',
      jobTitle: 'UI/UX Designer',
      companyName: 'Creative Studio',
      jobLocation: 'Berlin, Germany',
      status: 'Interview Scheduled',
      applicationDate: '12/10/2024',
      isWithdrawn: false,
    },
  ];

    // Pagination Config
    paginationConfig = {
      id: 'dynamic_table',
      itemsPerPage: 10, // Default items per page
      currentPage: 1, // Start on the first page
      totalItems: this.tableData.length, // Total number of items
    };
  
    storedAlltableData = this.tableData;

    handleSortChange(event: any): void {
      console.log('Sort Event:', event);
    }
  
    // Handle Page Change
    updatePage(page: number): void {
      console.log('Page Changed:', page);
      this.paginationConfig.currentPage = page;
    }
  
    // Handle Items Per Page Change
    updateItemsPerPage(itemsPerPage: number): void {
      console.log('Items Per Page Changed:', itemsPerPage);
      this.paginationConfig.itemsPerPage = itemsPerPage;
      this.paginationConfig.currentPage = 1; // Reset to the first page
    }
    onFilterChange(filter: any): void {
      this.filters.forEach((f) => (f.active = f.value === filter.value));
      this.selectedFilter = filter.value;
      this.tableData = this.getFilteredData();
    }
  
    // Filtering logic
    getFilteredData() {
      if (this.selectedFilter === 'scheduled') {
        return this.storedAlltableData.filter(
          (item) => item.status.toLowerCase() === 'interview scheduled'
        );
      } else if (this.selectedFilter === 'rejected') {
        return this.storedAlltableData.filter(
          (item) => item.status.toLowerCase() === 'rejected'
        );
      } else if (this.selectedFilter === 'shortlisted') {
        return this.storedAlltableData.filter(
          (item) => item.status.toLowerCase() === 'shortlisted'
        );
      }
      return this.storedAlltableData; // Show all applications
    }
}
