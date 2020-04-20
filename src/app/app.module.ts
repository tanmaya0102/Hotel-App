import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Rooms } from '../providers/rooms/rooms';
import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
import { BookingPage } from '../pages/booking/booking';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AvailableRoomsPage,
    BookingPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Rooms
  ]
})
export class AppModule {}
