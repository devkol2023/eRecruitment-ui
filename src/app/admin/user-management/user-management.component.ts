import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: false,
  
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  userForm!: FormGroup;
  titles: string[] = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
  roles: string[] = ['DCIC', 'DCI', 'DEPTCI'];
  usersDetails: any[] = [];
  districtList:any[]=[];
  tableColumns = [
    { key: 'name', label: 'Name', width: '10%' },
    { key: 'roleName', label: 'Role', width: '20%' },
    { key: 'userName', label: 'User Name', width: '20%' },
    { key: 'mobileNo', label: 'Mobile', width: '10%' },
    { key: 'verified', label: 'Status', width: '12%' },
    { key: 'toggle', label: 'Action', width: '8%' },
  ];

  states = [
    { name: 'State 1', districts: ['District A', 'District B', 'District C'] },
    { name: 'State 2', districts: ['District D', 'District E', 'District F'] }
  ];
  
  districts: string[] = [];
  tableData: any[] = [];

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.tableData.length,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      // role: ['', Validators.required],
      // geograph: ['', Validators.required],  // State or Central
      // district: [''], // District selection
      // startDate: ['', Validators.required],
      // endDate: ['', Validators.required],
      userEntries: this.fb.array([this.createUserEntry()])
    });

    this.subscribeToGeographChanges();
    // this.getUsersDetails();
    // this.getAllDistrict();
  }

  subscribeToGeographChanges(): void {
    this.userEntries.controls.forEach((entry, index) => {
      entry.get('geograph')?.valueChanges.subscribe((selectedOption) => {
        if (selectedOption === 'State') {
          entry.get('district')?.setValidators([Validators.required]);
          entry.patchValue({ district: '' }); // Reset district value
        } else {
          entry.get('district')?.clearValidators();
          entry.patchValue({ district: '' }); // Clear district
        }
        entry.get('district')?.updateValueAndValidity();
      });
    });
  }
  

  createUserEntry(): FormGroup {
    return this.fb.group({
      role: ['', Validators.required],
      geograph: ['', Validators.required], // State or Central
      district: [''], // District selection
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }
  addNewRow(): void {
    this.userEntries.push(this.createUserEntry());
  }

  removeRow(index: number): void {
    if (this.userEntries.length > 1) {
      this.userEntries.removeAt(index);
    }
  }

  get userEntries(): FormArray {
    return this.userForm.get('userEntries') as FormArray;
  }

  // getAllDistrict(): void {
  //   this.registrationService
  //     .getAllDistrict({ stateId: 1 })
  //     .subscribe((resp:any) => {
  //       if (resp?.status === '1') {
  //         this.districtList = resp.responseObject;
  //       }
  //     });
  // }

  // getUsersDetails(): void {
  //   const userDetails = this.commonService.getUserInfo();

  //   const data = {
  //     roleMode: userDetails?.roleMode,
  //     userId: null
  //   };

  //   this.adminService.getUsersManagement(data).subscribe((res: any) => {
  //     console.log(res);
  //     this.tableData = res.responseObject?.map((el: any) => ({
  //       ...el,
  //       verified: 'Verified',
  //       toggle: true
  //     }));
  //     this.paginationConfig.totalItems = this.tableData.length; // Update pagination
  //   });
  // }

  updateDistricts(stateName: string) {
    const selectedState = this.states.find(state => state.name === stateName);
    this.districts = selectedState ? selectedState.districts : [];
    this.userForm.get('district')?.setValue(''); // Reset district selection
  }

  updatePage(page: number): void {
    console.log('Page Changed:', page);
    this.paginationConfig.currentPage = page;
  }

  handleSortChange(event: any): void {
    console.log('Sort Event:', event);
  }

  searchTableData(query: string): void {
    console.log('Search Query:', query);
    const filteredData = this.tableData.filter((row) =>
      Object.values(row).some((value: any) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    this.tableData = filteredData;
    this.paginationConfig.totalItems = filteredData.length;
  }

  updateItemsPerPage(itemsPerPage: number): void {
    console.log('Items Per Page Changed:', itemsPerPage);
    this.paginationConfig.itemsPerPage = itemsPerPage;
    this.paginationConfig.currentPage = 1;
  }

  onSubmit(){}
}