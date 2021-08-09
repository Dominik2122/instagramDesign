import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/app/material.module';
import {CardsModule} from 'src/app/wall/cards/cards.module';
import {HeaderModule} from 'src/app/nav/header/header.module';
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CardsModule,
    HeaderModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBOWfMH2I13SsZ3K2K2nVQfio_4KXof5PM",
      authDomain: "instagramdesign.firebaseapp.com",
      projectId: "instagramdesign",
      storageBucket: "instagramdesign.appspot.com",
      messagingSenderId: "1049056260143",
      appId: "1:1049056260143:web:12483f11e4a8ddaf5b16da",
      measurementId: "G-5F8PRPZ5Q1"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
