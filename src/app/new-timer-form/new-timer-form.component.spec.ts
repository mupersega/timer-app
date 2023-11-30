import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimerFormComponent } from './new-timer-form.component';

describe('NewTimerFormComponent', () => {
  let component: NewTimerFormComponent;
  let fixture: ComponentFixture<NewTimerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTimerFormComponent]
    });
    fixture = TestBed.createComponent(NewTimerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
