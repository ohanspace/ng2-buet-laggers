import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class LagService {
  private lagList: FirebaseListObservable<any[]>

  constructor(private af: AngularFire) {
    this.lagList = this.af.database.list('/my-lags');
  }

  getMyLags() : FirebaseListObservable<any[]>{
    return this.lagList;
  }
  createMyLag(lag){
    return this.lagList.push(lag);
  }

}
