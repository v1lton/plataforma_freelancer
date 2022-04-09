import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersScreenComponent } from './freelancers-screen.component';

describe('FreelancersScreenComponent', () => {
  let component: FreelancersScreenComponent;
  let fixture: ComponentFixture<FreelancersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancersScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
