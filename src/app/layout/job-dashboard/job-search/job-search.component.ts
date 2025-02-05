import { Component } from '@angular/core';

@Component({
  selector: 'app-job-search',
  standalone: false,
  
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent {
  locations = [
    { value: 'bd', label: 'Location BD' },
    { value: 'us', label: 'Location US' },
    { value: 'uk', label: 'Location UK' },
  ];
}
