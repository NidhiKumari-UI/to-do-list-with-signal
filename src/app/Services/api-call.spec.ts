import { TestBed } from '@angular/core/testing';

import { ApiCall } from './api-call';

describe('ApiCall', () => {
  let service: ApiCall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
