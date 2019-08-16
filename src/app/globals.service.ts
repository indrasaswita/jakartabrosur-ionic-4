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


  constructor() {
		this.userdata = {
			'name': "[ not set ]"
		};
		this.api = "http://localhost/jakartabrosur/public/API/io/";
		// this.api = "http://www.jakartabrosur.com/API/io/";
  }
}
