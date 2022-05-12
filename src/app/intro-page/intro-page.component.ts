import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  userName: string = '';

  public constructor(
    private _router: Router,
    private _storageService: StorageService,
    ) {

  }
 
  onSubmit(nameFromForm: any) {
    this._router.navigate(['/game']);
    this._storageService.changeName(nameFromForm.userName);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
