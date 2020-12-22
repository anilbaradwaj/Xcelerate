import { Component, OnInit } from '@angular/core';
import {HIERARCHY_TEST_DATA_LIMITED} from '../../shared/components/rep-hierarchy-tree/heirarchy-test-data';

@Component({
  selector: 'ngt-hiearchy',
  templateUrl: './hiearchy.component.html',
  styleUrls: ['./hiearchy.component.scss']
})
export class HiearchyComponent implements OnInit {

  constructor() { }

  testGeography = HIERARCHY_TEST_DATA_LIMITED;

  ngOnInit() {


  }

}
