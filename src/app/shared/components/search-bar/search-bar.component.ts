import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  locations = [
    { value: 'bd', label: 'Location BD' },
    { value: 'us', label: 'Location US' },
    { value: 'uk', label: 'Location UK' },
  ];
}
