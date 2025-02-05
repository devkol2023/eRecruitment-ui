import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
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
  value: number = 0;
  highValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 10000,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      category: ['all'],
      location: ['anywhere'],
      experience: [''],
      postedWithin: [''],
      ...this.jobTypes.reduce<Record<string, FormControl>>((controls, _, index) => {
        controls['jobType' + index] = new FormControl(false);
        return controls;
      }, {})
    });
  }

  applyFilters() {
    console.log('Filters Applied:', this.filterForm.value);
    // Handle filter logic here
  }
}
