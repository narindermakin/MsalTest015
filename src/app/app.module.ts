

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Nav, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//, Platform
import { IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { MsalService } from '../services/msal.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';


@NgModule({
  declarations: [
    MyApp
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),   
    IonicStorageModule.forRoot({
      name: 'com.lit.msal015sample',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,    
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Deeplinks,
    
    MsalService,
   
    InAppBrowser, 
    LoadingController  
      
    
  ]
})
export class AppModule {}

