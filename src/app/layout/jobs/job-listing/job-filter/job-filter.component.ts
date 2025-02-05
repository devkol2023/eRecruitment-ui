import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-filter',
  standalone: false,
  
  templateUrl: './job-filter.component.html',
  styleUrl: './job-filter.component.scss'
})
export class JobFilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm!: FormGroup;

  categories = ['IT', 'Finance', 'Marketing', 'HR'];
  jobTypes = [
    { name: 'Full Time', selected: false },
    { name: 'Part Time', selected: false },
    { name: 'Remote', selected: false },
    { name: 'Freelance', selected: false }
  ];
  locations = ['New York', 'London', 'Athens', 'Toronto'];
  experienceOptions = ['1-3 Years', '3-5 Years', '5+ Years'];
  postedWithinOptions = ['24 Hours', '1 Week', '1 Month'];
  price: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      category: ['all'],
      location: ['anywhere'],
      experience: [''],
      postedWithin: [''],
      price: [0],
      ...this.jobTypes.reduce<Record<string, FormControl>>((controls, _, index) => {
        controls['jobType' + index] = new FormControl(false);
        return controls;
      }, {})
    });
  }
  
  updatePrice(event: any) {
    this.price = event?.target?.value; // Update local variable
    this.filterForm.patchValue({ price: this.price }); // Update FormGroup manually
  }

  applyFilters() {
    console.log('Filters Applied:', this.filterForm.value);
    // Handle filter logic here
  }
}
