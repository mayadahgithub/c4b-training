
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegiterPage } from './../pages/regiter/regiter';
import { UpdateDatePage } from './../pages/update-date/update-date';


import { AngularFireAuth } from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule , AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {LoginPage} from '../pages/login/login';
var config = {
  apiKey: "AIzaSyAlM3uKu94TWJVOnUtNtR9K8pO_OBMEews",
  authDomain: "c4b-project.firebaseapp.com",
  databaseURL: "https://c4b-project.firebaseio.com",
  projectId: "c4b-project",
  storageBucket: "",
  messagingSenderId: "768323126671"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegiterPage,
    UpdateDatePage
  ],
  imports: [
    AngularFireDatabaseModule,
    
    AngularFireModule.initializeApp(config),
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegiterPage,
    UpdateDatePage
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
