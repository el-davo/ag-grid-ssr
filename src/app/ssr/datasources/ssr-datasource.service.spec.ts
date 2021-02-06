import { TestBed } from '@angular/core/testing';

import { SsrDatasourceService } from './ssr-datasource.service';

describe('SsrDatasourceService', () => {
  let service: SsrDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsrDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
