import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  standalone: false,
  
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent {
  constructor(private router : Router){}

  navigateSearch(event:any){
    if(event = true){
        this.router.navigateByUrl('/jobs/find-jobs')
    }
  }
}
