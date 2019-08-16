import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.page.html',
  styleUrls: ['./cartdetails.page.scss'],
})
export class CartdetailsPage implements OnInit {

	data:any;

  constructor(
  	private global: GlobalsService,
  	private router: Router,
  	private activatedRoute: ActivatedRoute
	) { 
  	this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
  			console.log(this.data);
      }
    });
  }

  ngOnInit() {

  }

}
