import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalsService } from "../globals.service";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController } from "@ionic/angular";

@Component({
	selector: 'app-confirmationbyemployee',
	templateUrl: './confirmationbyemployee.page.html',
	styleUrls: ['./confirmationbyemployee.page.scss'],
})
export class ConfirmationbyemployeePage implements OnInit {
	
	httpresult : Observable<any>;
	result: Observable<any>;
	urlrefresh: string = 'http://localhost/jakartabrosur/public/API/admin/compaccs/1/bca/refresh';
	urlread: string = 'http://localhost/jakartabrosur/public/API/admin/compaccs/1/bca/read';
	
	private paydialogstatus: string = "";
	private paydialogshow: boolean = false;
	private mutationtableshow: boolean = false;
	private showsalestypes: string = "paid";
	private showsalesloading: boolean = false;
	private showsaleserrormessage: string = "";
	
	private salesheaderID: any;
	private paydialog: any;
	private salesnotverifs: any = [];
	private salesnopayments: any = [];
	private companybankaccs: any = [];
	private salespayment: any = [];
	private custbankaccs: any = [];
	private newcustbanksacc: any = [];
	private companybankaccmutation: any = [];
	private note: any;
	private ammount: any;
	private selectedcompanybank: any;
	private selectedsalesheaderindex: number = -1;
	accountno: any = [];
	bank: any = '';
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
		private datePicker: DatePicker,
		private alertController: AlertController
	) {
		
		
		this.activatedRoute.queryParams.subscribe(params => {
			this.salesheaderID = JSON.parse(params.sid);
		});
	}

	ngOnInit() {
		if(this.salesheaderID != null){
			this.setshowsalestype('paid');
		}
		this.getcompanybankaccount();
		this.getusedcurl(0);
	}
	
	getcustomeracc(input){
		let url = this.global.api+"select/getsalespaymentbycartid";
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
	
	// getcustbanklist(input){
	// 	this.global.custbankaccs = [];
	// 	let url = this.global.api+"select/getcustbankaccount";
	// 	let post = {
	// 		'app_token': this.global.logintoken,
	// 		'usertype': this.global.usertype,
	// 		'userID': this.global.userdata.id,
	// 		'customerID' : input
	// 	};
	//
	// 	this.result = this.http.post(
	// 		url,
	// 		post,
	// 		{
	// 			responseType:'json'
	// 		}
	// 	);
	//
	// 	this.result.subscribe(
	// 		response => {
	// 			if(response != null){
	// 				if(response instanceof Array){
	// 					this.global.custbankaccs = response;
	// 					console.log(this.global.custbankaccs);
	// 				}
	// 				else{
	// 					console.log("not Array");
	// 				}
	// 			}
	// 			else{
	// 				console.log("kosong");
	// 				this.router.navigateByUrl('');
	// 			}
	// 		}
	// 	);
	// }
	
	getcompanybankaccount(){
		let url = this.global.api+"select/getcompanybankaccount";
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
						this.companybankaccs = response;
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
	
	getbcarefresh(){
		console.log(this.paydialog);
		if(!this.global.curldownloading)
		{
			this.global.curls = [];
			this.global.curldownloading = true;
			var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
			let post = {
				'app_token': this.global.logintoken,
				'usertype': this.global.usertype,
				'userID': this.global.userdata.id
			};
			this.result = this.http.post(
				this.urlrefresh,
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
										item.curlshow = false;
										let count = item.mutationNote.split(";");
										item.name = count[count.length-2];
										this.global.curls.push(item);
									}
								}
							})
							this.global.curldownloading = false;
							console.log("sampai sini refresh");
						}
						else{
							this.global.curldownloading = true;
							console.log('ERROR OUTPUT');
							this.router.navigateByUrl('');
						}
					}
				}
			);
			//this.getcustbanklist(this.paydialog.customerID);
		}
	}
	
	getbcaread(){
		console.log(this.paydialog);
		if(!this.global.curldownloading){
			this.global.curls = [];
			this.global.curldownloading = true;
			var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
			this.result = this.http.get(this.urlread,
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
									item.curlshow = false;
									let count = item.mutationNote.split(";");
									item.name = count[count.length-2];
									var dates = moment(item.mutationDate).format("YYYY-MM-DD");
									if(dates>=yesterday){
										this.global.curls.push(item);
									}
								}
							})
							this.global.curldownloading = false;
							console.log("sampai sini read");
						}
						else{
							this.global.curldownloading = true;
							console.log('ERROR OUTPUT');
							this.router.navigateByUrl('');
						}
					}
				}
			);
			//this.getcustbanklist(this.paydialog.customerID);
		}
	}
	
	konfirmasipembayaran($paydialog){
		console.log($paydialog);
		console.log('konfirmasi pembayaran');
		let url = this.global.api + "insert/insertverif";
		let post = {
			'app_token'								: this.global.logintoken,
			'usertype'								: this.global.usertype,
			'userID'									: this.global.userdata.id,
			//'salesID'									: input.id,
			'paymentID'								: this.paymentID,
			'ammount'									: $paydialog.ammount,
			'paydate'									: this.myDate,
			'accname'									: this.accname,
			'note'										: this.note,
			'accountno'								: this.accountno,
			//'customerID'							: input.customerID,
			'customerbankmutationID'	: $paydialog.customerbankmutationID,
			'bankID'									: this.bank,
			'customerbankaccID'				: this.customerbankaccID
		};
		
		// this.result = this.http.post(
		// 	url,
		// 	post,
		// 	{
		// 		responseType: 'json'
		// 	}
		// );
		//
		// this.result.subscribe(
		// 	response => {
		// 		if(response != null){
		// 			alert('data berhasil disimpan');
		// 			this.ishidden = true;
		// 		}
		// 		else{
		// 			alert('data gagal disimpan');
		// 		}
		// 	}
		// );
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
		this.getusedcurl(input.id);
		let a = input.mutationNote.split(";");
		let count = a.length;
		this.ammount = input.mutationAmmount;
		this.accname = a[count-2];
		this.myDate = moment(input.mutationDate).format('YYYY-MM-DD');
		this.customerbankmutationID = input.id;
	}
	
	hideallsalespayment(){
		if(this.salesnotverifs!=null) {
			this.salesnotverifs.forEach(($ii, i) => {
				$ii.salespaymentshow = false;
			});
		}
		if(this.salesnopayments!=null) {
			this.salesnopayments.forEach(($ii, i) => {
				$ii.salespaymentshow = false;
			});
		}
	}
	
	showsalespayment($item){
		this.hideallsalespayment();
		this.salesnotverifs.forEach(($ii, i) => {
			if($ii.id == $item.id)
				$ii.salespaymentshow = true;
		});
	}
	
	showdetailcurl($item){
		let $temp = $item.curlshow;
		this.global.curls.forEach(($ii, i) => {
			$ii.curlshow = false;
		});
		if($temp == false){
			$item.curlshow = true;
		}
	}
	
	showmutation(){
		this.getbcaread();
		this.mutationtableshow = true;
	}
	
	hidemutation(){
		this.mutationtableshow = false;
	}
	
	selectedmutation($curl, $selectedcompanybank){
		this.paydialog.customerbankmutationID = $curl.id;
		this.paydialog.ammount = $curl.mutationAmmount;
		this.selectedcompanybank = $selectedcompanybank;
		this.mutationtableshow = false;
	}
	
	setshowsalestype(input){
		var self = this;
		this.paydialogstatus = '';
		this.paydialogshow = false;
		if(input == 'paid'){
			this.getsalesnotverif(function (){
				self.showsalestypes = input;
			}, function (errormessage) {
				self.showsalestypes = '';
				self.showsaleserrormessage = errormessage;
			});
		} else if(input=='nopayment'){
			this.getsalesnopayment(function (){
				self.showsalestypes = input;
			}, function (errormessage) {
				self.showsalestypes = '';
				self.showsaleserrormessage = errormessage;
			});
		}
	}
	
	showpaydialog($header, $selectedheaderindex, $payment) {
		console.log($header);
		this.selectedsalesheaderindex = $selectedheaderindex;
		
		if($payment != null){
			//brarti yang di klik adalah row pembayaran dari salesheader.salespayment
			this.paydialog = {
				"ammount": $payment.ammount,
				"paydate": $payment.created_at,
				"customerbankmutationID": null,
				"paymentID": $payment.id,
				"salesID": $payment.salesID,
				"customerID": $payment.customerID
			};
			if ($payment.salespaymentverif == null) {
				this.paydialogstatus = "notverif";
				this.paydialog.custbankname = $payment.customeracc.bank.bankname;
				this.paydialog.custbankaccname = $payment.customeracc.accname;
				this.paydialog.custbankaccno = $payment.customeracc.accno;
				this.paydialog.compbankname = $payment.companyacc.bank.bankname;
				this.paydialog.compbankaccname = $payment.companyacc.accname;
				this.paydialog.compbankaccno = $payment.companyacc.accno;
				this.paydialog.companybankalias = $payment.companyacc.bank.alias;
			} else {
				this.paydialogstatus = "verified";
				this.paydialog = {
					"custbankname": $payment.customeracc.bank.bankname,
					"custbankaccname": $payment.customeracc.accname,
					"custbankaccno": $payment.customeracc.accno,
					"compbankname": $payment.companyacc.bank.bankname,
					"compbankaccname": $payment.companyacc.accname,
					"compbankaccno": $payment.companyacc.accno,
					"companybankalias": $payment.companyacc.bank.alias
				};
				this.paydialog.verifdate = $payment.salespaymentverif.veriftime;
				this.paydialog.verifemployee = $payment.salespaymentverif.employee.name;
			}
		}else{
			//jika belum ada pemabaran, maka salesheader.salespyament masih kosong, sehingga dikirimnya null
		}
		
		this.paydialogshow = true;
	}
	
	shownopaymentdialog($nopayment){
		this.hideallsalespayment();
		this.custbankaccs = $nopayment.customer.customerbankacc;
		if($nopayment.salespayment==null) {
			this.paydialog = {
				"totalprice"			: $nopayment.totalprice,
				"salestime"				: $nopayment.created_at,
				"customerID" 			: $nopayment.customerID,
				"custbankaccname" : '',
				"custbankaccno"		: '',
				"custbankname"		: ''
			};
			this.paydialogstatus = "nopayment";
			$nopayment.salespaymentshow = true;
		}else{
			$nopayment.salespaymentshow = true;
		}
	}
	
	getsalesnotverif(whendone, whenfailed) {
		if (!this.showsalesloading) {
			this.showsalesloading = true;
			
			let url = this.global.api + "select/getpendingpayment";
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
				response => {
					if (response != null) {
						this.salesnotverifs = response;
						this.salesnotverifs.forEach(($ii, $i) => {
							$ii.totalprice = 0;
							$ii.salespaymentshow = false;
							$ii.salesdetail.forEach(($jj, $j) => {
								$ii.totalprice += $jj.cartheader.printprice;
								$ii.totalprice += $jj.cartheader.deliveryprice;
								$ii.totalprice += $jj.cartheader.discount;
							});
						});
						if (whendone instanceof Function) {
							whendone();
						}
					} else {
						this.salesnotverifs = null;
						console.log('Data sales payment verif belum ada');
						if (whenfailed instanceof Function) {
							whenfailed('data return = null');
						}
					}
					this.showsalesloading = false;
				}, error => {
					if (whenfailed instanceof Function) {
						whenfailed('data return error');
					}
					this.showsalesloading = false;
				}
			);
		}
	}
	
	getsalesnopayment(whendone, whenfailed) {
		if(!this.showsalesloading){
			this.showsalesloading = true;
			
			let url = this.global.api + "select/getsalesnopayment";
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
				response => {
					if (response != null) {
						this.salesnopayments = response;
						this.salesnopayments.forEach(($ii, $i) => {
							$ii.totalprice = 0;
							$ii.salespaymentshow = false;
							$ii.salesdetail.forEach(($jj, $j) => {
								$ii.totalprice += $jj.cartheader.printprice;
								$ii.totalprice += $jj.cartheader.deliveryprice;
								$ii.totalprice += $jj.cartheader.discount;
							});
						});
						if (whendone instanceof Function) {
							whendone();
						}
					} else {
						console.log('data payment tidak ada/kosong');
						if (whenfailed instanceof Function) {
							whenfailed('data return = null');
						}
					}
					this.showsalesloading = false;
				}, error => {
					if (whenfailed instanceof Function) {
						whenfailed('data return error');
					}
					this.showsalesloading = false;
				}
			);
		}
	}
	
	insertcustomerbankacc(){
		console.log(this.paydialog.custbankaccname + 'name');
		let post = {
			'app_token' 							: this.global.logintoken,
			'usertype'								: this.global.usertype,
			'userID'									: this.global.userdata.id,
			//'customerID'							: $paydialog.customerID,
			//'bankID'									: this.bankID,
			'custaccname'							: this.accname,
			'custaccno'								: this.accountno
		};
		
		// this.ajaxinsert(post, function(response){
		// 	//whendone
		// 	this.custbankaccs = response;
		// }, function(errorstring, errordata=null){
		// 	//whenfailed
		// 	if(errorstring != ""){
		// 		this.errormessage = errorstring;
		// 	}
		// 	if(errordata != null){
		// 		console.log(errordata);
		// 	}
		// });
	}
	
	ajaxinsert(post, whendone, whenfailed){
		let url = this.global.api+"";
		
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
						whendone(response);
					}else{
						whenfailed("Hasil bukan berupa array");
					}
				}
				else{
					whenfailed("Data kosong.");
				}
			}, error => {
				whenfailed("Error", error);
			}
		);
	}
	
	async showselectcustomerbank(){
		const alert = await this.alertController.create({
			title: "Use this lightsaber?",
			message: 'Do you agree to use this lightsaber to do good across the galaxy?',
			buttons: ['Disagree', 'Agree']
		});
		
		alert.present();
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
	
	
}
