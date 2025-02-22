import { Component, OnInit } from '@angular/core';
import { OfferDetailsModalComponent } from '../../../shared/modal/offer-details-modal/offer-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { InterviewDetailsModalComponent } from '../../../shared/modal/interview-details-modal/interview-details-modal.component';

@Component({
  selector: 'app-my-application',
  standalone: false,
  
  templateUrl: './my-application.component.html',
  styleUrl: './my-application.component.scss'
})
export class MyApplicationComponent implements OnInit {
  filters = [
    { label: 'Applied', value: 'applied', active: true },
    { label: 'Offer Released', value: 'offer-released', active: true },
    { label: 'Scheduled', value: 'scheduled', active: false },
    { label: 'Rejected', value: 'rejected', active: false },
    { label: 'Shortlisted', value: 'shortlisted', active: false },
  ];
  selectedFilter: string = 'applied';
  tableColumns: any[] = [
    { key: 'applicationId', label: 'Application ID', width: '10%' },
    { key: 'jobRefNo', label: 'Job Ref No', width: '15%' },
    { key: 'jobTitle', label: 'Job Title', width: '22%' },
    { key: 'jobLocation', label: 'Location', width: '18%' },
    { key: 'applicationDate', label: 'Application Date', width: '10%' },
    { key: 'status', label: 'Status', width: '15%' },
    {
      key: 'customActions', 
      label: 'Actions', 
      width: '10%', 
      type: 'action', 
      types: {} 
    },
  ];
  
  tableData = [
    {
      applicationId: 'BOSVG-A004',
      jobTitle: 'Customer Service Representative',
      companyName: 'Bank of St. Vincent and Grenadines',
      jobLocation: 'Calliaqua, St. Vincent',
      status: 'Offer Released',
      applicationDate: '25/01/2024',
      isWithdrawn: false,
      actions: { viewOffer: true },
      jobRefNo: 'CSR-2024-01'  // Example reference number
    },
    {
      applicationId: 'BOSVG-A001',
      jobTitle: 'Branch Manager',
      companyName: 'Bank of St. Vincent and Grenadines',
      jobLocation: 'Kingstown, St. Vincent',
      status: 'Under Review',
      applicationDate: '05/02/2024',
      isWithdrawn: false,
      actions: {},
      jobRefNo: 'BM-2024-02'  // Example reference number
    },
    {
      applicationId: 'BOSVG-A002',
      jobTitle: 'Loan Officer',
      companyName: 'Bank of St. Vincent and Grenadines',
      jobLocation: 'Bequia, St. Vincent',
      status: 'Shortlisted',
      applicationDate: '02/02/2024',
      isWithdrawn: false,
      jobRefNo: 'LO-2024-03'  // Example reference number
    },
    {
      applicationId: 'BOSVG-A003',
      jobTitle: 'Financial Analyst',
      companyName: 'Bank of St. Vincent and Grenadines',
      jobLocation: 'Georgetown, St. Vincent',
      status: 'Rejected',
      applicationDate: '29/01/2024',
      isWithdrawn: false,
      actions: { viewDetails: false },
      jobRefNo: 'FA-2024-04'  // Example reference number
    },
    {
      applicationId: 'BOSVG-A005',
      jobTitle: 'IT Support Specialist',
      companyName: 'Bank of St. Vincent and Grenadines',
      jobLocation: 'Kingstown, St. Vincent',
      status: 'Interview Scheduled',
      applicationDate: '20/01/2024',
      isWithdrawn: false,
      actions: { viewDetails: true },
      jobRefNo: 'ITS-2024-05'  // Example reference number
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

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
      this.onFilterChange({value: this.selectedFilter})
    }

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
      this.tableColumns[6].types = { viewOffer: false } as any;
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
      }else if (this.selectedFilter === 'offer-released') {
        return this.storedAlltableData.filter(
          (item) => item.status.toLowerCase() === 'offer released'
        );
      }
      return this.storedAlltableData; // Show all applications
    }

    viewOffer(offer: any): void {
      offer = {...offer, from: 'Candidate'}
      this.dialog.open(OfferDetailsModalComponent, {
        width: '60%',
        disableClose: true,
        data: offer
      });
    }

    viewDetails(data: any): void {
      this.dialog.open(InterviewDetailsModalComponent, {
        width: '60%',
        data: data,
        disableClose: true
      });
    }
}
