import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

	customers: any;
	httpresult: Observable<any>;
	customererror: boolean;

  constructor(
  	public global: GlobalsService,
  	public http: HttpClient,
  	public router: Router
	) {
		this.customers = null;
  }

  ngOnInit() {
		//console.log('customer mulai');
		this.getcustomerdata();
  }

  ionViewWillEnter(){
  	console.log("ANJING");
  }

	ngOnEnter(){
		console.log("OnEnter on contact.page.ts");
	}
  ionSelected(){
  	console.log("KUCING MEONG");
  }

  getcustomerdata(){
		this.customers = null;
		let url = this.global.api+"select/customers";

		console.log(this.global.logintoken);

		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id
		};

		this.httpresult = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);

		this.httpresult.subscribe(
			data => {
				if(data != null){
					if (data instanceof Array) {
						this.customers = data;
						this.customererror = false;
					}else{
						console.log('ERROR OUTPUT FROM ' + url);
						this.customererror = true;
						this.router.navigateByUrl('');
					}
				}
			}
		);
  }





}
