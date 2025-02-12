import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() searchNavigate !: boolean;
  @Output() customEvent = new EventEmitter<boolean>();

  locations = [
    { value: 'bd', label: 'Location BD' },
    { value: 'us', label: 'Location US' },
    { value: 'uk', label: 'Location UK' },
  ];

  constructor(private router : Router){
    console.log(this.searchNavigate);
    
  }

  search(){
    this.customEvent.emit(true);
  }


}
