import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationsRoutingModule } from './foundations-routing.module';
import { FoundationsComponent } from './foundations/foundations.component';


@NgModule({
  declarations: [FoundationsComponent],
  imports: [
    CommonModule,
    FoundationsRoutingModule
  ]
})
export class FoundationsModule { }
