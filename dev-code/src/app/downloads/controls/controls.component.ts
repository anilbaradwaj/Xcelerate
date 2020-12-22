import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngt-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  checked = true;

  constructor() { }

  ngOnInit() {
  }

}
