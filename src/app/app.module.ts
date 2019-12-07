import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MessageComponent } from './message/message.component';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MessageComponent,
    SubtitleComponent
  ],
  imports: [
    BrowserModule
    ],
  exports: [
    TitleComponent,
    MessageComponent,
    SubtitleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
