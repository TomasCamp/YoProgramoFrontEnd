import { TestBed } from '@angular/core/testing';

import { AccountHandlingService } from './account-handling.service';

describe('AccountHandlingService', () => {
  let service: AccountHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
