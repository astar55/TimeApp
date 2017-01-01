/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StopwatchServiceService } from './stopwatch-service.service';

describe('StopwatchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopwatchServiceService]
    });
  });

  it('should ...', inject([StopwatchServiceService], (service: StopwatchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
