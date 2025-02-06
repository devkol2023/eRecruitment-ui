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

  searchQuery: string = '';
  sortedData: any[] = []; // Data after sorting
  originalTableData: any[] = [];
  sortConfig = { active: '', direction: '' }; // Sorting state
  toggleValue = false; // Initial toggle state
  
  pageSizes = [5, 10, 20, 50];
  
  ngOnInit(): void {
    // Initialize sortedData with the original data
    this.sortedData = [...this.data];
    // Save a copy of the original data
    this.originalTableData = [...this.data];
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
    this.onPageChange.emit(page);
  }

  handleItemsPerPageChange(event: Event): void {
    const newSize = (event.target as HTMLSelectElement).value;
    this.onItemsPerPageChange.emit(parseInt(newSize, 10));
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
      case 'offer made':
      case 'completed':
        return 'green';
      case 'shortlisted':
        return 'blue';
      case 'under review':
      case 'ongoing':
        return '#EFA601';
      case 'rejected':
        return 'red';
      case 'interview scheduled':
      case 'upcoming':
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
}