import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { AppComponent } from '../app.component';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'ngt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output()
  resources:EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
    // let myAppObj = new AppComponent();
    // myAppObj.resources();
    // myAppObj.resource;
    // myAppObj.home;
  }

  getstarted(){
    this.resources.emit();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

}
