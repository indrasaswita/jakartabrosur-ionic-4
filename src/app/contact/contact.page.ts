import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
	customers: any = [];
	data: Observable<any>;
	customerdownloading: boolean;

	constructor(public http: HttpClient){
		this.getData();
	}

	getData(){
		this.customerdownloading = true;
		var customersurl = 'http://localhost/jakartabrosur/public/API/customers/all';

		this.data = this.http.get(customersurl);
		if(this.data != null){
			this.data.subscribe(data=>{
				this.customers = data;
				this.customers.forEach(function(customer){
					customer.created_at = new Date(customer.created_at);
				});
			});
		}
	}
}
