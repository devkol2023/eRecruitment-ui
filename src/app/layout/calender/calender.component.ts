import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { Router } from '@angular/router';
// import { CommonService } from '../../shared/service/common.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface CalendarEvent {
  title: string;
  start: Date | string;
  end: Date | string;
  editable: boolean;
}

@Component({
  selector: 'app-calender',
  standalone: false,
  
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {
  // dialogRef!: MatDialogRef<TrainingFeedbackComponent>;
  constructor(private router:Router,private dialog: MatDialog){}

  events = [
    {
      title: 'Employee Benefits & Policies Session',
      start: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(11, 30),
      end: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 30),
      location: 'HR Conference Room',
      description: 'Detailed discussion on employee benefits, leave policies, and compliance rules.',
      attendees: ['HR Representatives', 'Employees'],
      editable: true,
      previous: false
    },
    // Interviews happening on the same day
    {
      title: 'Final Round Interview - Loan Officer',
      start: new Date(new Date().setHours(10, 0)),  
      end: new Date(new Date().setHours(11, 30)),  
      location: 'Interview Room 101',
      description: 'Final interview round for the Loan Officer position.',
      attendees: ['HR Manager', 'Finance Team', 'Candidate'],
      editable: true,
      previous: false  
    },
    {
      title: 'Final Round Interview - Customer Service Representative',
      start: new Date(new Date().setHours(10, 0)),  
      end: new Date(new Date().setHours(11, 30)),  
      location: 'Interview Room 102',
      description: 'Final interview round for the Customer Service Representative role.',
      attendees: ['HR Manager', 'Branch Head', 'Candidate'],
      editable: true,
      previous: false  
    },
    // Previous HR & Interview events
    {
      title: 'Candidate Screening - Teller Positions',
      start: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(14, 0),  
      end: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(16, 0),    
      location: 'HR Office A',
      description: 'Initial screening of candidates for Teller positions.',
      attendees: ['HR Officers', 'Recruitment Team'],
      editable: true,
      previous: true
    },
    {
      title: 'Salary Negotiation Meeting',
      start: new Date(new Date().setDate(new Date().getDate() - 1)).setHours(16, 0),  
      end: new Date(new Date().setDate(new Date().getDate() - 1)).setHours(17, 30),   
      location: 'Executive Boardroom',
      description: 'Discussion on salary package and benefits for new hires.',
      attendees: ['HR Manager', 'Finance Team', 'Selected Candidates'],
      editable: true,
      previous: true
    },
    {
      title: 'Banking Talent Hunt',
      start: new Date(new Date().setDate(new Date().getDate() + 5)).setHours(10, 0),  
      end: new Date(new Date().setDate(new Date().getDate() + 5)).setHours(12, 0),   
      location: 'Main Auditorium',
      description: 'Talent acquisition drive for banking professionals.',
      attendees: ['HR Team', 'Department Heads', 'Job Applicants'],
      editable: true,
      previous: false
    },
    // Another set of interviews on the same day
    {
      title: 'Panel Interview - Relationship Manager',
      start: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(15, 0),  
      end: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(16, 30),  
      location: 'Interview Room 105',
      description: 'Interview for Relationship Manager role.',
      attendees: ['HR Manager', 'Senior Managers', 'Candidate'],
      editable: true,
      previous: false
    },
    {
      title: 'Panel Interview - Compliance Officer',
      start: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(15, 0),  
      end: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(16, 30),  
      location: 'Interview Room 106',
      description: 'Interview for Compliance Officer role.',
      attendees: ['Legal Advisors', 'HR Team', 'Candidate'],
      editable: true,
      previous: false
    },
  ];  
  
  showPopup = false;
  popupTitle: string | null = null;
  popupDate: string | null = null;
  popupTime: string | null = null;
  popupDuration: string | null = null;
  popupLocation: string | null = null;
  popupOrganizer: string | null = null;
  popupCategory: string | null = null;
  popupDescription: string | null = null;
  popupAttendees: string[] | null = null;
  isPrevious: boolean = false;


  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin] // Plugins for month and week views
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Ensure this matches the plugins
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], // Use the plugins array
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    selectable: true,
    events: this.events,    
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },  
    eventClick: this.handleEventClick.bind(this),
    eventContent: (eventInfo: any) => {
      const start = new Date(eventInfo?.event?.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const end = new Date(eventInfo?.event?.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return {
        html: `
          <div class="event-tooltip">
            <b>${eventInfo.event.title}</b>
            <div>${start} - ${end}</div>
          </div>
        `
      };
    }
  };
  headerToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }; 
  

  handleEventClick(arg: any): void {
    // this.popupTitle = arg.event.title;
    // this.popupDate = arg.event.start.toISOString().split('T')[0];
    // this.popupTime = arg.event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // this.popupDuration = arg.event.extendedProps.duration || null;
    // this.popupLocation = arg.event.extendedProps.location || null;
    // this.popupOrganizer = arg.event.extendedProps.organizer || null;
    // this.popupCategory = arg.event.extendedProps.category || null;
    // this.popupDescription = arg.event.extendedProps.description || null;
    // this.popupAttendees = arg.event.extendedProps.attendees || null;
    // this.isPrevious = arg.event.extendedProps.previous || false;
    // this.showPopup = true;
  }

  handleEventDrop(arg: any): void {
    console.log('Event moved:', arg.event);
  }

  handleEventResize(arg: any): void {
    console.log('Event resized:', arg.event);
  }

  closePopup(): void {
    this.showPopup = false;
    this.popupTitle = null;
    this.popupDate = null;
    this.popupTime = null;
    this.popupLocation = null;
    this.popupDescription = null;
    this.popupAttendees = null;
  }
  // openFeedback(){
  //   const userRegistrationDetails = this.commonService.userEnterpriseRegistrationDetails;
 
  //   const feedbackData = {
  //     trainingMode: 'Offline',
  //     enterpriseName: userRegistrationDetails?.enterpriseName,
  //     trainingName:this.popupDescription,
  //     status:'Completed',
  //     dueDate:this.popupDate,
  //     dateOfCompletion:this.popupDate,
  //   };
 
  //     this.dialogRef = this.dialog.open(TrainingFeedbackComponent, {
  //       data: feedbackData,
  //       maxWidth: '100%',
  //       // height:'100%',
  //       disableClose: false,
  //       autoFocus: true
  //     });
  // }

  renderEventContent(eventInfo: any) {
    const description = eventInfo.event.extendedProps.description || '';
    return {
      html: `
        <div title="${eventInfo.event.title}: ${description}">
          <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            <strong>${eventInfo.event.title}</strong>
          </div>
          <div style="font-size: 12px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;width:90%">
            ${description}
          </div>
        </div>
      `
    };
  }
  
}
