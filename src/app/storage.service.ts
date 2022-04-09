import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private nameSource = new BehaviorSubject<string>('');
  UserName = this.nameSource.asObservable()
  constructor() { }
  changeName(UserName: string) {
    this.nameSource.next(UserName);
  }
}