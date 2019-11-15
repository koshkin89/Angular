import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';

import { DescriptionComponent } from './child.success/description/description.component';




@NgModule({
  declarations: [
    SuccessComponent,
    DescriptionComponent
  ],
  exports: [SuccessComponent],
  imports: [
    CommonModule
  ]
})
export class SuccessModule { }
