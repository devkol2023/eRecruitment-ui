import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobDetailsModalComponent } from './view-job-details-modal.component';

describe('ViewJobDetailsModalComponent', () => {
  let component: ViewJobDetailsModalComponent;
  let fixture: ComponentFixture<ViewJobDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewJobDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
