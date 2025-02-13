import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-system-parameters',
  standalone: false,
  
  templateUrl: './system-parameters.component.html',
  styleUrl: './system-parameters.component.scss'
})
export class SystemParametersComponent implements OnInit{
  systemParamsForm!:FormGroup;
  fileTypes: string[] = ['.pdf', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.doc', '.docx'];
  titles: string[] = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.']; 
  roles: string[] = ['Admin', 'Manager', 'User'];
  tableColumns = [
    { key: 'name', label: 'Name', width: '20%' },
    // { key: 'email', label: 'Email', width: '10%' },
    // { key: 'mobile', label: 'Mobile', width: '10%' },
    { key: 'roleName', label: 'Role Name', width: '10%' },
    { key: 'toggle', label: 'Status', width: '10%' },
    { key: 'action', label: 'Action', width: '10%' },
  ];  

tableData = [
  {
    name: 'Pynshngain Nongsiej',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleName: '',
    toggle: true,
    action: ''
  },
  {
    name: 'Pynshngain Nongsiej',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleName: '',
    toggle: true,
    action: ''
  },
  {
    name: 'Pynshngain Nongsiej',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleName: '',
    toggle: true,
    action: ''
  },
  {
    name: 'Pynshngain Nongsiej',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleName: '',
    toggle: true,
    action: ''
  },
];

paginationConfig = {
  id: 'dynamic_table',
  itemsPerPage: 10, // Default items per page
  currentPage: 1, // Start on the first page
  totalItems: this.tableData.length, // Total number of items
};
  constructor(private fb:FormBuilder){}
  
ngOnInit(): void {
  this.systemParamsForm = this.fb.group({
    documentUploadSize: [null, [Validators.required, Validators.min(1)]],
    passwordExpireTime: [null, [Validators.required, Validators.min(1)]],
    emailNotification: ['yes', Validators.required],
    systemNotification: ['yes', Validators.required],
    fileTypes: [[], Validators.required],
    invalidLoginAttempts: [null, [Validators.required, Validators.min(1)]],
    twoFactorAuth: ['yes', Validators.required],
    autoDeletionDays: [null],
  });
}

updatePage(page: number): void {
  console.log('Page Changed:', page);
  this.paginationConfig.currentPage = page;
}

handleSortChange(event: any): void {
  console.log('Sort Event:', event);
}
// Handle Search
searchTableData(query: string): void {
  console.log('Search Query:', query);
  const filteredData = this.tableData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );
  this.tableData = filteredData;
  this.paginationConfig.totalItems = filteredData.length; // Update total items
}

updateItemsPerPage(itemsPerPage: number): void {
  console.log('Items Per Page Changed:', itemsPerPage);
  this.paginationConfig.itemsPerPage = itemsPerPage;
  this.paginationConfig.currentPage = 1; // Reset to the first page
}

onSubmit(): void {
  if (this.systemParamsForm.valid) {
    console.log('Form Data:', this.systemParamsForm.value);
  } else {
    console.log('Form is invalid!');
  }
}
}

