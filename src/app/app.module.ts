import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParagraphWrapComponent } from './components/paragraph-wrap/paragraph-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphWrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
