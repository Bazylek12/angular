import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from './game-page/game-page.component';
import { SortPipe } from './sort.pipe';
import { RouterModule } from '@angular/router';
import { HighscoresComponent } from './highscores/highscores.component';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
    declarations: [
        AppComponent,
        IntroPageComponent,
        GamePageComponent,
        SortPipe,
        HighscoresComponent,
        OrderByPipe,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'login', component: IntroPageComponent},
            { path: 'game/:colors', component: GamePageComponent},
            { path: 'highscores', component:HighscoresComponent},
            { path: '**', redirectTo: 'login'}
        ]),
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}