import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GraphPage } from '../pages/graph/graph';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewSearchPage } from '../pages/new-search/new-search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilterPage } from '../pages/filter/filter';
import { FilterCalendarPage } from '../pages/filter-calendar/filter-calendar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    NewSearchPage, 
    GraphPage,
    FilterPage,
    FilterCalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    NewSearchPage,
    GraphPage,
    FilterPage,
    FilterCalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
