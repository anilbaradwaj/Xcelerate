import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonsComponent} from './buttons/buttons.component';
import {ControlsComponent} from './controls/controls.component';
import {DropdownsComponent} from './dropdowns/dropdowns.component';
import {TablesComponent} from './tables/tables.component';
import {SearchComponent} from './search/search.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {FormsComponent} from './forms/forms.component';
import {ModulesComponent} from './modules/modules.component';
import {IconsComponent} from './icons/icons.component';
import {TypeographyComponent} from './typeography/typeography.component';
import {HiearchyComponent} from './hiearchy/hiearchy.component';
import {MenuComponent} from './menu/menu.component';
import { AppBarsTopComponent } from './app-bars-top/app-bars-top.component';
import { AppBarsBottomComponent } from './app-bars-bottom/app-bars-bottom.component';

const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'typeography'
  },
  {
    path: 'app-bars-top',
    component: AppBarsTopComponent
  },
  {
    path: 'app-bars-bottom',
    component: AppBarsBottomComponent
  },
  {
    path: 'typeography',
    component: TypeographyComponent
  },
    {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'controls',
    component: ControlsComponent
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'date-picker',
    component: DatePickerComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  }, {
    path: 'heirarchy',
    component: HiearchyComponent
  }, {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
