import { Component, OnInit, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


//@ViewChild('login_btn') inputEl: ElementRef;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username: String = "";
	password: String = "";
	loginresult: Observable<any>;
	loginresultstring: String = "";

  constructor(
  	public global: GlobalsService, 
  	public http: HttpClient,
  	public router: Router,
  	public navCtrl: NavController
	) { 
		//constructor
		this.username = "employee@test.com";
		this.password = "password";
	}

  ngOnInit() {
		
  }


  login_clicked() {
		let onesignalID = this.global.onesignalID;
		let url = this.global.api+'login';
		let post = {
			'onesignalID': onesignalID,
			'username': this.username,
			'password': this.password
		};


		this.loginresult = this.http.post(url, 
			post,
			{ 
				responseType: 'json' 
			}
		);

		this.loginresult.subscribe(data=>{
			if (data != null) {
				if(data[0]=='1'){
					console.log('STATUS OK');
					this.global.logintoken = data[1];
					console.log(data[2]);
					this.global.userdata = data[2];
					this.loginresultstring = "";

					//this.router.navigateByUrl('tabs/full/(home:home)');
					this.navCtrl.navigateForward('tabs/full/(home:home)');

				}else{
					console.log('STATUS ERROR');
					this.loginresultstring = data[1];
				}
			}else{
				console.log('NO DATA RECEIVED');
			}
		});

  }

}
