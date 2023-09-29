import { TestBed } from '@angular/core/testing';

import { ScriptsCargaService } from './scripts-carga.service';

describe('ScriptsCargaService', () => {
  let service: ScriptsCargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptsCargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
