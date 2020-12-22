import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandGuideLinesComponent } from './brand-guide-lines/brand-guide-lines.component';
import {ControlsComponent} from './controls/controls.component';

import { XdfilesComponent } from './xdfiles/xdfiles.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'xdfiles'
  },
  {
    path: 'xdfiles',
    component: XdfilesComponent
  },
  {
    path: 'brandguidelines',
    component: BrandGuideLinesComponent
  },
  // {
  //   path: 'controls',
  //   component: ControlsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  DownloadsRoutingModule { } 