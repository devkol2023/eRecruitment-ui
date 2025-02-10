import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateDetailsModalComponent } from '../../../../shared/modal/candidate-details-modal/candidate-details-modal.component';
import { messages } from '../../../../shared/constants/messages';
import { MessageDialogService } from '../../../../shared/service/message-dialog.service';

@Component({
  selector: 'app-inbox',
  standalone: false,
  
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent implements OnInit {
  @Input() inboxData: any[] = [];

  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'appliedFor', label: 'Applied For', width: '15%' },
    { key: 'experience', label: 'Experience', width: '12%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'lastLogin', label: 'Applied on', width: '10%' },
    { key: 'status', label: 'Status', width: '10%' },
    { 
      key: 'action', 
      label: 'Action', 
      width: '23%', 
      type: 'action', 
      types: { viewDetails: true, shortlist: true, reject: true }
    }
  ];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.inboxData.length, // Total number of items
  };

  constructor(private dialog: MatDialog,
    private dialogMessage: MessageDialogService
  ) { }

  ngOnInit(): void {
    
  }

  // Handle Page Change
  updatePage(page: number): void {
    this.paginationConfig.currentPage = page;
  }

  // Handle Items Per Page Change
  updateItemsPerPage(itemsPerPage: number): void {
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1; // Reset to the first page
  }

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '60%',
      data: candidate
    });
  }

  shortListAction(data: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.shortlistCandidate,
      iconType: 'warning',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        const selectedIndex = this.inboxData.findIndex(el => el.id == data.id);
        this.inboxData[selectedIndex].status = 'Shortlisted';
        // this.applyFilter({value: this.selectedFilter});
      }
    });
  }

  rejectAction(data: any): void {
    this.dialogMessage.open({
      title: messages.confirmation,
      message: messages.rejectCandidate,
      iconType: 'warning',
      buttons: [
        { text: 'Yes', style: 'primary-btn' },
        { text: 'No', style: 'secondary-btn' },
      ]
    }).subscribe((clickedButton: string) => {
      if (clickedButton === 'Yes') {
        const selectedIndex = this.inboxData.findIndex(el => el.id == data.id);
        this.inboxData[selectedIndex].status = 'Rejected';
        // this.applyFilter({value: this.selectedFilter});
      }
    });
  }
}
