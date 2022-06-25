import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostTokenService } from '../post-token.service';
import { StorageService } from '../storage.service';
import { User } from '../user';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  public constructor(
    private _router: Router,
    private _storageService: StorageService,
    private _postToken: PostTokenService,
    private _fb: FormBuilder,
  ) { }

  public userForm = this._fb.group({
    userName: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(14)]],
    token: ['', [
      Validators.required,
      Validators.minLength(4)]],
    color: ['normalColor', [
      Validators.required,
    ]]
  })
  onSubmit(dataFromForm: User) {
    this._storageService.changeName(dataFromForm.userName);
    console.log(dataFromForm.color)
    this._postToken.sendToken(dataFromForm.token).subscribe(res => {
      console.log(res)
      if (res.success) {
        this._router.navigate(['/game', dataFromForm.color]);
      } else {
        alert("Wrong token")
      }
    })
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
