import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ComponentDocumentationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
