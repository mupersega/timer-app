import { TestBed } from '@angular/core/testing';

import { TimeHelpService } from './timer-help.service';

describe('TimerHelpService', () => {
  let service: TimeHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
