import { TestBed } from '@angular/core/testing';

import { AllDialogService } from './all-dialog.service';

describe('AllDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllDialogService = TestBed.get(AllDialogService);
    expect(service).toBeTruthy();
  });
});
