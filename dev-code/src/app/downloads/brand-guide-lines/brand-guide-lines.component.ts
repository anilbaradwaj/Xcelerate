import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'ngt-brand-guide-lines',
  templateUrl: './brand-guide-lines.component.html',
  styleUrls: ['./brand-guide-lines.component.scss']
})
export class BrandGuideLinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
