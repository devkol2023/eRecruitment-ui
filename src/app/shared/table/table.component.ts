import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columns: Array<any> = [];
  @Input() data: any[] = [];
  @Input() paginationConfig!: {
    id: string;
    itemsPerPage: number;
    currentPage: number;
    totalItems: number;
  };
  @Input() searchRequired: boolean = true;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onPageChange = new EventEmitter<number>();
  @Output() onSortChange = new EventEmitter<any>();
  @Output() onItemsPerPageChange = new EventEmitter<number>();
  @Output() onEditAction = new EventEmitter<any>(); // Event for edit
  @Output() onDeleteAction = new EventEmitter<any>(); // Event for delete
  @Output() onFeedbackAction = new EventEmitter<any>();
  @Output() onDownloadButtonClick = new EventEmitter<any>();
  @Output() onCustomButtonClick = new EventEmitter<any>();
  @Output() onScheduleInterviewAction = new EventEmitter<any>();
  @Output() onInterviewJoinAction = new EventEmitter<any>();
  @Output() viewDetails = new EventEmitter<any>();
  @Output() shortListAction = new EventEmitter<any>();
  @Output() rejectAction = new EventEmitter<any>();
  @Output() onCheckBoxAction = new EventEmitter<any>();
  @Output() viewOfferAction = new EventEmitter<any>();

  searchQuery: string = '';
  sortedData: any[] = []; // Data after sorting
  originalTableData: any[] = [];
  sortConfig = { active: '', direction: '' }; // Sorting state
  toggleValue = false; // Initial toggle state
  
  pageSizes = [5, 10, 20, 50];
  firstItemIndex: number = 0;
  lastItemIndex: number = 0;
  totalItems: number = 0;

  ngOnInit(): void {
    this.sortedData = [...this.data];
    this.originalTableData = [...this.data];
    this.updatePaginationInfo();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Save a copy of the original data
    this.sortedData = this.originalTableData = [...this.data];
  }

  handleSearch(query: string): void {
    this.onSearch.emit(query);
    this.searchTableData(query);
  }

  searchTableData(query: string): void {

    // If search query is empty, reset to the original data
    if (!query) {
      this.sortedData = [...this.originalTableData];
      this.paginationConfig.totalItems = this.originalTableData.length; // Reset total items
      return;
    }

    // Filter the data
    const filteredData = this.originalTableData.filter((row) =>
      Object.values(row).some((value: any) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );

    this.sortedData = filteredData;
    this.paginationConfig.totalItems = filteredData.length; // Update total items
  }

  handlePageChange(page: number): void {
    this.paginationConfig.currentPage = page;
    this.updatePaginationInfo();
    this.onPageChange.emit(page);
  }


  handleItemsPerPageChange(event: Event): void {
    const newSize = (event.target as HTMLSelectElement).value;
    this.paginationConfig.itemsPerPage = parseInt(newSize, 10);
    this.updatePaginationInfo();
    this.onItemsPerPageChange.emit(this.paginationConfig.itemsPerPage);
  }

  updatePaginationInfo(): void {
    this.totalItems = this.sortedData.length;
    this.firstItemIndex = (this.paginationConfig.currentPage - 1) * this.paginationConfig.itemsPerPage;
    this.lastItemIndex = Math.min(this.firstItemIndex + this.paginationConfig.itemsPerPage, this.totalItems);
  }

  sortTable(columnKey: string): void {
    // Toggle sort direction
    if (this.sortConfig.active === columnKey) {
      this.sortConfig.direction =
        this.sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortConfig.active = columnKey;
      this.sortConfig.direction = 'asc'; // Default to ascending
    }

    // Sort data
    this.sortedData = [...this.data].sort((a, b) => {
      const valA = a[columnKey];
      const valB = b[columnKey];

      if (this.sortConfig.direction === 'asc') {
        return valA > valB ? 1 : valA < valB ? -1 : 0;
      } else {
        return valA < valB ? 1 : valA > valB ? -1 : 0;
      }
    });

    // Emit sort change event
    this.onSortChange.emit({
      active: this.sortConfig.active,
      direction: this.sortConfig.direction,
    });
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'offer released':
      case 'completed':
      case 'applied':
      case 'open':
      case 'accepted':
        return 'green';
      case 'shortlisted':
        return 'blue';
      case 'under review':
      case 'ongoing':
      case 'pending':
        return '#EFA601';
      case 'rejected':
      case 'closed':
        return 'red';
      case 'interview scheduled':
      case 'scheduled':
      case 'upcoming':
      case 'withdrawn':
        return 'purple';
      default:
        return 'gray';
    }
  }
  


  onToggleChange(event: any) {
    console.log('Toggle changed:', event.checked); // Logs the new state (true/false)
  }

  onEdit(row: any): void {
    console.log('Edit Action:', row);
    this.onEditAction.emit(row); // Emit event to parent
  }

  onDelete(row: any): void {
    console.log('Delete Action:', row);
    this.onDeleteAction.emit(row); // Emit event to parent
  }

  onFeedback(row: any): void  {
    this.onFeedbackAction.emit(row);
  }

  onButtonClick(column: any): void {
    this.onCustomButtonClick.emit(column);
  }

  downloadFile(): void {
    this.onDownloadButtonClick.emit(true);
  }

  onScheduleInterview(candidate: any) {
    this.onScheduleInterviewAction.emit(candidate);
  }

  joinInterview(interview: any) {
    this.onInterviewJoinAction.emit(interview);
  }

  viewCandidateDetails(data: any) {
    this.viewDetails.emit(data);
  }

  shortList(data: any): void {
    this.shortListAction.emit(data);
  }

  reject(data: any): void {
    this.rejectAction.emit(data);
  }

  onCheckboxChange(candidate: any, isChecked: boolean): void {
    candidate.checked = isChecked;
    this.onCheckBoxAction.emit(true);
  }

  viewOffer(data: any): void {
    this.viewOfferAction.emit(data);
  }

  resendOffer(data: any): void {
    
  }

  withdrawOffer(data: any): void {
    
  }
}