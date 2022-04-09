import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { User } from '../user';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  userName: string = '';
  // @Output() sendUserObject = new EventEmitter<User>()
  // @Output() changeState = new EventEmitter<boolean>()

  public constructor(
    private _router: Router,
    private _storageService: StorageService,
    ) {

  }

  // model = new User("", "")
  // submitted: boolean = false;
  // public userPanelState: boolean = false

  // startGame() {
  //   this.changeState.emit(this.userPanelState)
  // }

 
  onSubmit(nameFromForm: any) {
    // this.submitted = true;
    // this.sendUserObject.emit(dataFromForm);
    this._router.navigate(['/game']);
    this._storageService.changeName(nameFromForm.userName);

  }
  // public getUserName: string = ''
  // public getUserEmail: string = ''

  // getUserArray(userData: User) {
  //   this.getUserName = userData.userName;
  //   this.getUserEmail = userData.userEmail;
  // }
  refresh(): void {
    window.location.reload();
  }



  ngOnInit(): void {
  }

}
