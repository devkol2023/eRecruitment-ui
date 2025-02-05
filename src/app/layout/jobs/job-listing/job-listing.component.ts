import { Component } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  standalone: false,
  
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent {
  currentFilters = {};

  updateFilters(filters: any) {
    this.currentFilters = filters;
  }
}
