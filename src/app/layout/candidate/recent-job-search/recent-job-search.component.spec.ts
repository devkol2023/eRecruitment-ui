import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobSearchComponent } from './recent-job-search.component';

describe('RecentJobSearchComponent', () => {
  let component: RecentJobSearchComponent;
  let fixture: ComponentFixture<RecentJobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentJobSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
