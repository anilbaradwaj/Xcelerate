import { NgModule } from '@angular/core';
import { NavListItemComponent } from './components/nav-list-item/nav-list-item.component';
import {MatListModule, MatTreeModule} from '@angular/material';
import {RepHierarchyTreeComponent} from './components/rep-hierarchy-tree/rep-hierarchy-tree.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        MatListModule,
        MatTreeModule,
        CommonModule
    ],
    declarations: [
      NavListItemComponent,
        RepHierarchyTreeComponent
        
    ],
    providers: [
    ],
    exports: [
      NavListItemComponent,
        RepHierarchyTreeComponent
    ]
})
export class EmxcelSharedModule {
}
