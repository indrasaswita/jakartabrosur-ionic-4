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
	groups: any = [];

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
		//this.getgroups();
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
						data.forEach((item, index) => {
							item.show = true;
						})
						this.customers = data;
						console.log(this.customers);
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
  
  getgroups() {
		for (var i = 0; i < 8; i++) {
			this.groups[i] = {
				name: i,
				items: [],
				show: true
			};
			for (var j=0; j<3; j++) {
				this.groups[i].items.push(i + '-' + j);
			}
		}
		console.log(this.groups);
	}
  
  isgroupshown(group){
  	return group.show;
	}
  
  togglegroup(group){
		group.show = !group.show;
	}
}
