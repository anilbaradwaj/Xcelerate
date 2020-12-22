import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../../core/services/table-data/user-data.service';
import { UserData } from '../../shared/models/user-data.model';

@Component({
  selector: 'ngt-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  private scrollIndex = 0;
  private scrollChunk = 20;

  public dataSource: UserData[];
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'ipAddress'];

  public constructor(private userDataService: UserDataService) {
  }

  public ngOnInit(): void {
    this.dataSource = this.userDataService.getUserData(this.scrollIndex, this.scrollChunk);
  }

  tableScroll(e) {
    const tableViewHeight = e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;

    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.scrollIndex += this.scrollChunk;
      const newScrollData = this.userDataService.getUserData(this.scrollIndex, this.scrollChunk);
      this.dataSource = this.dataSource.concat(newScrollData);
    }
  }
}
