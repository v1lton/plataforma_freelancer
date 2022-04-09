import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackScreenComponent } from './feedback-screen.component';

describe('FeedbackScreenComponent', () => {
  let component: FeedbackScreenComponent;
  let fixture: ComponentFixture<FeedbackScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
