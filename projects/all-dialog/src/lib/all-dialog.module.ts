import { NgModule } from '@angular/core';
import { AllDialogComponent } from './all-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [AllDialogComponent, ConfirmDialogComponent],
  imports: [],
  exports: [AllDialogComponent]
})
export class AllDialogModule {}
