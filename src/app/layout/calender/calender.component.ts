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
      title: 'Vendor Workshop',
      start: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(10, 0), // Tomorrow at 10:00 AM
      end: new Date(new Date().setDate(new Date().getDate() + 3)).setHours(12, 0),   // Ends in 3 days at 12:00 PM
      location: 'Training Hall 3A',
      description: 'Workshop between MSME vendors and corporate buyers.',
      attendees: ['Vendors', 'Corporate Buyers'],
      editable: true,
      previous: false
    },
    {
      title: 'Finance Meeting',
      start: new Date(new Date().setHours(9, 0)),  // Today at 9:00 AM
      end: new Date(new Date().setHours(10, 30)),  // Ends at 10:30 AM
      location: 'Conference Room 101',
      description: 'Discuss loan assistance and financial aid for MSMEs.',
      attendees: ['Bank Representatives', 'MSME Owners'],
      editable: true,
      previous: false  // Set to false because it's happening today
    },
    {
      title: 'Digital Session',
      start: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(14, 0),  // Day before yesterday at 2:00 PM
      end: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(16, 0),    // Ends at 4:00 PM
      location: 'Tech Lab A',
      description: 'Training session for MSME growth.',
      attendees: ['Marketing Experts', 'MSME Clients'],
      editable: true,
      previous: true
    },
    {
      title: 'Compliance Training',
      start: new Date(new Date().setDate(new Date().getDate() + 3)).setHours(15, 0), // Starts in 3 days at 3:00 PM
      end: new Date(new Date().setDate(new Date().getDate() + 5)).setHours(17, 0),   // Ends in 5 days at 5:00 PM
      location: 'Room 305',
      description: 'Mandatory training for MSME operations.',
      attendees: ['Legal Advisors', 'MSME Owners'],
      editable: true,
      previous: false
    },
    {
      title: 'Leadership Meet',
      start: new Date(new Date().setDate(new Date().getDate() - 1)).setHours(18, 0), // Tomorrow at 6:00 PM
      end: new Date(new Date().setDate(new Date().getDate() - 1)).setHours(20, 0),   // Ends at 8:00 PM
      location: 'Conference Room C',
      description: 'Leadership discussion on scaling MSME businesses.',
      attendees: ['Industry Leaders', 'Entrepreneurs'],
      editable: true,
      previous: true
    },
    {
      title: 'Biz Expansion',
      start: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(11, 0), // Starts in 7 days at 11:00 AM
      end: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(13, 0),   // Ends at 1:00 PM
      location: 'Boardroom B',
      description: 'Strategizing business expansion for MSME sectors.',
      attendees: ['Alice', 'Bob', 'Charlie'],
      editable: true,
      previous: false
    }
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
          <div>
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
    this.popupTitle = arg.event.title;
    this.popupDate = arg.event.start.toISOString().split('T')[0];
    this.popupTime = arg.event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.popupDuration = arg.event.extendedProps.duration || null;
    this.popupLocation = arg.event.extendedProps.location || null;
    this.popupOrganizer = arg.event.extendedProps.organizer || null;
    this.popupCategory = arg.event.extendedProps.category || null;
    this.popupDescription = arg.event.extendedProps.description || null;
    this.popupAttendees = arg.event.extendedProps.attendees || null;
    this.isPrevious = arg.event.extendedProps.previous || false;
    this.showPopup = true;
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
