import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InterviewFeedbackModalComponent } from '../interview-feedback-modal/interview-feedback-modal.component';
import { CandidateDetailsModalComponent } from '../../../shared/modal/candidate-details-modal/candidate-details-modal.component';

@Component({
  selector: 'app-scheduled-interviews',
  standalone: false,
  
  templateUrl: './scheduled-interviews.component.html',
  styleUrl: './scheduled-interviews.component.scss'
})
export class ScheduledInterviewsComponent {
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'jobTitle', label: 'Job Title', width: '20%' },
    { key: 'skills', label: 'Skills', width: '20%' },
    { key: 'interviewDate', label: 'Date & Time', width: '20%' },
    { key: 'status', label: 'Status', width: '10%' },
    { key: 'actions', label: 'Actions', width: '10%', type: 'action', types: { viewDetails: true, joinInterview: true, feedback: true } }
  ];
  
  scheduledInterviews = [
    {
      id: 'I001',
      candidateName: 'John Doe',
      jobTitle: 'Software Engineer',
      skills: 'JavaScript, TypeScript, Angular',
      interviewDate: '2024-02-15 at 10:00 AM',
      status: 'Completed'
    },
    {
      id: 'I002',
      candidateName: 'Jane Smith',
      jobTitle: 'Data Analyst',
      skills: 'Python, SQL, Tableau',
      interviewDate: '2024-02-20 at 2:00 PM',
      status: 'Ongoing'
    },
    {
      id: 'I003',
      candidateName: 'Michael Brown',
      jobTitle: 'Marketing Specialist',
      skills: 'SEO, Content Marketing, Google Analytics',
      interviewDate: '2024-02-25 at 1:00 PM',
      status: 'Upcoming'
    }
  ];

  paginationConfig = {
    id: 'interview_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.scheduledInterviews.length
  };

  constructor(private dialog: MatDialog) { }

  joinInterview(interview: any): void {
    alert(`Joining interview for ${interview.candidateName}`);
  }

  openFeedbackModal(interview: any): void {
    const dialogRef = this.dialog.open(InterviewFeedbackModalComponent, {
      // width: '500px',
      data: interview,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert(`Feedback submitted for ${interview.candidateName}`);
      }
    });
  }

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '60%',
      data: candidate
    });
  }
}
