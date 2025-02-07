import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-schedule-interview',
  standalone: false,
  
  templateUrl: './schedule-interview.component.html',
  styleUrl: './schedule-interview.component.scss'
})
export class ScheduleInterviewComponent implements OnInit {
  interviewForm: FormGroup;
  panelMembersList = [
    'John HR', 'Mary Tech Lead', 'Steve Manager', 'Emma Consultant', 'David Architect'
  ];
  filteredPanelMembers: string[] = [];
  selectedPanelMembers: string[] = [];

  interviewModes = ['Online', 'Offline'];
  isMemberSelected: boolean = true;
  matcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder) {
    this.interviewForm = this.fb.group({
      candidate: [{ value: '', disabled: true }, Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      mode: ['', Validators.required],
      panelMembers: [[], Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    // if (this.selectedCandidate) {
    //   this.interviewForm.patchValue({
    //     candidate: this.selectedCandidate.name
    //   });
    // }

    this.filteredPanelMembers = this.panelMembersList;
  }

  filterPanelMembers(event: any): void {
    const query = event?.target?.value.toLowerCase();
    this.filteredPanelMembers = this.panelMembersList.filter(member =>
      member.toLowerCase().includes(query)
    );
  }

  removePanelMember(member: string): void {
    this.selectedPanelMembers = this.selectedPanelMembers.filter(m => m !== member);
    this.interviewForm.get('panelMembers')?.setValue(this.selectedPanelMembers);
    this.interviewForm.get('panelMembers')?.updateValueAndValidity();
  }

  selectPanelMember(event: any,): void {
    const value = event.option.viewValue;

    if (value && !this.selectedPanelMembers.includes(value)) {
      this.selectedPanelMembers.push(value);
      this.interviewForm.get('panelMembers')?.setValue(this.selectedPanelMembers);
    }
    const input = document.getElementById('panelMemberInput') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
    this.filterPanelMembers({target: {value: ''}});
    this.interviewForm.get('panelMembers')?.updateValueAndValidity();
    this.isMemberSelected = true;
    if (this.selectedPanelMembers.length === 0) {
      this.isMemberSelected = false;
    }
  }

  onSubmit(): void {
    this.isMemberSelected = true;
    if (this.interviewForm.valid) {
      const formData = {
        ...this.interviewForm.getRawValue(),
        candidate: ''
      };
      console.log('Interview Scheduled:', formData);
      alert('Interview Scheduled Successfully!');
      this.interviewForm.reset();
      this.interviewForm.markAsPristine();
      this.interviewForm.markAsUntouched();
      this.interviewForm.updateValueAndValidity();
      this.selectedPanelMembers = [];
      this.filteredPanelMembers = [...this.panelMembersList];
    } else {
      this.interviewForm.markAllAsTouched();
      if (this.selectedPanelMembers.length === 0) {
        this.isMemberSelected = false;
      }
    }
  }
}
