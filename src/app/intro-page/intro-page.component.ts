import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  @Output() sendUserObject = new EventEmitter<User>()
  @Output() changeState = new EventEmitter<boolean>()

  
  model = new User ("", "")
  submitted:boolean = false;
  public userPanelState: boolean = false

    startGame(){
      this.changeState.emit(this.userPanelState)
    }

  onSubmit(dataFromForm: User) { 
    this.submitted = true;
    this.sendUserObject.emit(dataFromForm);
   }
   public getUserName: string = ''
   public getUserEmail: string = ''
 
   getUserArray(userData: User){
     this.getUserName = userData.userName;
     this.getUserEmail = userData.userEmail;
   }
  refresh(): void {
    window.location.reload();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
