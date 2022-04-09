import { Time } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @Output() changeState = new EventEmitter<boolean>()
  @Input() userName: string = ''
  constructor(private _router: Router, private _storageService: StorageService) { }
  public newName: string ='';
  public counter: number = 0;
  public gamePanelState: boolean = true;
  public mSec: number = 0;
  public sec: number = 0;
  public isStart: boolean = false;
  public isOver: boolean = false;
  public interval: any = 0;
  public getActionName: string = '';
  public actionList: Array<Actions> = [];
  public filter: string = 'asc';

  
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
    alert(`You loose ${this.userName}! Your points: ${this.counter} you have played for ${this.sec}.${this.mSec}s`)
    this.counter = 0;
    this.mSec = 0;
    this.sec = 0;
    this.isOver = true;
    this.isStart = false;
    clearInterval(this.interval);
    this.actionList = [];
  }

  public exit() {
    this.changeState.emit(this.gamePanelState);
    this._router.navigate(['/login']);
  }

  public getAction(actionName: string) {
    if (this.isStart) {
      this.getActionName = actionName;
      this.actionList.push(new Actions(this.getActionName, this.mSec, this.sec));
    }
  }


  ngOnInit() {
    this._storageService.UserName.subscribe(data=>{
      this.newName = data;
    });
}
}
export class Actions {
  public actionName: string;
  public actionMsec: number;
  public actionSec: number;
  constructor (actionName: string, actionMsec: number, actionSec: number) {
    this.actionName = actionName;
    this.actionMsec = actionMsec;
    this.actionSec = actionSec;
  }
}
