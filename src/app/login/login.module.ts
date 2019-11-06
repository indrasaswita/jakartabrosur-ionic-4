import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";
//import {IonicStorageModule} from "@ionic/storage";
//import { IonicErrorHandler } from 'ionic-angular/umd';

const routes: Routes = [
	{
		path: '',
		component: LoginPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		IonicModule,
		RouterModule.forChild(routes),
		IonicStorageModule,
	],
	declarations: [LoginPage],
	providers: [
		HttpClient,
		//[{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
	]
})
export class LoginPageModule {}
