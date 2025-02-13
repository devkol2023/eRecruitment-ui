import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-management',
  standalone: false,
  
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.scss'
})
export class RoleManagementComponent implements OnInit{
  userForm!:FormGroup;
  titles: string[] = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.']; 
  roles: string[] = ['Admin', 'Manager', 'User'];
  tableColumns = [
    { key: 'roleName', label: 'Role Name', width: '10%' },
    // { key: 'email', label: 'Email', width: '10%' },
    // { key: 'mobile', label: 'Mobile', width: '10%' },
    { key: 'roleDesc', label: 'Role Description', width: '20%' },
    { key: 'toggle', label: 'Action', width: '10%' },
    // { key: 'action', label: 'Action', width: '10%' },
  ];  

tableData = [
  {
    roleName: 'DCIC',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleDesc: 'District Commerce and Industries Centre',
    toggle: true,
    // action: ''
  },
  {
    roleName: 'DCI',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleDesc: 'Directorate of Commerce and Industries',
    toggle: true,
    // action: ''
  },
  {
    roleName: 'DEPTCI',
    // email: 'pynshngainnongsiej@gmail.com',
    // mobile: '9012345667',
    roleDesc: 'Department of Commerce and Industries',
    toggle: true,
    // action: ''
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
  this.userForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    roleName: ['', Validators.required],
})
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
}
