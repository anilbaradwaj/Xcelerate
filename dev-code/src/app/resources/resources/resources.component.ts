import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../shared/models/nav-item.model';

@Component({
  selector: 'ngt-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  navItems: NavItem[] = [
      {
          displayName: 'Brand GuideLines',
          route: '/resources/downloads/brandguidelines'
      },
      {
        displayName: 'Adobe XD Files',
        route: '/resources/downloads/xdfiles',
      }
  ];

  constructor() { }

  ngOnInit() {
  }
}

