import { TestBed } from '@angular/core/testing';

import {  RecruitmentCookieService } from './cookie.service';

xdescribe('CookieService', () => {
  let service: RecruitmentCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
