import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../shared/models/nav-item.model';

@Component({
  selector: 'ngt-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  selectedItem :NavItem;
  selected: any;
  
  navItems: NavItem[] = [ 
    {
      displayName: 'App bars:top',
      route: '/style-guide/components/app-bars-top'
    },
    {
      displayName: 'App bars:bottom',
      route: '/style-guide/components/app-bars-bottom'
    },
    {
        displayName: 'Typography',
        route: '/style-guide/components/typeography'
    },
    {
      displayName: 'Buttons',
      route: '/style-guide/components/buttons',
    },
    {
      displayName: 'Radio / Check boxes',
      route: '/style-guide/components/controls'
    },
    {
      displayName: 'Dropdowns',
      route: '/style-guide/components/dropdowns'
    },
    {
      displayName: 'Tables',
      route: '/style-guide/components/tables'
    },
    {
      displayName: 'Text fileds',
      route: '/style-guide/components/search'
    },
    {
      displayName: 'Side Menu',
      route: '/style-guide/components/menu'
    },
  ];

  constructor() { }

  ngOnInit() {

  }

  onSelect(item: NavItem): void {
    this.selectedItem = item;
  }

}

