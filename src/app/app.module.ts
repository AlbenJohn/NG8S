import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'jqueryui';
import 'jquery.ui.layout';
import { AgmCoreModule } from '@agm/core'; 
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {HttpClientModule} from '@angular/common/http'
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_nAPZ14K6s7O1cIC8K7zodehEp22Wx54',
      libraries: ['places']
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
