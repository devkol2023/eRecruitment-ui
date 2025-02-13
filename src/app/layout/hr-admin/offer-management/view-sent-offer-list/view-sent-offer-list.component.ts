import { Component } from '@angular/core';
import { OfferDetailsModalComponent } from '../../../../shared/modal/offer-details-modal/offer-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-sent-offer-list',
  standalone: false,
  
  templateUrl: './view-sent-offer-list.component.html',
  styleUrl: './view-sent-offer-list.component.scss'
})
export class ViewSentOfferListComponent {
  // Offer Filters
  offerFilters = [
    { label: 'All', value: 'all', active: true },
    { label: 'Pending', value: 'pending', active: false },
    { label: 'Accepted', value: 'accepted', active: false },
    { label: 'Rejected', value: 'rejected', active: false },
    { label: 'Withdrawn', value: 'withdrawn', active: false }
  ];

  // Table Columns
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'jobRefNo', label: 'Job Ref No', width: '15%' },
    { key: 'jobTitle', label: 'Job Title', width: '20%' },
    { key: 'offerDate', label: 'Offer Date', width: '10%' },
    { key: 'status', label: 'Status', width: '15%' },
    { key: 'actions', label: 'Actions', width: '15%', type: 'action', types: { viewOffer: true, resendOffer: true, withdrawOffer: true } }
  ];

  // Sample Offer Data
  allOffers = [
    {
      id: 'O001',
      candidateName: 'John Doe',
      jobTitle: 'Branch Manager',
      jobRefNo: 'BM2024-101', // New field
      offerDate: '02/05/2024',
      status: 'Pending'
    },
    {
      id: 'O002',
      candidateName: 'Jane Smith',
      jobTitle: 'Loan Officer',
      jobRefNo: 'LO2024-102', // New field
      offerDate: '01/05/2024',
      status: 'Accepted'
    },
    {
      id: 'O003',
      candidateName: 'Michael Brown',
      jobTitle: 'Financial Analyst',
      jobRefNo: 'FA2024-103', // New field
      offerDate: '03/05/2024',
      status: 'Rejected'
    },
    {
      id: 'O004',
      candidateName: 'Emily Davis',
      jobTitle: 'HR Manager',
      jobRefNo: 'HR2024-104', // New field
      offerDate: '04/05/2024',
      status: 'Withdrawn'
    },
    {
      id: 'O005',
      candidateName: 'Robert Johnson',
      jobTitle: 'Software Developer',
      jobRefNo: 'SD2024-105', // New field
      offerDate: '02/05/2024',
      status: 'Pending'
    }
];


  filteredOffers = [...this.allOffers];

  paginationConfig = {
    id: 'offer_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.allOffers.length
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  applyFilter(filter: any): void {
    this.offerFilters.forEach(f => f.active = false);
    filter.active = true;

    if (filter.value === 'all') {
      this.filteredOffers = [...this.allOffers];
    } else {
      this.filteredOffers = this.allOffers.filter(offer => offer.status.toLowerCase() === filter.value);
    }

    this.paginationConfig.totalItems = this.filteredOffers.length;
  }
  updateItemsPerPage(itemsPerPage: number): void {
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

  // Handle Page Change
  updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }

  viewOffer(offer: any): void {
    offer = {...offer, from: 'HR'}
    this.dialog.open(OfferDetailsModalComponent, {
      width: '60%',
      data: offer
    });
  }

  resendOffer(offer: any): void {
    console.log('Resending Offer:', offer);
  }

  withdrawOffer(offer: any): void {
    console.log('Withdrawing Offer:', offer);
  }
}
