import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: false,
  
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.scss'
})
export class CandidateDashboardComponent implements AfterViewInit {
jobData:any;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngAfterViewInit(): void {
  }
  recieveJobData(event:any){
    this.jobData = event;
  }

  navigateSearch(event:any){
    if(event = true){
        this.router.navigateByUrl('/jobs/find-jobs')
    }
  }
}
