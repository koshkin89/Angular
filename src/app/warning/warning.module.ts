import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning.component';



@NgModule({
  declarations: [
    WarningComponent
  ],
  exports: [WarningComponent],
  imports: [
    CommonModule
  ]
})
export class WarningModule { }
