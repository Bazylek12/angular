import { Component, OnInit } from '@angular/core';
import { HighScores, ScoresService } from '../scores.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {

  columns = ["Name", "Score"];
  indexs = ["name", "score"];
  public filter: string = "";
  public data: Array<HighScores> = [];
  constructor(private _scores: ScoresService) {
    this._scores.load().subscribe((result => {
      this.data = (result);
    }));
   }

  ngOnInit(): void {
  }

}
