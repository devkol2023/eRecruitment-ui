import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSentOfferListComponent } from './view-sent-offer-list.component';

describe('ViewSentOfferListComponent', () => {
  let component: ViewSentOfferListComponent;
  let fixture: ComponentFixture<ViewSentOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSentOfferListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSentOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
