import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu-service.service';

describe('MenuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
