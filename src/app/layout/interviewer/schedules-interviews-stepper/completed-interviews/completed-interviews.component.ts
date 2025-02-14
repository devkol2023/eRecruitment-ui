import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InterviewFeedbackModalComponent } from '../../interview-feedback-modal/interview-feedback-modal.component';
import { CandidateDetailsModalComponent } from '../../../../shared/modal/candidate-details-modal/candidate-details-modal.component';

@Component({
  selector: 'app-completed-interviews',
  standalone: false,
  
  templateUrl: './completed-interviews.component.html',
  styleUrl: './completed-interviews.component.scss'
})
export class CompletedInterviewsComponent {
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '15%' },
    { key: 'jobRefNo', label: 'Job Ref No', width: '12%' },
    { key: 'jobTitle', label: 'Job Title', width: '12%' },
    { key: 'skills', label: 'Skills', width: '15%' },
    { key: 'interviewMode', label: 'Interview Mode', width: '10%' },
    { key: 'interviewDate', label: 'Date & Time', width: '15%' },
    { key: 'status', label: 'Status', width: '10%' },
    { key: 'actions', label: 'Actions', width: '10%', type: 'action', types: { viewDetails: true, feedback: true } }
  ];
  
  scheduledInterviews = [
    {
      id: 'I001',
      candidateName: 'Michael Doe',
      jobTitle: 'Software Engineer',
      skills: 'JavaScript, TypeScript, Angular',
      interviewDate: '2024-02-15 at 10:00 AM',
      status: 'Completed',
      interviewMode: 'Online',
      jobRefNo: 'SE2024-101',
    },
    {
      id: 'I002',
      candidateName: 'John Brown',
      jobTitle: 'Data Analyst',
      skills: 'Python, SQL, Tableau',
      interviewDate: '2024-02-20 at 2:00 PM',
      status: 'Completed',
      interviewMode: 'Online',
      jobRefNo: 'DA2024-102',
    },
    {
      id: 'I003',
      candidateName: 'Jane Smith',
      jobTitle: 'Marketing Specialist',
      skills: 'SEO, Content Marketing, Google Analytics',
      interviewDate: '2024-02-25 at 1:00 PM',
      status: 'Completed',
      interviewMode: 'Offline',
      jobRefNo: 'MS2024-103',
    }
  ];

  paginationConfig = {
    id: 'interview_table',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.scheduledInterviews.length
  };

  constructor(private dialog: MatDialog) { }

  openFeedbackModal(interview: any): void {
    const dialogRef = this.dialog.open(InterviewFeedbackModalComponent, {
      width: '50%',
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
      width: '50%',
      data: candidate
    });
  }
}
