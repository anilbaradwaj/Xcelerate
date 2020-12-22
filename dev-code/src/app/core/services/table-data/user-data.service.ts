import { UserData } from '../../../shared/models/user-data.model';

export class UserDataService {
  private userDataSource = require('../../../../assets/mock-data/table-data.json');
  private userData: UserData[];

  public constructor() {
    this.userData = this.userDataSource;
  }

  public getUserData(itemOffset: number, itemCount: number): UserData[] {
    console.log(`offset: ${itemOffset} count: ${itemCount}`);
    return this.userData.slice(itemOffset, itemOffset + itemCount);
  }
}
