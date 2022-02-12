import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @Output() changeState = new EventEmitter<boolean>()

  @Input() userName: string = ''
  constructor() { }
  public counter:number = 0;
  public gamePanelState: boolean = true


  public increasePoints() {
    this.counter = this.counter+1;
  }

  public gameOver() {
    alert(`You'are dead Your points: ${this.counter}`)
    this.counter = 0;
  }
  public exit() {
    this.changeState.emit(this.gamePanelState)
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
