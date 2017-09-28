import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { SQLite, SQLiteObject  } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventlistPage} from '../pages/eventlist/eventlist';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { DiscoverPage } from '../pages/discover/discover';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventlistPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    MapsPage,
    DiscoverPage,
    TabsPage,
    CalendarPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventlistPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    MapsPage,
    DiscoverPage,
    TabsPage,
    CalendarPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLiteObject,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
