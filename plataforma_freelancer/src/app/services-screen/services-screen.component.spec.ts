import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesScreenComponent } from './services-screen.component';

describe('ServicesScreenComponent', () => {
  let component: ServicesScreenComponent;
  let fixture: ComponentFixture<ServicesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
