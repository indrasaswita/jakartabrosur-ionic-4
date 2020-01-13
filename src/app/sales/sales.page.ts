import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
	
	private sales: any = [];
	
  constructor(
  	private global: GlobalsService,
  	private router: Router,
	) { }

  ngOnInit() {
  	console.log(this.sales);
  }
	
	
	ionViewWillEnter(){
		this.getsaledata();
	}
	
	getsaledata(){
		let url = this.global.api + "select/allsales";
		let self = this;
		this.sales = [];
		
		this.global.dopost(url, function(data){
			self.sales = data;
			self.sales.forEach(($ii, $i)=>{
				$ii.showdetail = false
				$ii.created_at = self.global.makeDateTime($ii.created_at);
			});
		}, function(error){
		
		})
	}


  toggleSaleheader(input){
  	let navigationExtras:NavigationExtras = {
  		queryParams: {
  			special: JSON.stringify(input)
  		}
  	};

  	this.router.navigate(['saledetails'], navigationExtras);
  }

}
