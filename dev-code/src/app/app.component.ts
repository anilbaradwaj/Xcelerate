import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngTheming';
  // component = false;
  // resource = false;
  // home = true;

  constructor() { }

  ngOnInit() {
  }

  // componentspage(){
  //   this.component = true;
  //   this.resource = false;
  //   this.home = false;
  // }

  // resources(){
  //   this.component = false;
  //   this.resource = true;
  //   this.home = false;
  // }

  // homepage(){
  //   this.component = false;
  //   this.resource = false;
  //   this.home = true;
  // }


}
