import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';
import { AddpricePage } from '../pricelist/addprice/addprice.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss']
})
export class PricelistPage implements OnInit {

	pricelists: any;
	httpresult: Observable<any>;
	pricelisterror:boolean;

  constructor(
  	public router: Router,
  	public global: GlobalsService,
  	public http: HttpClient,
  	public navCtrl: NavController
	) { 
  	this.pricelists = null;
  }

  ngOnInit() {
  	this.getpricelists();
		
  }

  gotoaddprice(){
		//this.router.navigateByUrl('popup/addprice');
		this.navCtrl.navigateForward('popup/addprice');
  }

  refresh(event){
		setTimeout(() => {
			this.pricelists = [];
			this.getpricelists();
			event.target.complete();
		}, 2000);
  }

  getpricelists(){
  	let url = this.global.api+"select/pricelists";
		let post = {
			'app_token': this.global.logintoken,
			'usertype': 'EM',
			'userID': this.global.userdata.id
		}

		this.httpresult = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);

		this.httpresult.subscribe(
			data => {
				if (data != null) {
					if (data instanceof Object) {
						this.pricelists = data;
						this.pricelisterror = false;
					} else {
						console.log("ERROR OUTPUT FROM " + url);
						this.pricelisterror = true;
						this.router.navigateByUrl('');
					}
				}
			}
		);
  }

}
