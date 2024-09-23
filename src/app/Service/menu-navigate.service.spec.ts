import { TestBed } from '@angular/core/testing';

import { MenuNavigateService } from './menu-navigate.service';

describe('MenuNavigateService', () => {
  let service: MenuNavigateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNavigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
