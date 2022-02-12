import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { FormsModule } from '@angular/forms';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroPageComponent,
        GamePageComponent,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}