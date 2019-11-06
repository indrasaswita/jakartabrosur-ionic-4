import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalsService } from "../globals.service";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import {forEach} from "@angular-devkit/schematics";

@Component({
	selector: 'app-confirmationbyemployee',
	templateUrl: './confirmationbyemployee.page.html',
	styleUrls: ['./confirmationbyemployee.page.scss'],
})
export class ConfirmationbyemployeePage implements OnInit {
	
	data: any;
	httpresult : Observable<any>;
	note: any;
	paydate: any;
	ammount: any;
	accountno: any;
	bankname: any;
	nameacc: any;
	salesID: any;
	id: any;
	result: Observable<any>;
	myDate:string;
	
	constructor(
		private global: GlobalsService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private http: HttpClient,
		private datePicker: DatePicker
	) {
		
		
		this.activatedRoute.queryParams.subscribe(params => {
			this.data = JSON.parse(params.special);
				console.log(this.data);
			
		});
	}

	ngOnInit() {
		this.getcustbanklist(this.data.customerID);
		this.getcustomeracc(this.data.id);
		this.getcurl();
		this.bankname = '';
	}
	
	getcustomeracc(input){
		let url = this.global.api+"select/getcustomerpaymentbyid";
		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id,
			'cartID' : input
		};
		
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		
		this.result.subscribe(
			data => {
				if(data != null){
					if(data instanceof Object){
						this.global.customeracc = data;
						
						this.global.customeracc.salespayment.forEach((item, index) => {
							item.paydate = this.global.makeDate(item.paydate);
						})
						console.log(this.global.customeracc);
					}
					else{
						console.log('ERROR OUTPUT FROM ' + url);
						this.router.navigateByUrl('');
					}
				}
			}
		);
	}
	
	getcustbanklist(input){
		let url = this.global.api+"select/getcustbankaccount";
		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id,
			'customerID' : input
		};
		
		this.result = this.http.post(
			url,
			post,
			{
				responseType:'json'
			}
		);
		
		this.result.subscribe(
			data => {
				if(data != null){
					if(data instanceof Array){
						this.global.custbankaccs = data;
						console.log(this.global.custbankaccs);
					}
					else{
						console.log("not Array");
					}
				}
				else{
					console.log("kosong");
					this.router.navigateByUrl('');
				}
			}
		);
	}
	
	getcurl(){
		var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
		let url = 'http://jakartabrosur.com/API/admin/compaccs/1/bca/refresh'
		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id
		};
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		
		this.result.subscribe(
			response =>{
				if(response != null){
					if(response instanceof Array){
						response.forEach((item, index) =>{
							if(item.mutationNote.includes('CR')){
								var dates = moment(item.mutationDate).format("YYYY-MM-DD");
								if(dates>=yesterday){
									this.global.curls.push(item);
								}
							}
						})
					}
					else{
						console.log('ERROR OUTPUT');
						this.router.navigateByUrl('');
					}
				}
			}
		);
	}
	
	konfirmasipembayaran(input){
		console.log(this.paydate);
		console.log(this.bankname);
		console.log(this.nameacc);
		let url = this.global.api + "insertverif";
		let post = {
			'employeeID'	: this.global.userdata.id,
			'salesID'			: this.salesID,
			'paymentID'		: input,
			'ammount'			: this.ammount,
			'paydate'			: this.paydate,
			'nameacc'			: this.nameacc,
			'note'				: this.note
		};
		
		// this.result = this.http.post(
		// 	url,
		// 	post,
		// 	{
		// 		responseType: 'json'
		// 	}
		// );
		//
		// if(this.result != null){
		// 	this.result.subscribe(data=>{
		// 		console.log(data);
		// 	});
		// }
	}
	
	selectedaccount(event){
		console.log(event.target.value);
		let val = event.target.value.split('-');
		this.nameacc = val[1];
		this.bankname = val[2];
	}
	
	showDatepicker(){
		this.datePicker.show({
			date: new Date(),
			mode: 'date',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
			okText:"OK",
			todayText:"Set Today"
		}).then(
			date => {
				this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
			},
			err => console.log('Error occurred while getting date: ', err)
		);
	}
	
	selecteddetail(input){
		console.log(input);
	}
}
