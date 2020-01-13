import { NgModule, ErrorHandler } from '@angular/core';
import {AlertController, App, Config, IonicErrorHandler, ToastController} from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { GlobalsService } from './globals.service';
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { Platform} from "ionic-angular";
import { BarcodeScanner } from '../../node_modules/@ionic-native/barcode-scanner/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		AppRoutingModule],
	providers: [
		StatusBar,
		SplashScreen,
		OneSignal,
		BarcodeScanner,
		DatePicker,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		//GlobalsService,
		AuthGuardService,
		AuthenticationService,
		Platform,
		ToastController,
		App,
		Config,
		//AlertController
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
