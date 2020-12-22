import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  title: string;
  subtitle: string;
  bodytext: string;
  button: string;
  textlink: string;
  caption: string;
  overline: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: '1P - Regular', subtitle: '1P - Regular', bodytext: '1P - Regular', 
  button: '1P - Medium', textlink: '1P - Medium', caption: '1P - Regular', 
  overline:'1P - Regular'},
  {title: '2P - Medium', subtitle: '2P - Medium', bodytext: '2P - Light', 
  button: '2P - Bold', textlink: '2P - Bold', caption: '2P - Light', 
  overline:'-'},
  {title: '-', subtitle: '4P - Bold', bodytext: '-', 
  button: '-', textlink: '-', caption: '-', 
  overline:'-'},
  {title: 'H1 56px', subtitle: '24px', bodytext: '22px', 
  button: '18px', textlink: '18px', caption: '16px', 
  overline:'12px'},
  {title: 'H2 46px', subtitle: '22px', bodytext: '20px', 
  button: '16px', textlink: '16px', caption: '14px', 
  overline:'10px'},
  {title: 'H3 44px', subtitle: '20px', bodytext: '18px', 
  button: '14px', textlink: '14px', caption: '12px', 
  overline:'-'},
  {title: 'H4 38px', subtitle: '18px', bodytext: '-', 
  button: '-', textlink: '-', caption: '-', 
  overline:'-'},
  {title: 'H5 36px', subtitle: '18px', bodytext: '-', 
  button: '-', textlink: '-', caption: '-', 
  overline:'-'},
  {title: 'H6 32px', subtitle: '18px', bodytext: '-', 
  button: '-', textlink: '-', caption: '-', 
  overline:'-'},
];

@Component({
  selector: 'ngt-typeography',
  templateUrl: './typeography.component.html',
  styleUrls: ['./typeography.component.scss']
})
export class TypeographyComponent implements OnInit {

  displayedColumns: string[] = ['title', 'subtitle', 'bodytext', 'button', 
                                            'textlink', 'caption', 'overline'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
