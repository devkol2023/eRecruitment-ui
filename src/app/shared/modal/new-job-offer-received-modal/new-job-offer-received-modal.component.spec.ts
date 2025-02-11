import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobOfferReceivedModalComponent } from './new-job-offer-received-modal.component';

describe('NewJobOfferReceivedModalComponent', () => {
  let component: NewJobOfferReceivedModalComponent;
  let fixture: ComponentFixture<NewJobOfferReceivedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewJobOfferReceivedModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJobOfferReceivedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
