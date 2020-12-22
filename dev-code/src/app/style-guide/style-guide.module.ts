import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import {
    MatListModule, MatSelect, MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { EmxcelSharedModule } from '../shared/emxcel-shared.module';

@NgModule({
  declarations: [ StyleGuideComponent ],
  exports: [
    StyleGuideComponent
  ],
  imports: [
    CommonModule,
    StyleGuideRoutingModule,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
      MatSelectModule,
      EmxcelSharedModule
  ]
})
export class StyleGuideModule { }
