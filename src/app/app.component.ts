import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'snake';
  public getUserName: string = ''
  public getUserEmail: string = ''
  public isVisible : boolean = true

  getUserArray(userData: User){
    this.getUserName = userData.userName;
    this.getUserEmail = userData.userEmail;
  }
  
  stateFromUserPanel(newState: any){
    this.isVisible = newState
  }

  stateFromGamePanel(newState: any){
    this.isVisible = newState
  }

  
}
  