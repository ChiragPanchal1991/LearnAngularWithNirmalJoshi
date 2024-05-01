import { TestBed } from '@angular/core/testing';

import { CCounterService } from './c-counter.service';

describe('CCounterService', () => {
  let service: CCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
