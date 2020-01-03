import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
	public onesignalID : any = null;
	public logintoken: any = null;
	public userdata: any = null;
	public usertype: string = null;
	public api: string = null;


	public sales: any = [];
	public expenseprices: any = [];
	public carts: any = [];
	public employees: any = [];
	public customers: any = [];
	public customerpayment: any = [];
	public customersales: any = [];
	public roles: any = [];
	public papers: any = [];
	public customeracc: any = null;
	public curls: any = [];
	public custbankaccs: any = [];
	public salespaymentverif: any = [];
	public loginerror: boolean = false;

	public loginloading: boolean = false;
	public employeesdownloading: boolean = false;
	public customersdownloading: boolean = false;
	public customerpaymentdownloading: boolean = false;
	public customersalesdownloading: boolean = false;
	public rolesdownloading: boolean = false;
	public cartsdownloading: boolean = false;
	public salesdownloading: boolean = false;
	public expensepricesdownloading: boolean = false;
	public papersdownloading: boolean = false;
	public curldownloading: boolean = false;


  constructor() {
		this.userdata = {
			'name': "[ not set ]"
		};
		//this.api = "http://septianard/jakartabrosur/public/API/io/";
	//	this.api = "http://www.jakartabrosur.com/API/io/";
		this.api = "http://localhost/jakartabrosur/public/API/io/";
  }
  
	makeDate = function($input){
		if ($input == null) return null;
		if ($input == 'null') return null;
		let temp = $input.split(' ')[0];
		temp = temp.split('-');
		return new Date(temp[0], temp[1]-1, temp[2]);
	}
	
	makeDateTime = function($input){
		if ($input == null) return null;
		if ($input == 'null') return null;
		if ($input == '') return null;
		let temp = $input.split(' ')[0];
		temp = temp.split('-');
		let temp2 = $input.split(' ')[1];
		temp2 = temp2.split(':');
		return new Date(temp[0], temp[1]-1, temp[2], temp2[0], temp2[1], temp2[2]);
	}
}
