import { TestBed } from '@angular/core/testing';

import { TrafficStatsService } from './traffic-stats.service';

describe('TrafficStatsService', () => {
  let service: TrafficStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
