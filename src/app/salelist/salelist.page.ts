import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//import { LocalNotifications } from '@ionic-native/local-notifications';

import { GlobalsService } from '../globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salelist',
  templateUrl: './salelist.page.html',
  styleUrls: ['./salelist.page.scss'],
})
export class SalelistPage implements OnInit {

	pendingcarts: any = [];
	sales: any = [];
	data: Observable<any>;
	cartsdownloading: boolean;
	salesdownloading: boolean;
	tab: string = '';
	result: Observable<any>;


	constructor(
		public global: GlobalsService,
		public http: HttpClient,
		//public localNotifications: LocalNotifications,
		public router: Router
	) {
		this.tab = 'carts';
		this.getData(this.tab);

		/*this.localNotifications.schedule({
			text: 'Delayed ILocalNotification',
			trigger: {
				at: new Date(Date.now())
			},
			led: 'FF0000',
			sound: null
		});*/
	}

	ngOnInit() {
	}

	getData(value) {
		if (value == 'carts')
			this.getPendingCarts();
		else if (value == 'sales')
			this.getSales();
	}

	getPendingCarts() {
		this.cartsdownloading = true;
		let url = this.global.api+'select/pendingcarts';
		let post = {
			'app_token': this.global.logintoken,
			'usertype': 'EM',
			'userID': this.global.userdata.id
		};
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		if (this.result != null) {
			this.result.subscribe(data => {
				if (data != null) {
					if (data instanceof Array) {
						this.pendingcarts = data;

						this.pendingcarts.forEach(function(header) {
							header.showdetail = false;
						});
						
					} else {
						this.pendingcarts = null;
						this.router.navigateByUrl('');
					}
					this.cartsdownloading = false;
				} else {
					console.log("ERROR NO DATA from " + url);
				}
			});
		}
	}

	getSales() {
		this.salesdownloading = true;
		var url = this.global.api + 'select/allsales';
		let post = {
			'app_token': this.global.logintoken,
			'usertype': 'EM',
			'userID': this.global.userdata.id
		};
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		if (this.result != null) {
			this.result.subscribe(data => {
				if(data != null){
					if (data instanceof Array){
						this.sales = data;
						this.sales.forEach(function(header) {
							header.totalprice = 0;

							if (header.salesdetail != null) {
								header.salesdetail.forEach(function(detail) {
									header.totalprice += detail.cartheader.printprice + detail.cartheader.deliveryprice - detail.cartheader.discount;
								});

								header.showdetail = false;
							}

						});
					} else {
						this.sales = null;
						this.router.navigateByUrl('');
					}
				} else {
					console.log("ERROR NO DATA from "+url);
				}
						
				this.salesdownloading = false;
			});
		}
	}

	toggleSalesheader(event, input) {
		let value = !input.showdetail;
		this.sales.forEach(function(header) {
			header.showdetail = false;
		});
		input.showdetail = value;
	}

	toggleCartheader(event, input) {
		let value = !input.showdetail;
		this.pendingcarts.forEach(function(header) {
			header.showdetail = false;
		});
		input.showdetail = value;
	}


	setTab(value: string) {
		if (value != this.tab) {
			this.getData(value);
			this.tab = value;
		}
	}

}
