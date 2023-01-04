import { TestBed } from '@angular/core/testing';

import { OptionsHandlingService } from './options-handling.service';

describe('OptionHandlingService', () => {
  let service: OptionsHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
