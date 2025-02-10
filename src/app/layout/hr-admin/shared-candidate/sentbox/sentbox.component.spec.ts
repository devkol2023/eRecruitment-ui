import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentboxComponent } from './sentbox.component';

describe('SentboxComponent', () => {
  let component: SentboxComponent;
  let fixture: ComponentFixture<SentboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
