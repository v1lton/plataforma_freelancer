import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceScreenComponent } from './create-service-screen.component';

describe('CreateServiceScreenComponent', () => {
  let component: CreateServiceScreenComponent;
  let fixture: ComponentFixture<CreateServiceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServiceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
