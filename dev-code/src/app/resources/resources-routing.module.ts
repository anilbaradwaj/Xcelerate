import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'downloads'
  },
  {
    path: 'downloads',
    loadChildren: () => import('../downloads/downloads.module').then(m => m.DownloadsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
