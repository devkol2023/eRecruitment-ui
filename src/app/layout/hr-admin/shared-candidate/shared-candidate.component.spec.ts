import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCandidateComponent } from './shared-candidate.component';

describe('SharedCandidateComponent', () => {
  let component: SharedCandidateComponent;
  let fixture: ComponentFixture<SharedCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
