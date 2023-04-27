import { TestBed } from '@angular/core/testing';

import { RequirementListService } from './requirement-list.service';

describe('RequirementListService', () => {
  let service: RequirementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
