import { TestBed } from '@angular/core/testing';

import { HttpSensorsService } from './http-sensors.service';

describe('HttpSensorsService', () => {
  let service: HttpSensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
