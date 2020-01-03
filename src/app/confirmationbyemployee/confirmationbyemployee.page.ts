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
	result: Observable<any>;
	
	banklist: any = [];
	companybankaccmutation: any = [];
	note: any;
	ammount: any;
	accountno: any = [];
	bank: any;
	accname: any;
	salesID: any;
	id: any;
	myDate: any;
	customerbankmutationID : number = 0;
	customerbankaccID: any = '';
	paymentID: any = '';
	ishidden: boolean = false;
	
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
		this.getsalespaymentverif(this.data.id);
		this.getcustomeracc(this.data.id);
		this.getcustbanklist(this.data.customerID);
		this.getbanklist();
		this.getcurl();
		this.getusedcurl(0);
		this.bank = '';
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
			response => {
				if(response != null){
					if(response instanceof Object){
						this.global.customeracc = response;
						
						this.global.customeracc.salespayment.forEach((item, index) => {
							item.myDate = this.global.makeDate(item.myDate);
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
			response => {
				if(response != null){
					if(response instanceof Array){
						this.global.custbankaccs = response;
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
	
	getbanklist(){
		let url = this.global.api+"select/getbanklist";
		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id
		};
		
		this.result = this.http.post(
			url,
			post,
			{
				responseType:'json'
			}
		);
		
		this.result.subscribe(
			response => {
				if(response != null){
					if(response instanceof Array){
						this.banklist = response;
						console.log(this.banklist);
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
		if(!this.global.curldownloading)
		{
			this.global.curls = [];
			this.global.curldownloading = true;
			var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
			let url = 'http://localhost/jakartabrosur/public/API/admin/compaccs/1/bca/refresh';
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
							this.global.curldownloading = false;
							console.log("sampai sini");
						}
						else{
							this.global.curldownloading = true;
							console.log('ERROR OUTPUT');
							this.router.navigateByUrl('');
						}
					}
				}
			);
		}
	}
	
	konfirmasipembayaran(input){
		if(input.salespayment.length>0){
			this.accountno = input.salespayment[0].customeracc.accno;
			this.accname = input.salespayment[0].customeracc.accname;
			this.myDate = input.salespayment[0].paydate;
			this.ammount = input.salespayment[0].ammount;
			this.bank = input.salespayment[0].customeracc.bankID;
			this.customerbankaccID = input.salespayment[0].customeracc.id;
			this.paymentID = input.salespayment[0].id;
		}
		let url = this.global.api + "insert/insertverif";
		let post = {
			'app_token'								: this.global.logintoken,
			'usertype'								: this.global.usertype,
			'userID'									: this.global.userdata.id,
			'salesID'									: input.id,
			'paymentID'								: this.paymentID,
			'ammount'									: this.ammount,
			'paydate'									: this.myDate,
			'accname'									: this.accname,
			'note'										: this.note,
			'accountno'								: this.accountno,
			'customerID'							: input.customerID,
			'customerbankmutationID'	: this.customerbankmutationID,
			'bankID'									: this.bank,
			'customerbankaccID'				: this.customerbankaccID
		};
		
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		
		this.result.subscribe(
			response => {
				if(response != null){
					alert('data berhasil disimpan');
					this.ishidden = true;
				}
				else{
					alert('data gagal disimpan');
				}
			}
		);
	}
	
	selectedaccount(event){
		//console.log(event.target.value);
		let val = event.target.value.split('-');
		this.accname = val[1];
		this.bank = val[2];
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
				this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'medium' })+"/"+date.getFullYear();
			},
			err => console.log('Error occurred while getting date: ', err)
		);
	}
	
	selecteddetail(input){
		console.log(input);
		this.getusedcurl(input.id);
		let a = input.mutationNote.split(";");
		let count = a.length;
		this.ammount = input.mutationAmmount;
		this.accname = a[count-2];
		this.myDate = moment(input.mutationDate).format('YYYY-MM-DD');
		this.customerbankmutationID = input.id;
	}
	
	getsalespaymentverif(input){
		let url = this.global.api+"select/getsalespaymentverif";
		let post = {
			'app_token': this.global.logintoken,
			'usertype': this.global.usertype,
			'userID': this.global.userdata.id,
			'salespaymentID' : input
		};
		
		this.result = this.http.post(
			url,
			post,
			{
				responseType: 'json'
			}
		);
		
		this.result.subscribe(
			response => {
				if(response != null){
					this.global.salespaymentverif = response;
				}
				else{
					this.global.salespaymentverif = null;
					console.log('Data sales payment verif belum ada');
				}
			}
		);
	}
	
	getusedcurl(input){
		let url = this.global.api+"select/usedcurl";
		let post = {
			'app_token' 							: this.global.logintoken,
			'usertype'								: this.global.usertype,
			'userID'									: this.global.userdata.id
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
						this.companybankaccmutation = [];
						this.companybankaccmutation = response;
						response.forEach((item, index)=>{
							if(this.companybankaccmutation[index].customerbankmutationID == input){
								alert('data sudah pernah dipilih');
							}
							else{
								console.log(this.companybankaccmutation[index].customerbankmutationID);
							}
						})
					}
					else{
						console.log('data mutasi bukan array');
					}
				}
				else{
					console.log('data mutasi masih kosong');
				}
			}
		);
	}
	
	getallpayment(){
		let url = this.global.api+"";
		let post = {
			'app_token' 							: this.global.logintoken,
			'usertype'								: this.global.usertype,
			'userID'									: this.global.userdata.id
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
				}
				else{
					;
				}
			}
		);
	}
}
