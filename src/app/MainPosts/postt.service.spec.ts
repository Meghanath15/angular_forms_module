import { TestBed } from '@angular/core/testing';

import { PosttService } from './postt.service';

describe('PosttService', () => {
    let service: PosttService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(PosttService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });