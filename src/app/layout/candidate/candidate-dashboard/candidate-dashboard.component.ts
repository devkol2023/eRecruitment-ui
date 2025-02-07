import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: false,
  
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.scss'
})
export class CandidateDashboardComponent {
jobData:any;

  recieveJobData(event:any){
    console.log(event);
    this.jobData = event;
  }
}
