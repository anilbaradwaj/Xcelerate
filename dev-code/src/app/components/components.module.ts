import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ControlsComponent } from './controls/controls.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TablesComponent } from './tables/tables.component';
import { SearchComponent } from './search/search.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsComponent } from './forms/forms.component';
import { ModulesComponent } from './modules/modules.component';
import { IconsComponent } from './icons/icons.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
    MatTreeModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeographyComponent } from './typeography/typeography.component';
import { HiearchyComponent } from './hiearchy/hiearchy.component';
import {EmxcelSharedModule} from '../shared/emxcel-shared.module';
import { MenuComponent } from './menu/menu.component';
import { AppBarsTopComponent } from './app-bars-top/app-bars-top.component';
import { AppBarsBottomComponent } from './app-bars-bottom/app-bars-bottom.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    ControlsComponent,
    DropdownsComponent,
    TablesComponent,
    SearchComponent,
    DatePickerComponent,
    FormsComponent,
    ModulesComponent,
    IconsComponent,
    TypeographyComponent,
      HiearchyComponent,
      MenuComponent,
      AppBarsTopComponent,
      AppBarsBottomComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
      MatTreeModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    EmxcelSharedModule
  ]
})
export class ComponentsModule { }
