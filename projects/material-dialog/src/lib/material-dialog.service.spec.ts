import { TestBed } from '@angular/core/testing';

import { MaterialDialogService } from './material-dialog.service';

describe('MaterialDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialDialogService = TestBed.get(MaterialDialogService);
    expect(service).toBeTruthy();
  });
});
