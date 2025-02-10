import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: false,
  
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.scss'
})
export class CandidateDashboardComponent implements AfterViewInit {
jobData:any;

  constructor(private dialog: MatDialog) { }

  ngAfterViewInit(): void {
  }
  recieveJobData(event:any){
    this.jobData = event;
  }
}
