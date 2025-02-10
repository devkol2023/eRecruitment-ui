import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateReminderModalComponent } from './profile-update-reminder-modal.component';

describe('ProfileUpdateReminderModalComponent', () => {
  let component: ProfileUpdateReminderModalComponent;
  let fixture: ComponentFixture<ProfileUpdateReminderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileUpdateReminderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUpdateReminderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
