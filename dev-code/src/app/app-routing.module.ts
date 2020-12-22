import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide/style-guide.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { HomeComponent } from './home/home.component';
import { AppBarsTopComponent } from './components/app-bars-top/app-bars-top.component';
import { AppBarsBottomComponent } from './components/app-bars-bottom/app-bars-bottom.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'style-guide',
    component: StyleGuideComponent,
    loadChildren: './style-guide/style-guide.module#StyleGuideModule',
    // loadChildren: () => import('./style-guide/style-guide.module').then(m => m.StyleGuideModule),
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    loadChildren: './resources/resources.module#ResourcesModule',
    // loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
  },
];

// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' });

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }