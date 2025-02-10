import { Component } from '@angular/core';

@Component({
  selector: 'app-sentbox',
  standalone: false,
  
  templateUrl: './sentbox.component.html',
  styleUrl: './sentbox.component.scss'
})
export class SentboxComponent {
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'appliedFor', label: 'Applied For', width: '20%' },
    { key: 'experience', label: 'Experience', width: '12%' },
    { key: 'skills', label: 'Skills', width: '23%' },
    { key: 'lastLogin', label: 'Applied on', width: '10%' },
    { key: 'status', label: 'Status', width: '10%' },
    { 
      key: 'action', 
      label: 'Action', 
      width: '10%',
      type: 'action', 
      types: { viewDetails: true}
    }
  ];

  sentBoxData = [];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.sentBoxData.length, // Total number of items
  };
}
