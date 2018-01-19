import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OthercComponent } from './otherc/otherc.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    OthercComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
