import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserObj } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private patientId: number = 0;

  setPatientId(id: number): void {
    this.patientId = id;
  }

  getPatientId(): number {
    return this.patientId;
  }

  private userInfoSource = new BehaviorSubject<IUserObj | null>(null);
  userInfo$ = this.userInfoSource.asObservable();
  
  setUserInfo(userInfo: IUserObj | null) {
    this.userInfoSource.next(userInfo);
  }
}
