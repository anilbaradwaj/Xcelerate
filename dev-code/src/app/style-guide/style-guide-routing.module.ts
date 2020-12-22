import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components'
  },
  {
    path: 'components',
    loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleGuideRoutingModule { }
