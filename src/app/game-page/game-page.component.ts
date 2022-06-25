import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(
    private _router: Router,
    private _storageService: StorageService,
    private _route: ActivatedRoute,
  ) {
    this._route.params.subscribe(params => {
      this.gameParameter = params['colors']
    })
  }
  public name: string = '';
  public counter: number = 0;
  public mSec: number = 0;
  public sec: number = 0;
  public isStart: boolean = false;
  public isOver: boolean = false;
  public interval: any = 0;
  public getActionName: string = '';
  public actionList: Array<Actions> = [];
  public filter: string = 'asc';
  public gameParameter: string = '';


  public setInter() {
    this.mSec = this.mSec + 1;
    if (this.mSec >= 100) {
      this.mSec = 0;
      this.sec = this.sec + 1;
    }
  }

  public start() {
    if (!this.isStart && !this.isOver) {
      this.isStart = true;
      this.interval = setInterval(() => this.setInter(), 10)
    }
  }

  public stop() {
    if (this.isStart) {
      clearInterval(this.interval);
      this.isStart = false;
    }
  }

  public reset() {
    clearInterval(this.interval)
    this.mSec = 0;
    this.sec = 0;
    this.counter = 0;
    this.isStart = false;
    this.isOver = false;
    this.actionList = [];
  }

  public increasePoints() {
    this.counter = this.counter + 1;
  }

  public gameOver() {
    alert(`You loose ${this.name}! Your points: ${this.counter} you have played for ${this.sec}.${this.mSec}s`)
    this.counter = 0;
    this.mSec = 0;
    this.sec = 0;
    this.isOver = true;
    this.isStart = false;
    clearInterval(this.interval);
    this.actionList = [];
  }

  public exit() {
    this._router.navigate(['/login']);
  }

  public highscores() {
    this._router.navigate(['/highscores'])
  }

  public changeContrast() {
    if (this.gameParameter === 'contrast') {
      this._router.navigate(['game', 'normalColor'])

    } else if (this.gameParameter === 'normalColor') {
      this._router.navigate(['game', 'contrast'])

    } else {
      this._router.navigate(['login'])
    }
  }
  public getAction(actionName: string) {
    if (this.isStart) {
      this.getActionName = actionName;
      this.actionList.push(new Actions(this.getActionName, this.mSec, this.sec));
    }
  }


  ngOnInit() {
    this._storageService.UserName.subscribe(data => {
      this.name = data;
    });
  }
}
export class Actions {
  public actionName: string;
  public actionMsec: number;
  public actionSec: number;
  constructor(actionName: string, actionMsec: number, actionSec: number) {
    this.actionName = actionName;
    this.actionMsec = actionMsec;
    this.actionSec = actionSec;
  }
}
