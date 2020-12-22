import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {HeirarchyTreeData} from '../../models/heirarchy-tree-data';

/**
 * @title Tree with nested nodes
 */
@Component({
    selector: 'app-rep-hierarchy-tree',
    templateUrl: './rep-hierarchy-tree.component.html',
    styleUrls: ['./rep-hierarchy-tree.component.scss']
})
export class RepHierarchyTreeComponent {
    /**
     * Apply the geography to the tree data source
     */
    @Input()
    set geography(geography: HeirarchyTreeData[]) {
        if (geography) {
            this.dataSource.data = geography;
        } else {
            this.dataSource.data = [];
        }
    }

    treeControl = new NestedTreeControl<HeirarchyTreeData>(node => node.children);
    dataSource = new MatTreeNestedDataSource<HeirarchyTreeData>();

    constructor() {
    }

      hasChild(_: number, node: HeirarchyTreeData) {
          return !!node.children && node.children.length > 0;
      }



}
