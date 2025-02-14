import { Component } from '@angular/core';
import { CandidateDetailsModalComponent } from '../../../../shared/modal/candidate-details-modal/candidate-details-modal.component';
import { InterviewFeedbackModalComponent } from '../../interview-feedback-modal/interview-feedback-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upcoming-interviews',
  standalone: false,
  
  templateUrl: './upcoming-interviews.component.html',
  styleUrl: './upcoming-interviews.component.scss'
})
export class UpcomingInterviewsComponent {
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '15%' },
    { key: 'jobRefNo', label: 'Job Ref No', width: '12%' },
    { key: 'jobTitle', label: 'Job Title', width: '15%' },
    { key: 'skills', label: 'Skills', width: '15%' },
    { key: 'interviewMode', label: 'Interview Mode', width: '10%' },
    { key: 'interviewDate', label: 'Date & Time', width: '12%' },
    { key: 'status', label: 'Status', width: '10%' },
    { key: 'actions', label: 'Actions', width: '10%', type: 'action', types: { viewDetails: true, joinInterview: true } }
  ];
  
  scheduledInterviews = [
    {
      id: 'I001',
      candidateName: 'John Doe',
      jobTitle: 'Software Engineer',
      skills: 'JavaScript, TypeScript, Angular',
      interviewDate: '2024-02-15 at 10:00 AM',
      status: 'Ongoing',
      interviewMode: 'Online',
      jobRefNo: 'SE2024-101',
      actions: { },
    },
    {
      id: 'I002',
      candidateName: 'Jane Smith',
      jobTitle: 'Data Analyst',
      skills: 'Python, SQL, Tableau',
      interviewDate: '2024-02-20 at 2:00 PM',
      status: 'Upcoming',
      interviewMode: 'Offline',
      jobRefNo: 'DA2024-102',
      actions: { location: true },
    },
    {
      id: 'I003',
      candidateName: 'Michael Brown',
      jobTitle: 'Marketing Specialist',
      skills: 'SEO, Content Marketing, Google Analytics',
      interviewDate: '2024-02-25 at 1:00 PM',
      status: 'Upcoming',
      interviewMode: 'Offline',
      jobRefNo: 'MS2024-103',
      actions: { location: true },
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

  viewDetails(candidate: any): void {
    this.dialog.open(CandidateDetailsModalComponent, {
      width: '60%',
      data: candidate
    });
  }
}
