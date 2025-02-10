import { AfterViewInit, Component } from '@angular/core';
import { ProfileUpdateReminderModalComponent } from '../../../shared/modal/profile-update-reminder-modal/profile-update-reminder-modal.component';
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
    setTimeout(() => {
      this.dialog.open(ProfileUpdateReminderModalComponent, {
        width: '60%',
        disableClose: true
      });
    }, 1000);
  }
  recieveJobData(event:any){
    this.jobData = event;
  }
}
