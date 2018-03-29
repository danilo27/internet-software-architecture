import { TestBed, inject } from '@angular/core/testing';

import { RekvizitiService } from './rekviziti.service';

describe('RekvizitiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RekvizitiService]
    });
  });

  it('should be created', inject([RekvizitiService], (service: RekvizitiService) => {
    expect(service).toBeTruthy();
  }));
});
