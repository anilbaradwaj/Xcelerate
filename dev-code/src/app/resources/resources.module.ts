import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources/resources.component';
import {
    MatListModule, MatSelect, MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { EmxcelSharedModule } from '../shared/emxcel-shared.module';

@NgModule({
  declarations: [ ResourcesComponent ],
  exports: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
      MatSelectModule,
      EmxcelSharedModule
  ]
})
export class ResourcesModule { }
