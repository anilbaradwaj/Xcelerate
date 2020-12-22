import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'ngt-xdfiles',
  templateUrl: './xdfiles.component.html',
  styleUrls: ['./xdfiles.component.scss']
})
export class XdfilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
