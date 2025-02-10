import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardCandidatesModalComponent } from './forward-candidates-modal.component';

describe('ForwardCandidatesModalComponent', () => {
  let component: ForwardCandidatesModalComponent;
  let fixture: ComponentFixture<ForwardCandidatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForwardCandidatesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardCandidatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
